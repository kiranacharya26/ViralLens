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

### AI-Generated Assets
- Product and hero images generated using [Galileo AI](https://galileo.ai) and [DALL-E](https://openai.com/dall-e-2)
- Images optimized for web performance while maintaining visual quality
- Consistent visual style across all AI-generated assets

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
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key

# Backend Environment Variables
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
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

## Tech Stack

- React + TypeScript
- Tailwind CSS
- Netlify Functions
- Stripe Integration
- React Router
- Framer Motion

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.