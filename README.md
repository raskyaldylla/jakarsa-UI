# Svelte App includes with TypeScript, Postcss and Tailwindcss Baked In

This is a fork project from default template from [Svelte](https://svelte.dev). If you want to using the basic, please redirect to [this](https://github.com/sveltejs/template)

Basically, because there is not much change, the installation process exactly the same like the default template using [degit](https://github.com/Rich-Harris/degit)

*Note that you will need to have [Node.js](https://nodejs.org) installed.*

```bash
npx degit raskyaldylla/spt-boilerplate .
npm install
```

Then start the development using [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.


## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).

## More Information

For more information please look for it's each documentation page.