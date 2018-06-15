var koa = require('koa');
var Router = require('koa-router');

var app = new koa();
var router = new Router(); 

router.get('/', (ctx, next) => {
	console.log("1- Metodo GET");
	ctx.body = "¡Hola mundo!";
}); 

router.post('/', (ctx, next) => {
	console.log("2- Metodo POST");
	ctx.body = "¡Adios mundo!";
}); 

//console.log("4");
app.use(router.routes());
app.listen(3000);
//console.log("5");