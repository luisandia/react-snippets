'use strict';
const stripe = require('stripe')('sk_test_ImYaOvfhGIkFcTo9eBxQvv2i')
/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  create: async ctx => {
    const { name, total, items, stripeTokenId } = ctx.request.body;
    const { id } = ctx.state.user;
    const charge = await stripe.charges.create({
      amount: Math.round(total * 100),
      currency: "usd",
      source: stripeTokenId,
      description: `Order ${new Date()} By ${ctx.state.user.username}`
    });
    const order = await strapi.services.orders.create({
      name, total, items, user: id
    });
    return order;
  }
};
