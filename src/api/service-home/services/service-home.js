'use strict';

/**
 * service-home service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::service-home.service-home');
