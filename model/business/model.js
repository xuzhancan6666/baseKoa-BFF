module.exports = {
   model: 'dashboard',
   name: '电商',
   menu: [{
      key: 'product',
      name: '商品管理',
      muneType: 'module',
      customConfig: {
         path: '/todo'
      }
   },{
      key: 'order',
      name: '订单管理',
      muneType: 'module',
      customConfig: {
         path: '/todo'
      }
   },{
      key: 'client',
      name: '客户管理',
      muneType: 'module',
      customConfig: {
         path: '/todo'
      }
   }]
}