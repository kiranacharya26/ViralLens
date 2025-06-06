# LunaGlow - Premium Korean Skincare

A modern, responsive web application showcasing premium Korean skincare products with an elegant user interface and seamless user experience.

## Overview

LunaGlow is a sophisticated e-commerce platform that brings the essence of Korean skincare to users worldwide. The application features a clean, modern design with smooth animations and intuitive navigation, making it easy for users to explore and learn about premium skincare products.

## Development Environment

- Built using [Cursor AI](https://cursor.sh) - An AI-powered IDE that enhances development productivity
- Leveraged AI-assisted coding for rapid prototyping and implementation
- Utilized Cursor's intelligent code completion and real-time suggestions
- Integrated AI pair programming for efficient problem-solving

## AI Implementation Details

### Design & Assets
- Used DALL-E to generate the hero section background image with a soft, ethereal aesthetic
- Leveraged Leonardo AI to create product showcase images with consistent lighting and style
- Generated custom favicon using AI-assisted design tools
- Created background image collage for the contact page using AI-generated beauty-themed images

### Development
- Scaffolded React components using Cursor AI's code generation capabilities
- Implemented form validation logic with AI-assisted TypeScript typing
- Generated responsive layout structures using AI suggestions
- Created reusable UI components with AI-guided best practices
- Automated favicon generation script using AI-assisted Node.js code

### Code Quality
- Used AI to implement error handling patterns
- Generated TypeScript interfaces for API responses
- Created consistent styling patterns with Tailwind CSS
- Automated documentation generation

## Design Rationale

### UX/UI Design
- Created using [Creatie](https://creatie.com)-> [readdy](https://readdy.ai/) for modern, responsive design layouts
- Implemented a clean, minimalist aesthetic with rose-themed color palette
- Focused on user-friendly navigation and smooth transitions
- Mobile-first approach with responsive design for all screen sizes
- Custom favicon design featuring a moon symbol with rose gradient, representing the brand's identity

### AI-Generated Assets
- Product and hero images generated using [Leonardo AI](https://leonardo.ai/) and [DALL-E](https://openai.com/dall-e-2)
- Images optimized for web performance while maintaining visual quality
- Consistent visual style across all AI-generated assets

## Technical Implementation

### Frontend
- React + TypeScript for robust type-safe development
- Tailwind CSS for utility-first styling
- React Router for client-side routing
- Custom favicon implementation with multiple formats:
  - SVG for modern browsers
  - PNG variants (16x16, 32x32) for legacy support
  - Apple Touch Icon for iOS devices

### Backend
- Netlify Functions for serverless architecture
- Simple REST API endpoints for contact form and messages
- Environment variables for secure API key management

### API Endpoints

1. Contact Form Submission
```http
POST /api/contact
Content-Type: application/json

{
  "name": "string",
  "email": "string",
  "message": "string"
}

Response:
{
  "success": true
}
```

2. Messages Retrieval
```http
GET /api/messages

Response:
[
  {
    "name": "string",
    "email": "string",
    "message": "string",
    "timestamp": "string"
  }
]
```

### API Testing & Debugging
To test and debug the backend implementation:

1. Open your browser's Developer Tools (F12 or right-click > Inspect)
2. Navigate to the Network tab
3. Filter by "Fetch/XHR" to see API calls
4. Key endpoints to monitor:
   - `/api/contact` - Contact form submissions
   - `/api/messages` - Message retrieval

## Setup & Run

1. Clone the repository:
```bash
git clone [repository-url]
cd lunaglow
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```env
# Frontend Environment Variables
VITE_API_URL=your_api_url
```

4. Run the development server:
```bash
npm run dev
```

5. For local development with Netlify functions:
```bash
npx netlify dev
```

## Deployment

The application is deployed on Netlify and can be accessed at:
(https://lunaglow.netlify.app/)

### Deployment Features
- Automatic deployments from main branch
- Netlify Functions for serverless backend operations
- Optimized asset delivery with Netlify CDN
- SSL/TLS encryption enabled
- Custom domain configuration
- Environment variable management through Netlify dashboard

## Tech Stack

- React + TypeScript
- Tailwind CSS
- Netlify Functions
- React Router
- Node.js
- Cursor AI (Development Environment)
- DALL-E & Leonardo AI (Asset Generation)

