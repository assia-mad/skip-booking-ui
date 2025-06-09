# Skip Selector UI

## Live Preview
You can find the live preview of the project deployed to netlify via this link: https://velvety-dasik-805471.netlify.app/

## Sandbox Link
The sandbox link can be found via this link: https://codesandbox.io/p/github/assia-mad/skip-booking-ui/main?import=true

## Project Overview

A modern skip selection interface built with React, TypeScript, and Tailwind CSS, emphasizing clean architecture, responsive design, and exceptional user experience.

## Architecture & Code Quality

### Project Structure
src/
├── components/       # Reusable UI components
├── hooks/           # Custom React hooks
├── pages/           # Page-level components
├── services/        # API integration layer
├── types/           # TypeScript definitions
└── utils/           # Helper functions


### Technical Implementation

**Clean Code Principles**
- Single responsibility components
- Descriptive naming conventions
- DRY principle throughout
- Proper separation of concerns

**React Best Practices**
- Functional components with hooks
- Component composition pattern
- Proper prop drilling avoidance

**TypeScript Integration**
- Strict type checking enabled
- Interface definitions for all data structures
- Type-safe props and state management

**Custom Hooks**
- `useSkipData` - Encapsulates API calls and data fetching
- `useSkipSelection` - Manages selection state and logic
- `useMobileDetection` - Handles responsive behavior
- Clean abstraction of business logic from UI

**Error Handling**
- Dedicated error boundary components
- Loading states for better UX
- User-friendly error messages

**Tailwind CSS Architecture**
- Utility-first approach for rapid development
- Consistent spacing with 8px grid system
- Semantic color variables
- Responsive utilities for all breakpoints

## Design Implementation

### Visual Design
- Card-based layout for optimal information display
- Clear visual hierarchy with typography scale
- Professional color coding for features and restrictions
- Smooth transitions and hover states

### User Experience
- Sticky summary bar for constant selection visibility
- One-click selection process
- Clear pricing and feature display
- Touch-optimized interactive elements
- Instant visual feedback on interactions

### Responsive Design
- Mobile-first development approach
- Fluid layouts adapting to all screen sizes
- Optimized touch targets for mobile devices
- Consistent experience across devices

## Key Features

- **Skip Cards**: Visual representation with all essential information
- **Smart Selection**: Persistent selection state with visual indicators
- **Loading States**: Skeleton screens during data fetching
- **Error Recovery**: Graceful handling of API failures
- **Type Safety**: Complete TypeScript coverage preventing runtime errors

## Technical Stack

- React 18 with Hooks
- TypeScript 4.x
- Tailwind CSS 3.x
- Modern ES6+ JavaScript
- Component-based architecture

## Code Quality Metrics

- 100% TypeScript coverage
- Modular component structure
- Reusable custom hooks
- Consistent code style

---

This implementation demonstrates modern frontend development practices, combining technical excellence with user-centered design principles.