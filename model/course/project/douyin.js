module.exports = {
   name: '课程管理-dy',
   desc: '课程管理-dy',
   homePage: '',
   menu: [{
      key: 'traffic',
      name: '流量管理',
      menuType: 'module',
      moduleType: 'sider',
      siderConfig: {
         key: 'user-traffic',
         name: '用户流量',
         menuType: 'module',
         moduleType: 'custom',
         customConfig: {
            path: '/todo'
         }
      }
   }]
}