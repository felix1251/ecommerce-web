[Deployed Website](https://next-basket-nine.vercel.app/)

## Dev Environment

Install Dependecies

```
npm install
```

Run the development server:

```
npm run dev
```

## Design Pattern

Atomic Design Pattern [Reference Here](https://medium.com/@janelle.wg/atomic-design-pattern-how-to-structure-your-react-application-2bb4d9ca5f97)

### Folder Structure

```md
next-basket
├── components
│ ├── atoms
│ ├── molecules
│ ├── organisms
│ ├── templates
├── app (serve as pages)
```

The atomic structure consists of five levels: atoms, molecules, organisms, templates, and pages.
Each level represents a different level of abstraction and encapsulates related components.
Atomic Design offers a clear and hierarchical structure for organizing UI elements.

1. Atoms - Basic building blocks of matter, such as a button, input or a form label. They’re not useful on their own.

2. Molecules - Grouping atoms together, such as combining a button, input and form label to build functionality.

3. Organisms - Combining molecules together to form organisms that make up a distinct section of an interface (i.e. navigation bar)

4. Templates - Consisting mostly of groups of organisms to form a page — where clients can see a final design in place.

5. Pages - An ecosystem that views different template renders. We can create multiple ecosystems into a single environment — the application.

## Light house scores

Product view (ex. /products/:id)

![product page](/images/lighthouse%20score.png)

## Dependencies

I'm using TailwindCSS for custom styles and MUI for icons and components. The majority of the components are custom-made to ensure complete customization and maintainability. I use as few libraries as possible to avoid dependency overload.

```json
"dependencies": {
  "@headlessui/react": "^1.7.18",
  "@mui/icons-material": "^5.15.7",
  "@mui/material": "^5.15.7",
  "@reduxjs/toolkit": "^2.1.0",
  "axios": "^1.6.7",
  "next": "14.1.0",
  "react": "^18",
  "react-dom": "^18",
  "react-hot-toast": "^2.4.1",
  "react-redux": "^9.1.0",
  "redux-persist": "^6.0.0"
},
"devDependencies": {
  "@tailwindcss/typography": "^0.5.10",
  "@types/node": "^20",
  "@types/react": "^18",
  "@types/react-dom": "^18",
  "autoprefixer": "^10.0.1",
  "eslint": "^8",
  "eslint-config-next": "14.1.0",
  "postcss": "^8",
  "tailwindcss": "^3.3.0",
  "typescript": "^5"
}
```
