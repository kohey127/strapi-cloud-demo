'use strict';

/**
 * `test-policy` policy
 */

module.exports = (policyContext, config, { strapi }) => {
    // Add your own logic here.
    strapi.log.info('In test-policy policy.');

    const canDoSomething = true;

    if (canDoSomething) {
      return true;
    }

    return false;
};
