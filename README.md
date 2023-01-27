# react-brick-view

[![NPM version][npm-image]][npm-url]
[![Build][github-build]][github-build-url]
![npm-typescript]
[![License][github-license]][github-license-url]

`react-brick-view` is a lightweight, performant, and responsive masonry layout component that arranges elements in a grid-like structure, with elements of varying heights. The elements are placed in such a way that there are minimal gaps between them, creating a cohesive and visually appealing layout.

See [Live Demo](https://joshnwosu.github.io/react-brick-layout/)

## Installation:

```bash
npm install react-brick-view
```

or

```bash
yarn add react-brick-view
```

## Usage :

To use the `react-brick-view` library, you would first need to install it in your project by running `npm install react-brick-view` or `yarn add react-brick-view`. Once the library is installed, you can import the `BrickView` component and use it in your application.

Here's an example of how you can use the `BrickView` component to create a simple Masonry layout in a React application:

```js
import React from 'react'
import { BrickView } from 'react-brick-view'

const Masonry = () => {
  return (
    <BrickView gutter={10} column={5}>
      <div>Element 1</div>
      <div>Element 2</div>
      <div>Element 3</div>
      <div>Element 4</div>
      <div>Element 5</div>
    </BrickView>
  )
}

export default Masonry
```

## Props

The `BrickView` component accepts the following props:

| name            | type    | required | default                                     | description                                                                                     |
| --------------- | ------- | -------- | ------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| style           | object  | No       | `{}`                                        | CSS style for the `BrickView` component                                                         |
| children        | null    | No       | `null`                                      | ❌❗ Do not pass children as props. Instead, nest children between the opening and closing tags |
| column          | number  | No       | `3`                                         | Column count                                                                                    |
| gutter          | number  | No       | `10`                                        | The size(px) of the gap between elements                                                        |
| animateOnResize | boolean | No       | `true`                                      | Animate layout on screen resize                                                                 |
| className       | string  | No       | `react-brick-view`                          | Custom class name of layout container                                                           |
| rtl             | boolean | No       | `false`                                     | Change layout `right to left`                                                                   |
| breakPoint      | object  | No       | `{350: 1, 450: 2, 645: 3, 900: 4, 1200: 5}` | Used for responsive layout. The point at which the screen size(px) changes                      |

[npm-url]: https://www.npmjs.com/package/my-react-typescript-package
[npm-image]: https://img.shields.io/npm/v/my-react-typescript-package
[github-license]: https://img.shields.io/github/license/gapon2401/my-react-typescript-package
[github-license-url]: https://github.com/gapon2401/my-react-typescript-package/blob/master/LICENSE
[github-build]: https://github.com/gapon2401/my-react-typescript-package/actions/workflows/publish.yml/badge.svg
[github-build-url]: https://github.com/gapon2401/my-react-typescript-package/actions/workflows/publish.yml
[npm-typescript]: https://img.shields.io/npm/types/my-react-typescript-package

## Conclusion

This package provides a simple, lightweight solution for creating responsive brick-style layouts in React. It allows for customization of the layout to suit your specific needs and requirements. If you find it useful, please consider giving it a positive rating or review. Thank you!
