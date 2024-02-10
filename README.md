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

> The atomic structure consists of five levels: atoms, molecules, organisms, templates, and pages.
> Each level represents a different level of abstraction and encapsulates related components.

> Atoms:
> Basic building blocks of matter, such as a button, input or a form label. They’re not useful on their own.

> Molecules:
> Grouping atoms together, such as combining a button, input and form label to build functionality.

> Organisms:
Combining molecules together to form organisms that make up a distinct section of an interface (i.e. navigation bar)

> Templates:
> Consisting mostly of groups of organisms to form a page — where clients can see a final design in place.

> Pages:
> An ecosystem that views different template renders. We can create multiple ecosystems
> into a single environment — the application.


## Light house scores

Product view (ex. /products/:id)

![product page](/images/lighthouse%20score.png)
