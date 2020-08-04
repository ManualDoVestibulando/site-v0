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
    
    if (ctx.query.slug_) ctx.query.nome = decodeURI(ctx.query.slug_);
    delete ctx.query.slug_;

    if (ctx.query._q) {
      entities = await strapi.services.instituto.search(ctx.query);
    } else {
      entities = await strapi.services.instituto.find(ctx.query);
    }

    return entities.map((entity) => {
      entity.slug_ = encodeURI(entity.nome)
      return sanitizeEntity(entity, { model: strapi.models.instituto });
    });
  },
};
