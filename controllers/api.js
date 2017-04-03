const data = require('../data');

module.exports = {
  'GET /user/active': async (ctx, next) => {
    ctx.response.body = JSON.stringify(data.activeUsers);
  }
};
