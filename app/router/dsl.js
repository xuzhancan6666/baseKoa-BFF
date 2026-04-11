module.exports = (app, router) => {
   const {dsl: dslController} = app.controller

   router.get('/api/get/dslTemplate', dslController.getDsl.bind(dslController))
}