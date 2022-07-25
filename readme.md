# Meteor & React Playground: A starter template for prototyping and playing around.

Planing to build an enterprise level prototyping stack with Meteor and React

- Theming and frontend with Postcss & Tailwindcss
- Routing and Middleware with React Router 6

for starter.

What I am trying to achive is a light framework for enterprise level prototyping

should be first of all secure, optimized, tested and logged to be at an enterprice level

## Tailwindcss & Postcss Setup

With new version, Meteor now supports postcss parsing with its own `standard-minifier-css` package.

- https://docs.meteor.com/packages/standard-minifier-css.html
- https://guide.meteor.com/2.7-migration.html

## React Router & React Loadable

First a basic setup, later provider and middlewares

- https://reactrouter.com/docs/en/v6/getting-started/installation#basic-installation

and setting loadable components

- https://github.com/CaptainN/npdev-react-loadable

## BACKEND

- Collections
- Methods
- Publications
- Repositories
- Services
- Events

## Super Collections; Schemas, Helpers & Hooks

Back-end starts with the Mongo Collection and to have a intact and readable code these are the important steps to have a more defined and configuarable Collection (Modal, Module or Domain)

### Collections and Schemas

- https://guide.meteor.com/collections.html
- https://github.com/longshotlabs/simpl-schema
- https://atmospherejs.com/aldeed/collection2

### Collection & Assosiation Helpers

- https://guide.meteor.com/collections.html#collection-helpers
- https://guide.meteor.com/collections.html#association-helpers
- https://atmospherejs.com/dburles/collection-helpers

### Collection Hooks on insert | update | remove

- https://guide.meteor.com/collections.html#hooks
- https://github.com/Meteor-Community-Packages/meteor-collection-hooks/
- http://www.discovermeteor.com/blog/a-look-at-meteor-collection-hooks/

## Super Methods; Validation, Middlewares

### Advanced Methods

- https://guide.meteor.com/methods.html#advanced-boilerplate
- https://guide.meteor.com/methods.html#validated-method
- https://github.com/meteor/validated-method

### Repositories

- https://github.com/guncebektas/examples/blob/main/complex-todos-svelte/imports/shared/repository/baseRepository.js

## Testing

Started with the tutorial and guide. Some changes due to validatedMethods usage.

- https://guide.meteor.com/testing.html
- https://react-tutorial.meteor.com/simple-todos/12-testing.html
- https://github.com/meteor/validated-method#method_executecontext-object-args-object

### OOP (object-oriented) JS & JS Docs (TS Like JS)

- https://jsdoc.app/
