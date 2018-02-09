import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { visit } from '@ember/test-helpers';

module('Acceptance | index', function(hooks) {
  setupApplicationTest(hooks);

  test('it sets up global _paq array with piwik information', function(assert) {
    visit('/').then(() => {
      assert.deepEqual(window._paq, [
        ["setSiteId", 1],
        ["setTrackerUrl","test/piwik.php"],
        ["enableLinkTracking"]
      ]);
    });
  });

  test('it includes the tracking script', function(assert) {
    visit('/').then(() => {
      const trackingScript = document.querySelector('script[src="test/piwik.js"]');
      assert.ok(trackingScript);
      assert.equal(trackingScript.getAttribute('defer'), '');
      assert.equal(trackingScript.getAttribute('async'), '');
    });
  });
});
