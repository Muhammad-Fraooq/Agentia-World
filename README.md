# Agentia World 🤖

A modern, AI-powered platform built with Next.js 15, React 19, and TypeScript. Agentia World provides intelligent agent solutions with a beautiful, responsive UI powered by Tailwind CSS and Framer Motion animations.

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css)

## 🌟 Features

- **Modern Stack**: Next.js 15 with App Router and React 19
- **TypeScript**: Full type safety across the codebase
- **Styling**: Tailwind CSS for utility-first styling
- **Animations**: Framer Motion for smooth, professional animations
- **Icons**: React Icons for comprehensive icon library
- **Typewriter Effects**: Dynamic text animations for engaging UI
- **Responsive Design**: Mobile-first, works on all devices
- **SEO Optimized**: Built-in Next.js SEO capabilities

## 📁 Project Structure

```
Agentia-World/
├── app/                      # Next.js App Router
│   ├── agents/              # AI Agents page
│   ├── api/                 # API routes
│   ├── contact/             # Contact page
│   ├── pricing/             # Pricing page
│   ├── technalogy/          # Technology page
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/              # Reusable React components
│   ├── chatbot/            # Chatbot component(s)
│   ├── Footer.tsx          # Footer component
│   ├── Header.tsx          # Header/Navigation component
│   ├── Hero.tsx            # Hero section component
│   └── TypeWriter.tsx      # Typewriter effect component
├── lib/                     # Utility functions and helpers
│   └── api.ts              # API utilities
├── public/                  # Static assets
├── .vscode/                 # VS Code settings
├── eslint.config.mjs        # ESLint configuration
├── next.config.ts           # Next.js configuration
├── package.json             # Dependencies and scripts
├── postcss.config.mjs       # PostCSS configuration
├── tailwind.config.ts       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18.18 or later)
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/agentia-world.git
   cd agentia-world
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up environment variables** (if needed)
   ```bash
   # Create .env.local file
   cp .env.example .env.local
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint for code quality |

## 🛠️ Configuration

### Tailwind CSS

Customize the design system in `tailwind.config.ts`:

```ts
// tailwind.config.ts
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### TypeScript

TypeScript configuration is located in `tsconfig.json`. The project uses strict mode for type safety.

### ESLint

Code quality is maintained with ESLint. Configuration is in `eslint.config.mjs`.

## 🎨 Component Architecture

### Core Components

- **Header**: Navigation and branding
- **Hero**: Landing page hero section with animations
- **Footer**: Site footer with links
- **TypeWriter**: Dynamic typewriter text effect
- **Chatbot**: AI chatbot interface

### Page Structure

All pages are located in the `app/` directory using Next.js App Router conventions.

## 🌐 Deployment

### Vercel (Recommended)

The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new):

1. Push your code to GitHub
2. Import your repository to Vercel
3. Deploy with one click

### Other Platforms

This Next.js app can be deployed to any platform that supports Node.js:
- Netlify
- AWS Amplify
- Railway
- Render

### Production Build

```bash
npm run build
npm run start
```

## 🧪 Testing

*(Add your preferred testing framework)*

Recommended setup:
```bash
npm install -D @testing-library/react @testing-library/jest-dom vitest
```

## 📝 Code Style

This project follows these conventions:
- **TypeScript**: Strict typing
- **ESLint**: Next.js recommended rules
- **Prettier**: Code formatting (if configured)
- **Component naming**: PascalCase
- **File naming**: PascalCase for components, kebab-case for others

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Vercel](https://vercel.com/) - Deployment platform
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library

## 📞 Support

For support and questions:
- Open an issue on GitHub
- Contact: [Gmail](muhammad888xyz@gmail.com)

---

**Built with ❤️ using Next.js and React**
