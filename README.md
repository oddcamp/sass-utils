# Kollegorna's SASS utilities

A starter package for every SASS project.

## Usage

1. Install with `$ yarn add kollegorna/sass-utils#commit`. Using commit ID is highly recommended. Pick the latest commit for a new project
2. Include `src/_all.scss` in your project. This will:
    - Make all of the SASS utilities available
    - Inject Reset CSS

For non-SASS projects include `dist/reset.css` only.

## Development

1. Install dependencies with `$ yarn`
2. Run `$ gulp` when developing. This will:
    - Run the linter for your own good
    - Generate `reset.css` file for non-SASS projects

3. Edit contents of `src`

## Else...

For now, browse `src/*` to get to know the utilities. Documentation is on the way...
