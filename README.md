# Kollegorna's SASS utilities library

- [Usage](#usage)
- [Development](#development)
- [Documentation](#documentation)
  * [Media Queries](#media-queries)
  * [Units](#units)
  * [String](#string)
  * [Text](#text)
  * [Animations](#animations)
  * [Misc](#misc)

## Usage

1. Install with `$ yarn add kollegorna/sass-utils#commit`. Using commit ID is highly recommended. Pick the [latest commit](https://github.com/kollegorna/sass-utils/commits/master) for a new project
2. Add it to your project:

   ```scss
   @import "sass-utils/src/all";
   ```

    This will:
    - Make all of the SASS utilities available
    - Inject Reset CSS

3. Read the [documentation](#documentation)

For non-SASS projects include `dist/reset.css` only.

## Development

1. Install dependencies with `$ yarn`
2. Run `$ yarn dev` when developing. This will:
    - Run the linter for your own good
    - Generate `reset.css` file for non-SASS projects

3. Edit contents of `src`

## Documentation

### [Media Queries](https://github.com/kollegorna/sass-utils/blob/master/src/_mq.scss)

#### `$mq-breakpoints` variable

A map of viewport breakpoints for a use with `mq()` mixin. Default value:

```scss
$mq-breakpoints: (
  xxxsmall:  0,
  xxsmall:   320,
  xsmall:    480,
  small:     640,
  medium:    768,
  large:     960,
  xlarge:    1024,
  xxlarge:   1200,
  xxxlarge:  1400,
  xxxxlarge: 1680
);
```

#### `mq()` mixin

A media query mixin. Works in a couple with `$mq-breakpoints` map. Accepts multiple values, e.g.:

```scss
@include mq(medium down) {
  // <= 768px
  // screen and (max-width: 48em)
}

@include mq(large up) {
  // > 960px
  // screen and (min-width: 60.0625em)
}

@include mq(between small large) {
  // 640px < x <= 960px
  // screen and (min-width: 40.0625em) and (max-width: 60em)
}

@include mq(portrait) {
  // screen and (orientation: portrait)
}

@include mq(portrait, between small medium, xxxxlarge up, xsmall down) {
  // orientation: portrait, 640px < x <= 768px, > 1680px, <= 480px
  // screen and (orientation: portrait), screen and (min-width: 40.0625em) and (max-width: 48em),  screen and (min-width: 105.0625em), screen and (max-width: 20em)
}

// Nest the mixin inclusion for "AND" operator instead:
@include mq(portrait) {
  @include mq(xxsmall down) {
    // orientation: portrait AND <= 480px
    // screen and (orientation: portrait) and (max-width: 20em)
  }
}
```

Using numeric values instead of keywords is also acceptable, e.g.:

```scss
@include mq(960 down) {
  // <= 960px
  // screen and (max-width: 60em)
}

@include mq(between 480 768) {
  // 480px < x <= 768px
  // screen and (min-width: 30.0625em) and (max-width: 48em)
}
```

#### `mq-retina()` mixin

A media query for targeting high-res screens.

```scss
  @include mq-retina {
    // retina
  }

  @include mq-retina {
    @include mq(960 down) {
      // <= 960px retina
      // screen and (-webkit-min-device-pixel-ratio: 2) and (max-width: 60em), screen and (min--moz-device-pixel-ratio: 2) and (max-width: 60em), screen and (-o-min-device-pixel-ratio: 2 / 1) and (max-width: 60em), screen and (min-device-pixel-ratio: 2) and (max-width: 60em), screen and (min-resolution: 192dpi) and (max-width: 60em), screen and (min-resolution: 2dppx) and (max-width: 60em)
    }
  }
```

### [Units](https://github.com/kollegorna/sass-utils/blob/master/src/_units.scss)

#### `em()` and `rem()` functions

Converts pixels to em/rem's respectively, e.g.:

```scss
em(20); // 1.25em
em(20px); // 1.25em
rem(16); // 1rem
rem(20 40); // 1.25rem 2.5rem
rem(20 40 0); // 1.25rem 2.5rem 0 2.5rem
rem(40 auto); // 2.5rem auto
rem(40 auto 70%); // 2.5rem auto 70%
```

Overwrite the value of `$em-base` to change the base value. Default: `16px`. You can also pass it as a second parameter for `em/rem()`.

#### `strip-unit()` function

Returns digits-only value: `strip-unit(16px) -> 16`.

### [String](https://github.com/kollegorna/sass-utils/blob/master/src/_string.scss)

#### `svg-inline()` function

Makes SVG inline-able, e.g.:

```scss
background-image: url(svg-inline('<svg viewBox="0 0 10 10"><style>path{fill:#c00;}</style><path d="m5 9-3-4h2v-4h2v4h2z"/></svg>'));

// becomes

background-image: url("data:image/svg+xml;utf8,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%220%200%2010%2010%22%3E%3Cstyle%3Epath{fill:#c00;}%3C/style%3E%3Cpath%20d=%22m5%209-3-4h2v-4h2v4h2z%22/%3E%3C/svg%3E");
```

#### `str-replace()` function

Replaces strings: `str-replace("abc", "a", "b") -> "bbc"`.

### [Text](https://github.com/kollegorna/sass-utils/blob/master/src/_text.scss)

#### `truncate-text($method: ellipsis)` mixin

Determines how overflowed content that is not displayed is [signaled to users](https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow).

#### `truncate-text-line($num: 3, $fallback-lh: null)` mixin

Limiting of the contents of a block container to the specified number of lines. Based on [`line-clamp`](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp).
Use `$fallback-lh` to support IE by setting the line height size.

```scss
@include truncate-text-line(2);
@include truncate-text-line(2, rem(24));
```

#### `hide-text()` mixin

Visually hides the text without a [performance hit](http://www.zeldman.com/2012/03/01/replacing-the-9999px-hack-new-image-replacement/). Keeps the text accessible for screen readers.

### [Animations](https://github.com/kollegorna/sass-utils/blob/master/src/_animations.scss)

#### Easings

The variable list of CSS animation [easings](http://easings.net):

```scss
// Sine:
$easing-in-sine
$easing-out-sine
$easing-in-out-sine
// Quad:
$easing-in-quad
$easing-out-quad
$easing-in-out-quad
// Cubic:
$easing-in-cubic
$easing-out-cubic
$easing-in-out-cubic
// Quart:
$easing-in-quart
$easing-out-quart
$easing-in-out-quart
// Quint:
$easing-in-quint
$easing-out-quint
$easing-in-out-quint
// Expo:
$easing-in-expo
$easing-out-expo
$easing-in-out-expo
// Circ:
$easing-in-circ
$easing-out-circ
$easing-in-out-circ
// Back:
$easing-in-back
$easing-out-back
$easing-in-out-back
```

### [Misc](https://github.com/kollegorna/sass-utils/blob/master/src/_misc.scss)

#### `clearfix()` and `unclearfix()` mixins

Clears and "unclears" floats respectively.

#### `hide-visually()` mixin

Visually hides an element, keeps it accessible for screen readers, does not exclude it from HTML tab order.
