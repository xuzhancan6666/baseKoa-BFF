module.exports = {
   name: '课程管理-bilibili',
   desc: '课程管理-bilibili',
   homePage: '',
   menu: [{
         key: 'video',
         name: '视频课程-bilibili',
      }, {
         key: 'class-resource',
         name: '课程资料',
         muneType: 'module',
         moduleType: 'sider',
         siderConfig: {
            menu: [{
               key: 'pdf',
               name: 'PDF',
               muneType: 'module',
               moduleType: 'custom',
               customConfig: {
                  path: '/todo'
               }
            }, {
               key: 'ppt',
               name: 'PPT',
               muneType: 'module',
               moduleType: 'custom',
               customConfig: {
                  path: '/todo'
               }
            }, {
               key: 'excel',
               name: 'EXCEL',
               muneType: 'module',
               moduleType: 'custom',
               customConfig: {
                  path: '/todo'
               }
            }]
         }
   }]
}