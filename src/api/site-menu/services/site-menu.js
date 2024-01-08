'use strict';

/**
 * site-menu service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::site-menu.site-menu');
