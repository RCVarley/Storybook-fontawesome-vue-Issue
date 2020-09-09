# address-manager

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles are runs storybook with hot reloading
```
npm run storybook:serve
```

## Issue
As outlined in these issues (https://github.com/storybookjs/storybook/issues/12432 and https://github.com/FortAwesome/vue-fontawesome/issues/254), when running the vue application with `npm run serve` the fontawesome icon displays fine. 

The problem is that Storybook doesn't recognise of the `font-awesome-icon` component that I registered in `src/main.js`.

Any input regarding a solution would be greatly appreciated.
