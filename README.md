# React Layout Views

Easy layouts for React & React Native

[See live examples](https://codesandbox.io/s/0yy71348nn)

## Why

Creating UI layouts should be simple and declarative.

The aim of this library is to provide an intuitive API for composing layouts by abstracting away certain flex concepts like axis alignment and replacing these with more intuitive terms like `horizontal`, `bottom`, `right`, and `center`.

Another goal of this library is to provide consistent spacing between layout elements.

## Examples

[See live examples](https://codesandbox.io/s/0yy71348nn)

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

A `Layout` wraps one or many `Section` components. By default child Sections are arranged vertically. Adding the `horizontal` prop arranges children across the X axis.

Spacing between child Sections is set via the `spacing` prop as a CSS length for web or number for React Native. 

The `grow` prop is used to define how a Section fills available space inside a `Layout`. Alignment props (e.g. `top`, `right`, etc.) may be combined to position content.

#### Props

<details>
<summary>
  <code>basis?: string | number</code>
</summary>

  - ideal width (flex-basis) of child Sections

  > By default, Layout will wrap Sections according to this value. On web, this can be any CSS length. Native accepts a number or percentage string.
</details>
<details>
<summary>
  <code>bottom?: boolean</code>
</summary>

  - align child Sections to bottom of available Layout area 
  - combine with `center`, `centerHorizontal`, `left`, `right`
</details>
<details>
<summary>
  <code>center?: boolean</code>
</summary>

  - align child Sections to center X and Y of available Layout area
  - combine with `top`, `right`, `bottom`, `left`
</details>
<details>
<summary>
  <code>centerHorizontal?: boolean</code>
</summary>

  - align child Sections on the X axis
  - combine with `top`, `bottom`
</details>
<details>
<summary>
  <code>centerVertical?: boolean</code>
</summary>

  - align child Sections on the Y axis
  - combine with `left`, `right`
</details>
<details>
<summary>
  <code>grow?: boolean | number</code>
</summary>

  fill available space of parent Section or other flex element
</details>
<details>
<summary>
  <code>horizontal?: boolean</code>
</summary>

  align child Sections horizontally
</details>
<details>
<summary>
  <code>left?: boolean</code>
</summary>

  - align child Sections to the left
  - combine with `top`, `bottom`, `center`, `centerVertical`
</details>
<details>
<summary>
  <code>noWrap?: boolean</code>
</summary>

  prevent default wrapping of `horizontal` Layout
</details>
<details>
<summary>
  <code>reverse?: boolean</code>
</summary>

  reverse order of child Sections
</details>
<details>
<summary>
  <code>right?: boolean</code>
</summary>

  - align child Sections to the right
  - combine with `top`, `bottom`, `center`, `centerVertical`
</details>
<details>
<summary>
  <code>spacing?: string</code>
</summary>

  - align child Sections to the right
  - combine with `top`, `bottom`, `center`, `centerVertical`
</details>
<details>
<summary>
  <code>top?: boolean</code>
</summary>

  - align child Sections to the top
  - combine with `left`, `right`, `center`, `centerHorizontal`
</details>

<details>
<summary>
  <code>wrapEven?: boolean</code>
</summary>

  - `horizontal` Layout's wrapped orphan Sections maintain their basis-defined widths and remain aligned with preceding row columns
  - useful for "card" layouts. 
</details>

### `<Section />`

The `Section` component subdivides a `Layout` and contains other components or another `Layout`. The `grow` prop is used to define how a Section fills available space inside a `Layout`. Alignment props (e.g. `top`, `right`, etc.) may be combined to position content.

#### Props

<details>
<summary>
  <code>basis?: string | number</code>
</summary>

  ideal width (flex-basis)
</details>
<details>
<summary>
  <code>bottom?: boolean</code>
</summary>

  - align content to bottom of available Section area 
  - combine with `center`, `centerHorizontal`, `left`, `right`
</details>
<details>
<summary>
  <code>center?: boolean</code>
</summary>

  - align content to center X and Y axis of available Section area
  - combine with `top`, `right`, `bottom`, `left`
</details>
<details>
<summary>
  <code>centerHorizontal?: boolean</code>
</summary>

  - align content on the X axis of available Section area
  - combine with `top`, `bottom`
</details>
<details>
<summary>
  <code>centerVertical?: boolean</code>
</summary>

  - align content on the Y axis of available Section area
  - combine with `left`, `right`
</details>
<details>
<summary>
  <code>grow?: boolean | number</code>
</summary>

  - fill available space in parent Layout
  - boolean sets value to 1
  - may be specified as a number (e.g. 0.5, 2, 50)
</details>
<details>
<summary>
  <code>left?: boolean</code>
</summary>

  - align content to the left of available Section area
  - combine with `top`, `bottom`, `center`, `centerVertical`
</details>
<details>
<summary>
  <code>right?: boolean</code>
</summary>

  - align content to the right of available Section area
  - combine with `top`, `bottom`, `center`, `centerVertical`
</details>
<details>
<summary>
  <code>top?: boolean</code>
</summary>

  - align content to the top of available Section area
  - combine with `left`, `right`, `center`, `centerHorizontal`
</details>

## Develop

- `npm run setup` install project and test app deps
- `npm run dist` or `npm run dist:watch` - build
- `npm run apps:run` - start storybook for web and native
- `npm run apps:test` - run visual regression tests with [loki](https://github.com/oblador/loki)
