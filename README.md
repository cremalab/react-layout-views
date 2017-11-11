# React Layout Views

Easy layouts for React & React Native

## Why

Creating UI layouts should be simple and declarative. 

The aim of this library is to provide a simple and intuative API for composing layouts by abstracting away certain flex concepts like flex-direction and main/cross axis alignment and replacing these with more intuitive terms like `horizontal`, `bottom`, `right`, and `center`.

## Examples

### Horizontal

```jsx
// This example produces a horizontal layout where 
// each section is spaced by 20px and the first section is 
// pushing its siblings to the right.

<Layout horizontal spacing='20px'>
  <Section grow>Content 1</Section>
  <Section>Content 2</Section>
  <Section>Content 3</Section>
</Layout>
```

### Nested Layouts

```jsx
// This example shows the previous example with
// the addition of a nested layout contained
// by the last section in the parent layout.

<Layout horizontal spacing='20px'>
  <Section grow>Content 1</Section>
  <Section>Content 2</Section>
  <Section>
    <Layout spacing='10px'>
      <Section>Content 1</Section>
      <Section>Content 2</Section>
      <Section>Content 3</Section>
    </Layout>
  </Section>
</Layout>
```

### Styling

```jsx
// This example shows how styles may be applied
// directly to `Layout` and `Section`.

<Layout horizontal spacing='20px' style={{background: 'red'}}> // does not produce inline styles
  <Section grow>Content 1</Section>
  <Section>Content 2</Section>
  <Section style={{padding: '1em'}}>Content 3</Section> // does not produce inline styles
</Layout>
```

## Setup

### Install
```shell
$ npm install react-layout-views
```

### Import
```jsx
import { Layout, Section } from 'react-layout-views' // web

// OR

import { Layout, Section } from 'react-layout-views/native' // native

...
```

## API

### `<Layout />`

The `Layout` component wraps multiple `Section` components.

#### Props

- `grow?: boolean | number` how should the Layout fill its container
- `spacing?: number (native) / string (web e.g. 20px, 2%, etc.)` spacing between child `<Section />`s
- `horizontal?: boolean` are child sections arranged horizontally or vertically
- `style?: object` JavaScript style object (on the web this is passed to styled-components and will not produce inline-styles). All platform-specific styling is supported.

##### Alignment

Alignment props arrange child `Sections` accordingly and can be combined (e.g. `<Layout bottom right>...</Layout>`).

- `center?: boolean`
- `centerVertical?: boolean`
- `centerHorizontal?: boolean`
- `top?: boolean`
- `right?: boolean`
- `bottom?: boolean`
- `left?: boolean`

### `<Section />`

The `Section` component subdivides a `Layout` and contains other components or another `Layout`.

#### Props

- `grow?: boolean | number` how should the `Section` fill its container
- `style?: object` JavaScript style object (on the web this is passed to styled-components and will not produce inline-styles). All platform-specific styling is supported.

##### Alignment

Alignment props arrange child content accordingly and can be combined (e.g. `<Section center right>...</Section>`).

- `center?: boolean`
- `centerVertical?: boolean`
- `centerHorizontal?: boolean`
- `top?: boolean`
- `right?: boolean`
- `bottom?: boolean`
- `left?: boolean`

## Develop

- `npm run setup` install project and test app deps
- `npm run dist` or `npm run dist:watch` - build
- `npm run apps:run` - start storybook for web and native
- `npm run apps:test` - run visual regression tests with [loki](https://github.com/oblador/loki)
