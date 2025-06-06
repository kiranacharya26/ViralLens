# LunaGlow - Premium Korean Skincare

A modern, responsive web application showcasing premium Korean skincare products with an elegant user interface and seamless user experience.

## Overview

LunaGlow is a sophisticated e-commerce platform that brings the essence of Korean skincare to users worldwide. The application features a clean, modern design with smooth animations and intuitive navigation, making it easy for users to explore and learn about premium skincare products.

## Design Rationale

### UX/UI Design
- Created using [Creatie](https://creatie.com) for modern, responsive design layouts
- Implemented a clean, minimalist aesthetic with rose-themed color palette
- Focused on user-friendly navigation and smooth transitions
- Mobile-first approach with responsive design for all screen sizes
- Custom favicon design featuring a moon symbol with rose gradient, representing the brand's identity

### AI-Generated Assets
- Product and hero images generated using [Galileo AI](https://galileo.ai) and [DALL-E](https://openai.com/dall-e-2)
- Images optimized for web performance while maintaining visual quality
- Consistent visual style across all AI-generated assets

## Technical Implementation

### Frontend
- React + TypeScript for robust type-safe development
- Tailwind CSS for utility-first styling
- Framer Motion for smooth animations
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
[Your Netlify URL]

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
- Framer Motion
- Node.js

