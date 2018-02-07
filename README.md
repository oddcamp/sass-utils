# Kollegorna's SASS utilities

A starter package for every SASS project.

## Usage

1. Install with `npm install --save kollegorna/sass-utils#commit`. Using commit ID is highly recommended. Pick the latest commit for a new project.
2. Include `src/_all.scss` in your project. This will:
    - Make all of the SASS utilities available
    - Inject Reset CSS

For non-SASS projects include `dist/reset.css` only.

## Development

1. Run `gulp` when developing. This will:
    - Run the linter for your own good
    - Generate `reset.css` file for non-SASS projects

2. Edit contents of `src`

## Else...

For now, browse `src/*` to get to know the utilities. Documentation are on the way...
