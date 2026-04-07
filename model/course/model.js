module.exports = {
   model: 'dashboard',
   name: '课程管理',
   menu: [{
      key: 'video',
      name: '视频管理',
      muneType: 'module',
      moduleType: 'custom',
      customConfig: {
         path: '/todo'
      }
   },{
      key: 'user',
      name: '用户管理',
      muneType: 'module',
      moduleType: 'custom',
      customConfig: {
         path: '/todo'
      }
   }]
}