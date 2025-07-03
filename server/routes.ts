import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertBookingSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Create a booking
  app.post("/api/bookings", async (req, res) => {
    try {
      const result = insertBookingSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({
          message: "Invalid booking data",
          error: fromZodError(result.error).toString(),
        });
      }

      const booking = await storage.createBooking(result.data);
      res.status(201).json({ booking });
    } catch (error) {
      console.error("Error creating booking:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Get all bookings
  app.get("/api/bookings", async (req, res) => {
    try {
      const bookings = await storage.getBookings();
      res.json({ bookings });
    } catch (error) {
      console.error("Error fetching bookings:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Get a specific booking
  app.get("/api/bookings/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid booking ID" });
      }

      const booking = await storage.getBooking(id);
      if (!booking) {
        return res.status(404).json({ message: "Booking not found" });
      }

      res.json({ booking });
    } catch (error) {
      console.error("Error fetching booking:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Update booking status
  app.patch("/api/bookings/:id/status", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid booking ID" });
      }

      const { status } = req.body;
      if (!status || typeof status !== "string") {
        return res.status(400).json({ message: "Status is required" });
      }

      const booking = await storage.updateBookingStatus(id, status);
      if (!booking) {
        return res.status(404).json({ message: "Booking not found" });
      }

      res.json({ booking });
    } catch (error) {
      console.error("Error updating booking status:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
