# Auto Service Website

## Overview

This is a full-stack web application for a professional automotive service business ("ПрофАвто"). It's a Russian-language website that showcases automotive services and allows customers to book appointments. The application uses modern web technologies with a focus on user experience and professional presentation.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom automotive theme
- **UI Components**: Radix UI components via shadcn/ui
- **State Management**: TanStack Query for server state
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Validation**: Zod schemas shared between client and server
- **Session Management**: Express sessions with PostgreSQL storage

### Development Architecture
- **Monorepo Structure**: Client, server, and shared code in one repository
- **Hot Reloading**: Vite dev server integrated with Express
- **Path Aliases**: Configured for clean imports (@/, @shared/, @assets/)

## Key Components

### Frontend Components
- **Landing Page**: Single-page application with multiple sections
- **Navigation**: Sticky header with smooth scrolling navigation
- **Hero Section**: Animated landing section with call-to-action
- **Services Section**: Grid layout showcasing automotive services
- **About Section**: Company information with statistics
- **Gallery Section**: Image gallery of work examples
- **Testimonials**: Customer reviews and ratings
- **Contact Section**: Contact information and booking form
- **Footer**: Company details and social links

### Backend Components
- **API Routes**: RESTful endpoints for booking management
- **Storage Layer**: Abstracted storage interface with in-memory implementation
- **Schema Validation**: Shared Zod schemas for type safety
- **Error Handling**: Centralized error handling middleware

### Shared Components
- **Database Schema**: Drizzle schema definitions for users and bookings
- **Type Definitions**: TypeScript types generated from schemas
- **Validation Schemas**: Zod schemas for API validation

## Data Flow

1. **User Interaction**: User fills out booking form on frontend
2. **Form Validation**: Client-side validation using React Hook Form + Zod
3. **API Request**: Form data sent to backend via fetch API
4. **Server Validation**: Backend validates data using shared Zod schemas
5. **Data Storage**: Booking stored in database via Drizzle ORM
6. **Response**: Success/error response sent back to client
7. **UI Update**: Toast notification shown to user

## External Dependencies

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Accessible UI primitives
- **Framer Motion**: Animation library for hero section
- **Lucide React**: Icon library
- **React Icons**: Additional icons (VK social media)

### Data and Forms
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form state management
- **Zod**: Schema validation
- **date-fns**: Date manipulation utilities

### Database and Backend
- **Drizzle ORM**: Type-safe database queries
- **Neon Database**: Serverless PostgreSQL
- **connect-pg-simple**: PostgreSQL session store

## Deployment Strategy

### Build Process
- **Client**: Vite builds React app to `dist/public`
- **Server**: esbuild bundles server code to `dist/index.js`
- **Assets**: Static files served from build directory

### Production Setup
- **Environment**: NODE_ENV=production
- **Database**: PostgreSQL via DATABASE_URL environment variable
- **Static Files**: Express serves built React app
- **API Routes**: Express handles /api/* routes

### Development Setup
- **Hot Reload**: Vite dev server with HMR
- **Proxy**: Vite proxies API requests to Express server
- **Database**: Development database configured via environment
- **Logging**: Request logging with response times

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- July 03, 2025. Initial setup
- July 03, 2025. Updated services section from cards to detailed list format with feature breakdown
- July 03, 2025. Added new team section showcasing 6 professional mechanics with experience and specializations
- July 03, 2025. Enhanced about section with company achievements and expanded information
- July 03, 2025. Updated contact section with additional contact methods and location details
- July 03, 2025. Enhanced hero section with extended company description