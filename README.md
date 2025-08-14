# As-Saadah Islamic Organization Website

A modern, responsive website for As-Saadah Islamic Organization built with React, TypeScript, and Express.js. Features multilingual support (English/Arabic/Urdu), animated Islamic theming, and comprehensive community services management.

## 🌟 Features

### Core Functionality
- **Multilingual Support**: Full English, Arabic, and Urdu language support with proper RTL text direction
- **Animated Mosque Logo**: Custom SVG mosque logo with smooth hover animations
- **Islamic Theming**: Beautiful color palette with green, gold, and white gradients
- **Responsive Design**: Fully responsive layout optimized for mobile, tablet, and desktop

### User Interface
- **Smooth Animations**: Parallax scrolling, fade-ins, and slide-up animations throughout
- **Fixed Navigation**: Sticky navbar with smooth transitions and backdrop blur
- **Social Media Integration**: Working social media icons with brand-specific hover effects
- **Modern Typography**: Enhanced fonts with proper Arabic/Urdu text rendering

### Community Features
- **Event Management**: Display and manage community events
- **Donation System**: Multiple donation types and frequency options
- **Contact Management**: Contact form with message storage
- **Service Information**: Comprehensive information about Islamic services offered

## 🚀 Technology Stack

### Frontend
- **React 18** with TypeScript for type safety
- **Vite** for fast development and optimized builds
- **Tailwind CSS** with shadcn/ui components
- **Framer Motion** for smooth animations
- **Wouter** for lightweight routing

### Backend
- **Express.js** with TypeScript
- **PostgreSQL** with Neon Database
- **Drizzle ORM** for database operations
- **Express Sessions** for user management

### Development Tools
- **ESLint & TypeScript** for code quality
- **PostCSS** for CSS processing
- **Replit** for cloud development environment

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- npm or yarn package manager

### Local Development
1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/as-saadah-islamic-organization.git
   cd as-saadah-islamic-organization
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Setup:**
   Create a `.env` file with:
   ```env
   DATABASE_URL=your_postgresql_connection_string
   NODE_ENV=development
   ```

4. **Database Setup:**
   ```bash
   npm run db:push
   ```

5. **Start Development Server:**
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5000`

## 📁 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utility libraries
│   │   └── index.css      # Global styles
│   └── index.html
├── server/                # Backend Express application
│   ├── db.ts             # Database configuration
│   ├── index.ts          # Main server file
│   ├── routes.ts         # API routes
│   └── storage.ts        # Data storage interface
├── shared/               # Shared TypeScript schemas
│   └── schema.ts         # Database schemas
├── package.json
└── README.md
```

## 🎨 Design System

### Color Palette
- **Primary Green**: `#10b981` (Islamic green)
- **Primary Gold**: `#f59e0b` (Islamic gold)
- **Background**: Gradient combinations of green, gold, and white
- **Text**: High contrast colors for accessibility

### Typography
- **Primary Font**: Inter (Latin text)
- **Arabic/Urdu Font**: Amiri (Arabic script)
- **Responsive Scaling**: Fluid typography with clamp()

### Components
- Built with shadcn/ui component library
- Consistent hover effects and transitions
- Islamic-themed iconography and patterns

## 🌍 Multilingual Support

### Supported Languages
- **English** (Default, LTR)
- **Arabic** (RTL support)
- **Urdu** (RTL support)

### Implementation
- Dynamic language switching in navbar
- Automatic RTL/LTR layout adjustment
- Proper font loading for Arabic/Urdu scripts
- Complete UI translation coverage

## 🗃️ Database Schema

### Key Tables
- **Events**: Community events and announcements
- **Donations**: Donation tracking and management
- **Contacts**: Contact form submissions
- **Users**: User authentication and profiles

### ORM
- Uses Drizzle ORM for type-safe database operations
- Zod validation for API request/response validation
- PostgreSQL with JSON support for flexible data

## 🚀 Deployment

### Replit Deployment
This project is optimized for Replit deployment:
1. Import repository into Replit
2. Set environment variables in Replit Secrets
3. Run `npm install` and `npm run dev`
4. Use Replit's deployment features for production

### Other Platforms
- **Vercel**: Frontend deployment with API routes
- **Netlify**: Static site with serverless functions
- **Railway/Render**: Full-stack deployment with PostgreSQL

## 📱 Features Overview

### Homepage Sections
1. **Hero Section**: Welcome message with call-to-action buttons
2. **Mission Section**: Organization mission with statistics
3. **Services Section**: Islamic services offered
4. **Events Section**: Upcoming community events
5. **Donation Section**: Support the organization
6. **Contact Section**: Get in touch and find location

### Interactive Elements
- Smooth scrolling navigation
- Parallax background effects
- Hover animations on buttons and cards
- Responsive image galleries
- Form validation and submission

## 🤝 Contributing

We welcome contributions to improve the As-Saadah Islamic Organization website!

### Development Guidelines
1. Follow TypeScript best practices
2. Use the existing component structure
3. Maintain accessibility standards
4. Test responsive design on multiple devices
5. Follow Islamic design principles and cultural sensitivity

### Code Style
- Use TypeScript for all new code
- Follow existing naming conventions
- Add proper comments for complex logic
- Maintain consistent indentation (2 spaces)

## 📄 License

This project is developed for As-Saadah Islamic Organization. Please respect the organization's branding and content.

## 📞 Support

For technical support or questions about the website:
- Open an issue on GitHub
- Contact the development team
- Visit our community forums

---

Built with ❤️ for the Islamic community by the As-Saadah development team.