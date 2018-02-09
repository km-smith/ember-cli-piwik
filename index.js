'use strict';

module.exports = {
  name: '@kysmith/ember-cli-piwik',

  /**
   * Validate the config values and throw an error if required fields are not present
   * @param {String} env The current environment
   * @param {Object} config The config for the consuming app
   */
  config(env, config) {
    if (!(config.piwik && config.piwik.url && config.piwik.sid)) {
      throw new Error('ember-cli-piwik requires config values for sid(config.piwik.sid) and url(config.piwik.url) to be present in config/environment');
    }
    return {};
  },

  /**
   * Injects the templates into the HTML page at build time.
   *
   * Uses the `-footer` variation of the `head` and `body` tags to make sure the
   * `<script>` tag are the last injection.
   *
   * @param {String} type The tag type.
   * @param {Object} config The application config.
   * @return {String} Returns the content to be injected.
   */
  contentFor(type, config) {
    if (type === 'head-footer') {
      return `<script>var _paq=[["setSiteId",${config.piwik.sid}],["setTrackerUrl","${config.piwik.url}/piwik.php"],["enableLinkTracking"]];</script>`;
    }

    if (type === 'body-footer') {
      return `<script src="${config.piwik.url}/piwik.js" async defer></script>`;
    }

    // Keep it consistent: don't add anything at all.
    return '';
  }
};
