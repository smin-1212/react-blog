const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

rounter.get('/', (ctx) => {
    ctx.body = 'home';
})
router.get('/about', (ctx)=>{
    ctx.body = 'Introduce';
})

app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
    console.log('listening to port 4000');
});