module.exports = {
   name: 'pdd',
   desc: 'pdd电商系统',
   homePage: '',
   menu: [{
      key: 'product',
      name: '商品管理-pdd',
   },{
      key: 'order',
      name: '订单管理-pdd',
   },{
      key: 'data',
      name: '数据分析',
      menuType: 'module',
      mouleType: 'sider',
      siderConfig: {
         menu: [{
            key: 'analysis',
            name: '电商罗盘',
            menuType: 'module',
            moduleType: 'custom',
            customConfig: {
               path: '/todo'
            }
         }]
      }
   }]
}