# As-Saadah Islamic Organization Website

## Overview
This project is a modern, responsive website for As-Saadah Islamic Organization, serving as its digital presence. It provides information about the organization's mission, services, events, and community activities. Key capabilities include a bilingual interface (English/Arabic), prayer times integration, event management, donation processing, and contact functionality. The business vision is to establish a professional and engaging online hub for the community.

## User Preferences
Preferred communication style: Simple, everyday language.
Design preference: Modern, clean blue theme with unified color palette for professional appearance.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript.
- **Build Tool**: Vite.
- **Routing**: Wouter.
- **State Management**: TanStack Query (React Query) for server state.
- **Styling**: Tailwind CSS with shadcn/ui component library ("new-york" style variant).
- **Animation**: Framer Motion.
- **Theme System**: Custom theme provider supporting light/dark modes with CSS variables.
- **Design System**: Gradient design with a modern blue color palette (hsl(213, 85%, 45%)) and soft light blue shades (#bcd8ff to #4b96ff). Typography uses Inter for Latin and Amiri for Arabic. Mobile-first responsive design.
- **Key Features**: Multilingual support (English, Arabic, Urdu) with RTL, animated SVG mosque logo, enhanced UI/UX with parallax scrolling and micro-animations, modern card layouts, gradient effects, and professional service detail pages.

### Backend Architecture
- **Server**: Express.js with TypeScript.
- **API Design**: RESTful API structure (`/api` prefix).
- **Middleware**: Custom logging and error handling.
- **Session Management**: Express sessions with PostgreSQL storage using `connect-pg-simple`.

### Data Layer
- **ORM**: Drizzle ORM for PostgreSQL.
- **Database**: PostgreSQL with Neon Database serverless connection.
- **Schema Management**: Drizzle Kit for migrations.

### Project Structure
- **Monorepo**: Organized into `client`, `server`, and `shared` directories.
- **Shared Directory**: Common TypeScript schemas and type definitions.
- **Path Aliases**: Configured for cleaner code organization.

## External Dependencies

### Core Technologies
- **Database**: PostgreSQL via Neon Database.
- **ORM**: Drizzle ORM.
- **Frontend Framework**: React 18 with TypeScript.
- **Backend Framework**: Express.js with TypeScript.
- **Build System**: Vite (frontend) and esbuild (backend).

### UI and Design
- **Component Library**: shadcn/ui (Radix UI primitives).
- **Styling**: Tailwind CSS.
- **Animation**: Framer Motion.
- **Icons**: Lucide React.
- **Fonts**: Google Fonts (Inter, Amiri).

### Development and Tooling
- **State Management**: TanStack Query.
- **Form Handling**: React Hook Form with Zod validation.
- **Routing**: Wouter.
- **Session Storage**: `connect-pg-simple`.

### External APIs and Services
- **Prayer Times**: Aladhan Islamic Calendar API for Hijri dates and prayer times.
- **Image Hosting**: Unsplash (for placeholder images).