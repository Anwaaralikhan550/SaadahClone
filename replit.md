# As-Saadah Islamic Organization Website

## Overview

This is a modern, responsive website for As-Saadah Islamic Organization built with React, TypeScript, and Express.js. The application serves as a digital presence for the organization, providing information about their mission, services, events, and community activities. The website features a bilingual interface (English/Arabic), prayer times integration, event management, donation processing, and contact functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Updates (January 2025)

### Visual and Animation Enhancements
- ✅ **Prayer Times Removed**: Completely removed prayer times from homepage as requested
- ✅ **Mosque Logo Integration**: Created animated SVG mosque logo replacing "As Saadah" text logo in navbar
- ✅ **Multilingual System**: Added comprehensive language dropdown (English/Arabic/Urdu) with proper RTL support
- ✅ **Social Media Icons Fixed**: Replaced invisible Font Awesome icons with working SVG icons and hover effects
- ✅ **Homepage Animations**: Added smooth parallax scrolling and fade-in animations throughout sections
- ✅ **Islamic Theming**: Applied consistent Islamic color palette (green, gold, gradients) across all components
- ✅ **Enhanced Images**: Updated placeholder images with high-quality Islamic-themed stock photos
- ✅ **Performance Optimized**: Maintained existing functionality while adding lightweight modern animations

### Modern Design System (January 2025)
- ✅ **Modern Card Layout**: Implemented modern card designs with rounded corners and soft shadows across all sections
- ✅ **Gradient Effects**: Added gradient borders and hover glow effects for enhanced visual appeal
- ✅ **Button Modernization**: Updated all buttons with shimmer animations and gradient glows
- ✅ **Enhanced Animations**: Added hover transformations, scaling effects, and smooth transitions
- ✅ **Component Consistency**: Standardized modern styling across HeroSection, ServicesSection, EventsSection, ContactSection, and DonationSection
- ✅ **CSS Architecture**: Implemented reusable CSS classes for consistent modern styling patterns
- ✅ **Interactive Elements**: Enhanced user experience with responsive hover states and micro-interactions

### Comprehensive Foundation Services (January 2025)
- ✅ **Expanded Services Section**: Updated with all 12 comprehensive foundation service categories
- ✅ **Database Schema Enhancement**: Added tables for programs, volunteers, and success stories
- ✅ **Volunteering Section**: Complete volunteer registration and opportunity matching system
- ✅ **Financial Transparency**: Detailed fund distribution tracking and public reporting system
- ✅ **New Muslim Support**: Comprehensive onboarding and integration program for new converts
- ✅ **Social Safety Net**: Hostels, elderly care centers, and community welfare facilities
- ✅ **Technology Platform**: Digital learning, online services, and 24/7 support systems

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
- **Multilingual Support**: Complete language system supporting English, Arabic, and Urdu with RTL text direction
- **Animated Mosque Logo**: Custom SVG mosque logo with smooth animations for brand identity
- **Enhanced UI/UX**: Modern Islamic-themed design with smooth parallax scrolling and micro-animations
- **Social Media Integration**: Working social media icons with proper SVG implementation and hover effects
- **Event Management**: Full CRUD operations for community events with featured event highlighting
- **Donation System**: Donation processing with multiple types and frequency options
- **Contact Management**: Contact form with message storage and management
- **Newsletter Subscription**: Email subscription system for community updates
- **User Management**: User authentication and profile management system
- **Performance Optimized**: Lightweight animations and optimized loading without breaking functionality

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