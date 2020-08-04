'use strict';
const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  /**
   * Retrieve records.
   *
   * @return {Array}
   */

  async find(ctx) {
    let entities;
    if (ctx.query._q) {
      entities = await strapi.services.instituto.search(ctx.query);
    } else {
      entities = await strapi.services.instituto.find(ctx.query);
    }
    return entities.map((entity) => {
      if (!entity.slug_) {
        entity.slug_ = entity.sigla
      }
      return sanitizeEntity(entity, { model: strapi.models.instituto });
    });
  },
};
