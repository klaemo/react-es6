# React + Browserify + Babel = Future

I wanted to get familiar with React while also continuing to use browserify. Also, ES6 seems cool. So, I took the [official React tutorial](https://facebook.github.io/react/docs/tutorial.html) and wrote it as CommonJS modules and added some ES6 sugar where appropriate.

## Usage

Clone this repository and run:
```
npm install
npm start
```

This will install all the necessary dependencies, start the server and watch your code for changes
so it'll get transpiled ([Babel](http://babeljs.io)) and bundled ([browserify](http://browserify.org)) on the fly.

`npm run build` will build a minified "production" version.

## Libraries

Here and there I opted to use different libraries than in the original tutorial. Notably

- `marked` instead of `showdown` because the latter isn't compatible with browserify.
- `whatwg-fetch` (the [proposed](https://fetch.spec.whatwg.org/) replacement for XHR) instead of jquery.

## Babel

As of Babel 6.0 we need to explicitly install all the presets we want to use. For this tutorial that's
going to be `babel-preset-react` for the React related transforms and `babel-preset-es2015` for the ES6/ES2015
syntax.

The presets are enabled in `.babelrc`.

## Result

I particularly like how `fetch` and ES6 arrow functions transformed this:

```javascript
$.ajax({
  url: this.props.url,
  dataType: 'json',
  success: function(data) {
    this.setState({data: data});
  }.bind(this),
  error: function(xhr, status, err) {
    console.error(this.props.url, status, err.toString());
  }.bind(this)
});
```

...into this:
```javascript
fetch(this.props.url)
  .then(response => response.json())
  .then(data => this.setState({ data: data }))
  .catch(err => console.error(this.props.url, err.toString()))
```

After the update to `react 0.14` I decided to use the `class` syntax as well as stateless components
and switch to ES6 style exports/imports.

## Contributing

Just open an issue or pull request or whateveer :)
