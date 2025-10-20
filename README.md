# Samarqand Restaurant Website

A modern, beautiful website for Samarqand Uzbek Restaurant in Vienna, Austria.

## Features

- 🎨 **Modern Design**: Beautiful UI with glassmorphism, gradients, and smooth animations
- 🍽️ **Interactive Menu**: Category-based menu with 3D card effects and filtering
- 📱 **Fully Responsive**: Optimized for all devices from mobile to desktop
- ⚡ **Performance Optimized**: Built with Next.js 14 and optimized images
- 🎭 **Smooth Animations**: Framer Motion animations throughout
- 🎯 **User-Focused**: Intuitive navigation and clear call-to-actions
- 🌍 **Cultural Elements**: Authentic Uzbek cultural design elements

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui
- **Icons**: Lucide React

## Getting Started

### Install Dependencies

\`\`\`bash
npm install
\`\`\`

### Run Development Server

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Project Structure

\`\`\`
samarqand-restaurant/
├── app/                   # Next.js app directory
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/           # React components
│   ├── hero/            # Hero section
│   ├── menu/            # Menu section
│   ├── about/           # About section
│   ├── gallery/         # Gallery section
│   ├── reservations/    # Reservations form
│   ├── testimonials/    # Customer reviews
│   ├── contact/         # Contact information
│   ├── layout/          # Layout components
│   └── ui/              # Reusable UI components
├── lib/                 # Utility functions and data
│   ├── utils.ts         # Helper functions
│   └── data/            # Menu and other data
└── public/              # Static assets
\`\`\`

## Customization

### Menu Data

Edit the menu items in \`lib/data/menuData.ts\`. Each menu item includes:
- Name and description
- Price
- Image URL
- Category
- Special tags (vegetarian, spicy, popular)

### Colors

The color scheme uses:
- **Primary (Amber)**: #F59E0B - Represents warmth and Uzbek gold
- **Secondary (Blue)**: #3B82F6 - Represents Samarqand's blue domes
- **Accent (Emerald)**: #10B981 - Represents hospitality

Colors can be customized in \`app/globals.css\` and \`tailwind.config.ts\`.

### Content

- **Hero Section**: \`components/hero/SamarqandHero.tsx\`
- **About Story**: \`components/about/AboutSection.tsx\`
- **Contact Info**: \`components/contact/ContactSection.tsx\`
- **Restaurant Details**: \`components/layout/Footer.tsx\`

## Features Breakdown

### Hero Section
- Full-screen hero with background image
- Smooth scroll navigation
- Animated statistics
- Clear CTAs for menu and reservations

### Menu Section
- Category tabs with smooth transitions
- 3D hover effects on menu items
- Badge system for popular/vegetarian/spicy items
- Beautiful image presentations

### About Section
- Restaurant story and history
- Feature highlights with icons
- Beautiful imagery

### Gallery
- Image grid with hover effects
- Showcases dishes and ambiance

### Reservations
- Comprehensive booking form
- Date, time, and guest selection
- Special requests field

### Testimonials
- Customer reviews with ratings
- Profile images
- Star ratings

### Contact Section
- Location, hours, phone, email
- Organized information cards

### Footer
- Social media links
- Quick navigation
- Complete contact information

## License

© 2025 Samarqand Restaurant Vienna. All rights reserved.
