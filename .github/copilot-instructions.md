# B2B Targetly - AI Agent Instructions

## Project Overview
B2B Targetly is a portfolio/landing page for a lead generation and data analysis business. Built with Next.js 13 (Pages Router), React 18, and Tailwind CSS v4, featuring shadcn/ui components and a dark-themed design with animated interactions.

## Architecture & Key Patterns

### Component Structure
- **Layout**: `src/components/layout/` - Header with gradient-border nav buttons, Footer
- **Sections**: `src/components/sections/` - Page sections (hero, about, services, clients, process, contact)
- **UI Components**: `src/components/ui/` - shadcn/ui components (button, card, sheet, dialog, etc.)
- **Main Page**: `src/app/page.tsx` - Single-page layout with sequential sections

### Animation System
All sections use the **SectionWrapper pattern** for scroll-triggered animations:
```tsx
// Pattern: useInView hook + CSS classes
const [ref, isInView] = useInView();
<section className={isInView ? "is-in-view" : ""}>
  <div className="fade-in-up">...</div>
</section>
```
- Hook: `src/hooks/use-in-view.ts` - Intersection Observer wrapper (fires once, then unobserves)
- Wrapper: `src/components/section-wrapper.tsx` - Applies gradient decorations and is-in-view class
- CSS: `src/app/globals.css` - `.fade-in-up` utility with opacity/transform transitions

### Styling Architecture

#### Tailwind CSS v4 Setup
- Uses **@theme directive** in `globals.css` for design tokens
- HSL color system with CSS variables (`--background`, `--primary`, etc.)
- Dark mode via `.dark` class (not media query)
- Colors reference HSL parts: `hsl(var(--primary))`

#### Custom Utilities (in globals.css)
- `.gradient-border-button` - Animated conic gradient borders on hover
- `.section-glow::before` - Radial gradient section headers
- `.fade-in-up` - Scroll animation (opacity + translateY)
- `.globe` - 3D rotating globe with CSS animations

**Important**: When adding UI elements, always use shadcn/ui components (Button, Card, Sheet, Dialog) per project instructions.

### Color Scheme (Dark Theme)
```css
--background: 236 96% 13%;     /* Deep blue #020540 */
--primary: 265 89% 68%;        /* Purple #7D29F2 */
--secondary: 260 59% 40%;      /* Dark purple #5129A6 */
--accent: 214 70% 60%;         /* Blue #367DD9 */
--foreground: 180 80% 95%;     /* Light cyan */
```

### Navigation Pattern
Header uses **gradient-border-button** class for nav items:
```tsx
<Link href="#section" className="gradient-border-button">
  <div className="content bg-transparent hover:bg-card">...</div>
</Link>
```
- Animated gradient border on hover (conic-gradient with rotation)
- "Contact Us" button has `always-on` class (gradient always visible)
- Mobile: Sheet component from shadcn/ui

## Development Workflow

### Commands
```bash
pnpm dev          # Start dev server on port 9002
pnpm build        # Static export build (output: 'export' in next.config.js)
pnpm start        # Production server
pnpm typecheck    # TypeScript validation (build errors ignored in next.config)
```

### Build Configuration
- **Static Export**: `output: 'export'` - No server-side features
- **Type Safety**: TS errors ignored during build (`ignoreBuildErrors: true`)
- **Images**: Configured for placehold.co, picsum.photos, s6.imgcdn.dev

### Form Handling
Server actions pattern in `src/app/actions.ts`:
```tsx
// Zod validation + FormState type
export async function submitContactForm(prevState, formData): Promise<FormState>
```
- Uses Zod for validation
- Returns structured error state with field-level messages
- Email notification to `rabbibabu007@gmail.com` (not yet implemented)

## Component Creation Guidelines

### When Adding New Components
1. **Use shadcn/ui primitives**: Button, Card, Sheet, Dialog, Input, Textarea
2. **Wrap sections in SectionWrapper** for consistent animations
3. **Apply gradient-border-button** for interactive nav elements
4. **Use HSL color variables**, not hardcoded colors
5. **Follow the fade-in-up animation pattern** for content reveals

### Example: New Section Component
```tsx
import SectionWrapper from '@/components/section-wrapper';
import { Button } from '@/components/ui/button';

export default function NewSection() {
  return (
    <SectionWrapper id="new-section">
      <div className="container">
        <div className="fade-in-up">
          <h2 className="font-headline text-4xl">Title</h2>
          <Button>Action</Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
```

## Key Files to Reference

- **Design System**: `src/app/globals.css` - All custom utilities and theme tokens
- **Color Palette**: `tailwind.config.ts` - HSL variables and extensions
- **Animation Hook**: `src/hooks/use-in-view.ts` - Scroll detection logic
- **Layout Examples**: `src/components/layout/header.tsx` - Navigation patterns
- **Section Template**: `src/components/sections/hero-section.tsx` - Full-featured example

## Critical Notes

- **No Server Components**: This is a static export project
- **Clean Code Only**: No explanations or comments in generated code
- **Component Splitting**: Break large components into smaller, reusable pieces
- **shadcn/ui First**: Always prefer shadcn/ui components over custom implementations
- **Animations**: Every new section should use SectionWrapper + fade-in-up pattern
