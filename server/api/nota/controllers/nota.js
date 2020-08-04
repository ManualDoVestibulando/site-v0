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
    
    delete ctx.query.total_;

    if (ctx.query._q) {
      entities = await strapi.services.curso.search(ctx.query);
    } else {
      entities = await strapi.services.curso.find(ctx.query);
    }

    return entities.map((entity) => {
      entity.total_ = (entity.fase1*100/90 + entity.fase1dia1 + entity.fase1dia2)*10/3
      return sanitizeEntity(entity, { model: strapi.models.curso });
    });
  },
};
