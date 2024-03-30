# ButtonBuzz a Pre-Styled, Customizable ReactJS Button Library

## Introduction

Welcome to ButtonBuzz Library! This library provides a collection of simple and customizable button components built with ReactJS and styled with Tailwind CSS. With this library, you can easily integrate stylish buttons into your React applications, saving you time and effort in development.

## Installation

You can install the ReactJS Simple Button Library via npm:

```bash
npm install buttonbuzz
```

or via yarn:

```bash
yarn add buttonbuzz
```

## Usage

To use the button components provided by this library:

1. Import the package path into the Tailwind CSS config file in a manner like:

```bash
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/buttonbuzz/dist/bundle.js",
  ],
```

2. Import the component into your into your React components:

```bash
import React from 'react';
import { ButtonBoring } from "buttonbuzz";

const MyComponent = () => {
  return (
    <div>
      <ButtonBoring
          = "22px"
          = "Subscribe"
          = "#ffa1a1"
          = "bold"
         = "#ff3"
         = "Extra TailwindCSS Classes or other go here"
         = "#14007e"
          = {() => console.log('Primary button clicked')} />
    </div>
  );
};

export default MyComponent;
```

## Available Components

![Screenshot 2024-03-29 210552](https://github.com/n2n0n00/buttonbuzz-library/assets/40828429/7d9e7f08-f915-4959-8fd0-11a1d80cba18)


## Customization

| Property                 | Description                                                   | Components                                                                                                                                   |
| ------------------------ | ------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `labelSize`              | Font size of the button's label                               | All except ButtonCircle                                                                                                                      |
| `label`                  | Button label (required)                                       | All except ButtonCircle                                                                                                                      |
| `onClick`                | onClick function                                              | All                                                                                                                                          |
| `labelColor`             | Font color of the label                                       | All except ButtonCircle                                                                                                                      |
| `labelWeight`            | Font label weight                                             | All except ButtonCircle                                                                                                                      |
| `onHover`                | Background color change on button mouse hover                 | All except ButtonTextOnly ButtonTextUnderline ButtonPinkPanther                                                                              |
| `superClasses`           | Additional TailwindCSS classes to add to the button component | All                                                                                                                                          |
| `borderColor`            | Button border color                                           | Button: Block, Boring, BoringInner, BoxMania, BoxManiaDash BrokenBlock, Circle, CircleMania, HalfHalf, HalfRounded, Holo, SeeThrough, Square |
| `backgroundColor`        | Button background color                                       | All except ButtonCircle                                                                                                                      |
| `onHoverLabel`           | Label color change when user hovers over the button           | All                                                                                                                                          |
| `icon`                   | String source for the icon in the button                      | Button: Banner, BlockIcon, BoringShadow, Circle, Delete, HalfHalf, HalfRounded, PinkPanther, TextOnly, TextUnderline                         |
| `iconWidth`              | Icon width                                                    | Button: Banner, BlockIcon, BoringShadow, Circle, Delete, HalfHalf, HalfRounded, PinkPanther, TextOnly, TextUnderline                         |
| `iconHeight`             | Icon height                                                   | Button: Banner, BlockIcon, BoringShadow, Circle, Delete, HalfHalf, HalfRounded, PinkPanther, TextOnly, TextUnderline                         |
| `circleRadius`           | Radius of circle for circular buttons                         | Only ButtonCircle                                                                                                                            |
| `leftShapeColor`         | Color of the left shape of the Geometry Button                | Only ButtonGeometry                                                                                                                           |
| `rightTopShapeColor`     | Color of the top right shape of the Geometry Button           | Only ButtonGeometry                                                                                                                           |
| `rightBottomShapeColor`  | Color of the bottom right shape of the Geometry Button        | Only ButtonGeometry                                                                                                                           |
| `iconBackground`         | Background color for icon                                     | Only ButtonHalfHalf and ButtonHalfRounded                                                                                                    |
| `onHoverIconBackground`  | Hover color for icon background                               | Only ButtonHalfHalf and ButtonHalfRounded                                                                                                    |
| `onHoverLabelBackground` | Hover for label background                                    | Only ButtonHalfHalf and ButtonHalfRounded                                                                                                    |
| `opacity`                | Opacity of button                                             | Only ButtonPinkPanther, ButtonTextOnly, ButtonTextUnderline                                                                                  |
| `onHoverOpacity`         | On-hover button opacity                                       | Only ButtonPinkPanther, ButtonTextOnly, ButtonTextUnderline                                                                                  |

## Contribution

Contributions to ButtonBuzz are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request on the GitHub repository.

## License

This library is licensed under the MIT License.

## Credits

ButtonBuzz is developed and maintained by [n2n0n00](https://github.com/n2n0n00)

[GitHub repository](https://github.com/n2n0n00/buttonbuzzv1)

