module.exports = {
   name: '淘宝',
   desc: '淘宝电商系统',
   homePage: '',
   menu: [{
      key: 'order',
      menuType: 'iframe',
      iframeConfig: {
         path: 'http://www.baidu.com'
      }
   }, {
      key: 'operation',
      name: '运营活动',
      menuType: 'module',
      moduleType: 'sider',
      customConfig: {
         path: '/todo'
      },
      siderConfig: {
         menu: [{
            key: 'coupon',
            name: '优惠券',
            menuType: 'module',
            moduleType: 'custom',
            customConfig: {
               path: '/todo'
            }
         }, {
            key: 'limit',
            name: '优惠券',
            menuType: 'module',
            moduleType: 'custom',
            customConfig: {
               path: '/todo'
            }
         }, {
            key: 'festival',
            name: '节日活动',
            menuType: 'module',
            moduleType: 'custom',
            customConfig: {
               path: '/todo'
            }
         }]
      }
   },]
}