# UX Designer Portfolio

A modern, responsive portfolio website showcasing UX design case studies and personal bio. Built with React, TypeScript, and Tailwind CSS.

## Overview

This portfolio features a clean, professional design with smooth scrolling navigation and engaging visual elements. It's designed to showcase UX design work effectively while providing an excellent user experience.

## Features

- **Hero Section**: Eye-catching landing section with clear call-to-action buttons
- **Personal Bio**: Detailed about section with professional photo, background story, and expertise highlights
- **Case Studies**: Four featured projects with:
  - High-quality preview images
  - Project descriptions and impact metrics
  - Technology tags and categories
  - Individual case study cards with hover effects
- **Contact Footer**: Professional footer with social media links and contact information
- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Smooth Scrolling**: Intuitive navigation with smooth scroll behavior

## Case Studies Included

1. **FinFlow** - Banking App Redesign (60% faster transactions)
2. **HealthHub** - Patient Portal Dashboard (3x increase in portal usage)
3. **StyleBox** - E-commerce Platform (45% higher conversions)
4. **FitTrack Pro** - Fitness & Wellness App (85% user retention)

## Tech Stack

- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality UI components
- **Lucide React** - Beautiful icon library

## Project Structure

```
/
├── App.tsx                 # Main application component
├── components/
│   ├── Hero.tsx           # Hero/landing section
│   ├── Bio.tsx            # Personal bio section
│   ├── CaseStudies.tsx    # Case studies showcase
│   ├── Footer.tsx         # Footer with contact info
│   └── ui/                # shadcn/ui components
├── styles/
│   └── globals.css        # Global styles and Tailwind config
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/heythemba/ux-design-portfolio.git
cd ux-design-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Customization

To customize this portfolio for your own use:

1. **Update Personal Information**: 
   - Edit `components/Bio.tsx` to update your name, bio, and expertise
   - Replace the profile image URL with your own photo

2. **Add Your Case Studies**: 
   - Modify the `caseStudies` array in `components/CaseStudies.tsx`
   - Add your own project images, descriptions, and metrics

3. **Update Contact Information**: 
   - Edit `components/Footer.tsx` to add your email and social media links

4. **Customize Colors**: 
   - Modify the color scheme in `styles/globals.css`

## Deployment

This project can be easily deployed to various hosting platforms:

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the build folder or connect via Git
- **GitHub Pages**: Use GitHub Actions for automated deployments

## License

This project is open source and available under the MIT License.

## Contact

Haythem Baganna - sarah.chen@email.com

Project Link: [https://github.com/heythemba/ux-design-portfolio](https://github.com/heythemba/ux-design-portfolio)

---

Built with ❤️ by Haythem Baganna
