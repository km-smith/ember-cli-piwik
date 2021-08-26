# ember-cli-piwik
[![Build Status](https://travis-ci.org/km-smith/ember-cli-piwik.svg?branch=master)](https://travis-ci.org/km-smith/ember-cli-piwik)

This addon will setup and inject the Piwik tracking script into your app at build time. At runtime you will be
able to use `window._paq` as described in the [piwik developer guide](https://developer.matomo.org/guides/tracking-javascript-guide).

## Project Status - 🛑 DEPRECATED 🛑
Please use [ember-metrics](https://github.com/adopted-ember-addons/ember-metrics) for your piwik (and other tracking script) setup needs.


## Usage
### Installation
`ember install @kysmith/ember-cli-piwik`

### Configuration
This addon requires you to set options in your apps environment config file `config/environment.js`.

```javascript
piwik: {
  sid: 123,
  url: 'https://your-piwik.endpoint.com'
}
```

## Contributing
### Installation

* `git clone <repository-url>` this repository
* `cd ember-cli-piwik`
* `npm install`

### Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

## Acknowledgements
This addon is heavily based on [unwiredbrain/ember-cli-piwik](https://github.com/unwiredbrain/ember-cli-piwik)
