# As-Saadah Islamic Organization Website

## Overview

This is a modern, responsive website for As-Saadah Islamic Organization built with React, TypeScript, and Express.js. The application serves as a digital presence for the organization, providing information about their mission, services, events, and community activities. The website features a bilingual interface (English/Arabic), prayer times integration, event management, donation processing, and contact functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development patterns
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Styling**: Tailwind CSS with shadcn/ui component library using the "new-york" style variant
- **Animation**: Framer Motion for smooth transitions and interactive elements
- **Theme System**: Custom theme provider supporting light/dark modes with CSS variables

### Design System
- **Color Palette**: Gradient design with primary colors ranging from soft orange-red (#FF7A50) to soft purple (#B84DFF)
- **Typography**: Inter font for Latin text and Amiri for Arabic text
- **Components**: Comprehensive UI component library based on Radix UI primitives
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities
- **Internationalization**: Built-in support for English and Arabic with RTL layout handling

### Backend Architecture
- **Server**: Express.js with TypeScript for type-safe server development
- **API Design**: RESTful API structure with `/api` prefix for all endpoints
- **Middleware**: Custom logging middleware for API requests and comprehensive error handling
- **Session Management**: Express sessions with PostgreSQL storage using connect-pg-simple

### Data Layer
- **ORM**: Drizzle ORM configured for PostgreSQL with type-safe database operations
- **Database**: PostgreSQL with Neon Database serverless connection for cloud deployment
- **Schema Management**: Centralized schema definitions in shared directory for type consistency
- **Migrations**: Drizzle Kit for database schema management and migrations

### Project Structure
- **Monorepo Setup**: Organized into client, server, and shared directories
- **Client Directory**: React application with component-based architecture
- **Server Directory**: Express.js backend with modular route handlers and storage interfaces
- **Shared Directory**: Common TypeScript schemas and type definitions used across frontend and backend
- **Path Aliases**: Configured import aliases for cleaner code organization

### Key Features
- **Prayer Times Integration**: API for fetching and displaying Islamic prayer times
- **Event Management**: Full CRUD operations for community events with featured event highlighting
- **Donation System**: Donation processing with multiple types and frequency options
- **Contact Management**: Contact form with message storage and management
- **Newsletter Subscription**: Email subscription system for community updates
- **User Management**: User authentication and profile management system

### Development Features
- **Hot Module Replacement**: Vite integration with Express middleware for seamless development
- **Type Safety**: Full TypeScript coverage across frontend, backend, and shared modules
- **Error Handling**: Runtime error overlay for development debugging
- **Development Tools**: Replit-specific tooling for cloud development environment

## External Dependencies

### Core Technologies
- **Database**: PostgreSQL via Neon Database serverless platform
- **ORM**: Drizzle ORM with Drizzle Kit for schema management
- **Frontend Framework**: React 18 with TypeScript
- **Backend Framework**: Express.js with TypeScript
- **Build System**: Vite for frontend builds and esbuild for backend bundling

### UI and Design
- **Component Library**: shadcn/ui built on Radix UI primitives
- **Styling**: Tailwind CSS with PostCSS processing
- **Animation**: Framer Motion for interactive animations
- **Icons**: Lucide React for consistent iconography
- **Fonts**: Google Fonts (Inter for Latin, Amiri for Arabic)

### Development and Tooling
- **State Management**: TanStack Query for server state and caching
- **Form Handling**: React Hook Form with Zod validation
- **Routing**: Wouter for lightweight client-side routing
- **Development Server**: Vite with custom Express middleware integration
- **Session Storage**: connect-pg-simple for PostgreSQL session management

### External APIs and Services
- **Prayer Times**: Integration ready for Islamic prayer times API services
- **Email Services**: Newsletter subscription system (implementation pending)
- **Image Hosting**: Unsplash integration for placeholder images