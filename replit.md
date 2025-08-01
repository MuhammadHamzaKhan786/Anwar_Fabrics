# Anwar Duppata House - E-commerce Website

## Overview

Anwar Duppata House is a professional e-commerce website for a Pakistani fashion brand specializing in premium dupatta collections. The application features a modern, responsive interface showcasing four main product categories: Crystal Tissue, Dull Tissue, Chamak Net, and Dull Net dupattas.

The system includes a beautiful homepage, detailed about page highlighting the brand's heritage, comprehensive products catalog with filtering capabilities, and a functional contact form for customer inquiries.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for development
- **UI Library**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system and CSS variables
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js REST API
- **Language**: TypeScript with ES modules
- **Development**: TSX for TypeScript execution in development
- **Build Process**: ESBuild for production bundling
- **API Design**: RESTful endpoints following conventional patterns

### Data Storage Solutions
- **Database**: PostgreSQL configured via Drizzle ORM
- **ORM**: Drizzle with schema-first approach and type safety
- **Connection**: Neon Database serverless PostgreSQL
- **Development Storage**: In-memory storage implementation for development/testing
- **Migrations**: Drizzle Kit for database schema management

### Authentication and Authorization
- Currently using session-based approach with connect-pg-simple for PostgreSQL session storage
- No complex authentication implemented yet, prepared for future integration

### Data Models
- **Products**: Core entity with name, description, price, category (crystal-tissue/dull-tissue/chamak-net/dull-net), image URL, and stock quantities
- **Contacts**: Customer inquiries with name, phone, email, message, and timestamp for customer service management

### API Structure
- **Product Management**: CRUD operations, filtering by category, product catalog endpoints
- **Contact Management**: Contact form submissions and inquiry management
- **Error Handling**: Standardized error responses with proper HTTP status codes

### Component Architecture
- **Layout Components**: Navigation with mobile menu, responsive design optimized for e-commerce
- **Feature Components**: Product grids with filtering, contact forms, hero sections, category showcases
- **UI Components**: Reusable Shadcn/ui component library with pink color theme
- **Page Components**: Home, About, Products, and Contact views designed for Pakistani fashion brand

### Development Patterns
- **Type Safety**: Shared TypeScript types between frontend and backend
- **Validation**: Zod schemas for runtime type checking and validation
- **Code Organization**: Clear separation between client, server, and shared code
- **Path Aliases**: Configured for clean imports and better developer experience

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Query for state management
- **Development Tools**: Vite, TypeScript, ESBuild for build tooling
- **Routing**: Wouter for lightweight client-side routing

### Database and ORM
- **Neon Database**: Serverless PostgreSQL hosting (@neondatabase/serverless)
- **Drizzle ORM**: Type-safe database toolkit (drizzle-orm, drizzle-kit)
- **Session Storage**: connect-pg-simple for PostgreSQL session management

### UI and Styling
- **Radix UI**: Comprehensive component primitives (@radix-ui/react-*)
- **Tailwind CSS**: Utility-first CSS framework
- **Styling Utilities**: clsx, tailwind-merge, class-variance-authority
- **Icons**: Lucide React icon library

### Form and Validation
- **React Hook Form**: Form state management and validation
- **Zod**: Schema validation library
- **Hookform Resolvers**: Integration between React Hook Form and Zod

### Additional Utilities
- **Date Handling**: date-fns for date manipulation
- **Carousel**: Embla Carousel for interactive components
- **Command Palette**: cmdk for command interfaces
- **Development**: Replit-specific plugins for development environment integration

### Build and Development Tools
- **Vite**: Fast development server and build tool
- **PostCSS**: CSS processing with Autoprefixer
- **TypeScript**: Static type checking
- **ESBuild**: Fast JavaScript bundler for production builds