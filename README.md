# My Posse App

A modern, component-based Next.js application with a focus on server-side rendering and optimal performance.

## 🏗️ Architecture Overview

This application follows Next.js 13+ App Router best practices with a clear separation between server-side and client-side components.

### Component Structure

```
src/
├── app/                          # Next.js App Router
│   ├── page.tsx                 # Main page (Server Component)
│   ├── layout.tsx               # Root layout
│   ├── globals.css              # Global styles
│   └── page.module.css          # Page-specific styles
├── components/                   # Reusable components
│   ├── layout/                  # Layout components
│   │   ├── Header.tsx          # Header wrapper (Server Component)
│   │   ├── Header.module.css   # Header styles
│   │   ├── MusicButton.tsx     # Music control (Client Component)
│   │   ├── MusicButton.module.css
│   │   ├── MenuButton.tsx      # Menu toggle (Client Component)
│   │   └── MenuButton.module.css
│   ├── background/              # Background components
│   │   ├── VideoBackground.tsx # Video player (Client Component)
│   │   └── VideoBackground.module.css
│   ├── navigation/              # Navigation components
│   │   ├── Navigation.tsx      # Menu overlay (Client Component)
│   │   ├── Navigation.module.css
│   │   ├── NavigationMenu.tsx  # Menu buttons (Client Component)
│   │   └── NavigationMenu.module.css
│   ├── modal/                   # Modal components
│   │   ├── Modal.tsx           # Modal wrapper (Client Component)
│   │   ├── Modal.module.css
│   │   ├── ModalContent.tsx    # Content router (Client Component)
│   │   └── content/            # Modal content components
│   │       ├── AboutContent.tsx    # About section (Server Component)
│   │       ├── ProductsContent.tsx # Products section (Client Component)
│   │       ├── PartnersContent.tsx # Partners section (Server Component)
│   │       ├── SocialsContent.tsx  # Social links (Server Component)
│   │       └── ModalContent.module.css
│   └── providers/               # Context providers
│       └── AudioProvider.tsx   # Audio state provider (Client Component)
├── hooks/                       # Custom React hooks
│   ├── useMusicControl.ts      # Music control logic
│   ├── useVideoControl.ts      # Video control logic
│   ├── useMenuControl.ts       # Menu state management
│   └── useModalControl.ts      # Modal state management
├── data/                        # Static data
│   └── products.ts             # Product information (Server-side)
└── types/                       # TypeScript type definitions
```

## 🎯 Design Principles

### Server-Side First
- **Server Components**: Used wherever possible for better performance and SEO
- **Static Data**: Product information and static content are server-side
- **Minimal Client JavaScript**: Only interactive components use 'use client'

### Component Separation
- **Single Responsibility**: Each component has one clear purpose
- **CSS Modules**: Scoped styling for each component
- **Props Interface**: Clear TypeScript interfaces for component props

### State Management
- **Custom Hooks**: Encapsulated logic for specific functionality
- **Local State**: Component-level state where appropriate
- **No Global State**: Avoided unnecessary complexity

## 🚀 Performance Features

- **Server-Side Rendering**: Static content rendered on server
- **Code Splitting**: Automatic with Next.js App Router
- **CSS Modules**: Scoped styles prevent conflicts
- **Optimized Images**: Proper alt tags and loading strategies

## 🎨 Styling Approach

- **CSS Modules**: Component-scoped styles
- **Consistent Naming**: BEM-like methodology
- **Responsive Design**: Mobile-first approach
- **CSS Variables**: Consistent color scheme and spacing

## 📱 Component Breakdown

### Server Components (Static)
- `Header.tsx` - Layout wrapper
- `AboutContent.tsx` - Static about information
- `PartnersContent.tsx` - Static partner information
- `SocialsContent.tsx` - Static social links
- `products.ts` - Static product data

### Client Components (Interactive)
- `MusicButton.tsx` - Audio control
- `MenuButton.tsx` - Menu toggle
- `VideoBackground.tsx` - Video player
- `Navigation.tsx` - Menu overlay
- `NavigationMenu.tsx` - Menu buttons
- `Modal.tsx` - Modal wrapper
- `ModalContent.tsx` - Content router
- `ProductsContent.tsx` - Interactive product selection

## 🔧 Custom Hooks

- **useMusicControl**: Manages audio state and playback
- **useVideoControl**: Handles video transitions and state
- **useMenuControl**: Manages menu open/close animations
- **useModalControl**: Controls modal visibility

## 📁 File Naming Conventions

- **Components**: PascalCase (e.g., `MusicButton.tsx`)
- **CSS Modules**: Same name as component + `.module.css`
- **Hooks**: camelCase starting with 'use' (e.g., `useMusicControl.ts`)
- **Data**: camelCase (e.g., `products.ts`)
- **Types**: PascalCase (e.g., `ProductKey`, `Product`)

## 🚀 Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## 🎯 Key Benefits

- **Maintainability**: Clear separation of concerns
- **Performance**: Server-side rendering where possible
- **Scalability**: Easy to add new components and features
- **Developer Experience**: Clear structure and naming conventions
- **SEO**: Server-side rendered content
- **Accessibility**: Proper ARIA labels and semantic HTML

## 🔮 Future Enhancements

- Add unit tests for components
- Implement error boundaries
- Add loading states and skeletons
- Implement internationalization
- Add analytics and monitoring
- Optimize bundle size with dynamic imports
