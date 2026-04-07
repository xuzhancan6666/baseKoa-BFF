{
   mode: 'dashboard', // 模版类型。不同类型对应不一样的模版数据结构
   name: '',//名称
   des: '', // 描述
   icon: '', //
   homePage: '',
   // 头部菜单
   menu: [{
      key: '', //菜单唯一描述
      name: '', // 菜单名称
      menuType: '', // 枚举值： group / module
      // menueType == gruop 可用subMenu
      subMenu: [{
         // 可递归 Item
      }],
      // 当我们 moduleType == module 时。 可填
      moduleType: '', // 枚举值： iframe/custom/schema/sider
      // 当 moduleType === iframe
      ifameConfig: {
         path: '',// iframe路径
      },
      // 当 moduleType === custom
      customConfig: {
         path: '', // 自定义路由
      },
      // 当 moduleType === schema
      schemaConfig: {
         api: '/api/user', // 数据API
         schema: {
            // 板块数据结构
            type: object,
            propperties: {
               key: {
                  ...schema, // 标准schema 配置、
                  type: '', // 字段类型
                  label: '', // 字段的中文名
               }
            }
         },
         tableConfig: {}, // table config
         searchConfig: {}, //search-bar config
         components: {}, //模块组件
      },
      // 当 moduleType === sider
      siderConfig: {
         menu: [{
            // 可递归 menuItem
         }]
      }
   }]
}