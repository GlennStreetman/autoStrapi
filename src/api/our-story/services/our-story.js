'use strict';

/**
 * our-story service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::our-story.our-story');
