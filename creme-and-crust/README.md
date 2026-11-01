# Crème & Crust: Premium Café Website

A frontend-only, four-page website for a fictional air-conditioned café. Built as a Cloud Computing college project by demonstrating a static, production-style website deployed to a cloud hosting platform.

## Pages (exactly four)

| Route | Page | Contents |
| --- | --- | --- |
| `/` | Home | Hero, featured categories, bestsellers, why choose us, atmosphere gallery, sample testimonials, footer |
| `/menu` | Menu | "Something Delicious Awaits" heading, search, category filters, 16 product cards, a "Your Favourites" section for liked dishes saved in the browser |
| `/about` | About Us & Contact | Café story, values, experience, opening hours, contact details, validated contact form (`#contact`) |
| `/login` | Login & Registration | Demo login, registration with password confirmation, show/hide password, Remember Me, Return to Home |

Unknown addresses redirect to the Home page, so there are no extra pages.

## Features

- Responsive navigation with a mobile menu, smooth scrolling and subtle entrance animations.
- Menu search by name and category filters, with a friendly empty state.
- Heart buttons to like dishes. Liked items appear in the "Your Favourites" section (also reachable from the heart icon in the navbar) and are saved in `localStorage`, so they survive a refresh.
- Prices shown in Indian rupees (INR).
- Contact form with required-field, email-format and message-length validation, plus a success message. The form explains that it is a frontend demonstration and does not send messages.
- Login and registration with inline validation, a clearly labelled demo flow and a Demo Login button.
- Reduced-motion support: animations and smooth scrolling are turned off when the visitor has requested reduced motion.
- Real food and café photographs from Pexels, with alt text and a fallback if an image fails to load.

## Technology

- React 18 with TypeScript
- Vite (build tool and development server)
- Tailwind CSS (styling)
- React Router (four routes)
- Lucide React (icons)
- Browser `localStorage` and `sessionStorage` for non-sensitive preferences only

No backend, database, server, or paid API is used.

## Project structure

```
src/
  components/   Shared UI (Navbar, Footer, ProductCard, CategoryFilter, Logo, Photo, ...)
    home/       Home page sections
    contact/    Contact details and form
    auth/       Login, registration and password input
  pages/        One file per route (HomePage, MenuPage, AboutContactPage, LoginPage)
  data/         Menu items and site content (edit this to change text, prices and photos)
  context/      Demo sign-in state shared across the app
  hooks/        Liked items, sign-in and scroll-reveal hooks
  lib/          Validation, demo sign-in storage, price formatting, button styles
public/         Static files, including the Netlify redirect rule
vercel.json     Vercel routing rule so every route loads the app
```

## Running locally

1. Install Node.js (version 18 or newer).
2. Open a terminal in the project folder and run `npm install`.
3. Run `npm run dev` and open the address shown in the terminal (usually `http://localhost:5173`).
4. To check the production build, run `npm run build`, then `npm run preview`.
5. Optional checks: `npm run lint` and `npm run typecheck`.

## Customising content

- **Menu items, prices and photos:** `src/data/menu.ts`. Bestsellers on the Home page are the items marked `bestseller: true`.
- **Business details, opening hours, social links, testimonials and gallery:** `src/data/site.ts`.
- **Colours and fonts:** `tailwind.config.js` (espresso, cream, caramel and beige palette) and `index.html` (Google Fonts).

Content to replace with the café's official details before going live:

- Address, phone number, email and social media links (set to illustrative values in `src/data/site.ts`).
- Social media links (currently `#`).
- Opening hours (sample timings).
- Testimonials (clearly labelled as samples; do not present them as real reviews).

## Authentication: important note

The login and registration page is a **demonstration only**:

- Passwords are checked for format but are never stored, compared or sent anywhere.
- The signed-in name and email are kept in the browser so the navbar can greet the visitor.
- Anyone can sign in with any valid-looking email and password. That is intentional for a demo.
- Password recovery is not implemented, and no emails are sent.

Real customer accounts need a secure backend or a managed authentication service (for example, Supabase Auth, Firebase Authentication or Auth0), with passwords hashed on the server and HTTPS everywhere. Frontend-only code cannot provide that security.

## Photo credits

All photographs are from [Pexels](https://www.pexels.com) and are free to use under the Pexels licence. They are stock images, not photographs of Crème & Crust. Replace them with the café's own photos when available.

## Deployment

See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for step-by-step instructions for Vercel, Netlify and GitHub Pages, and for the cloud computing overview.
