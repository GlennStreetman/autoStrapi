'use strict';

/**
 * holliday service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::holliday.holliday');
