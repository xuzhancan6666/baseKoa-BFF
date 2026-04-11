
module.exports = (app, router) => {
   const { project: projectController } = app.controller
   router.post('/api/post/project/list', projectController.getListByPost.bind(projectController))
}