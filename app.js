const Koa = require('koa');

const bodyParser = require('koa-bodyparser');
const router = require('./routes');

const app = new Koa()

app.use(errorHandler);
app.use(bodyParser());
app.use(router.routes());

try {
    app.listen(3003);
    console.log(`Servidor corriendo en http://localhost:3003`);
} catch (error) {
    console.log(error);
}


// Error Handler sacado del ejemplo oficial de Objection sobre Koa: 
// https://github.com/Vincit/objection.js/blob/master/examples/koa/app.js
//
// Error handling.
//
// NOTE: This is not a good error handler, this is a simple one. See the error handing
//       recipe for a better handler: http://vincit.github.io/objection.js/recipes/error-handling.html
async function errorHandler(ctx, next) {
    try {
      await next()
    } catch (err) {
      if (err instanceof ValidationError) {
        ctx.status = 400
        ctx.body = {
          error: 'ValidationError',
          errors: err.data,
        }
      } else if (err instanceof ForeignKeyViolationError) {
        ctx.status = 409
        ctx.body = {
          error: 'ForeignKeyViolationError',
        }
      } else {
        ctx.status = 500
        ctx.body = {
          error: 'InternalServerError',
          message: err.message || {},
        }
      }
    }
  }