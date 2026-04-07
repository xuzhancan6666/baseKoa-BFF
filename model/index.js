const glob = require('glob')
const path = require('path')
const { sep } = path;

/*
目标： 解析文件路径/model。返回数据结构如下
[{
   model: ${model},
   project:  {
      pdd: {pdd}
      taobao: {taobao}
   }
}]
*/

module.exports = (app) => {
   // 假设 app.baseDir 是应用根目录，sep 是路径分隔符（如 '/' 或 '\'）
   // 注意：原代码中的 `$(sep)` 是错误的模板字符串语法，应为 `${sep}`
   const modelPath = path.resolve(app.basicDir, `.${sep}model`);
   const fileList = glob.sync(path.resolve(modelPath, `.${sep}**${sep}*.js`)); // 正确 glob 模式
   const modelList = [];

   fileList.forEach(file => {
      // 跳过 index.js 文件
      if (path.basename(file) === 'index.js') return;

      // 判断类型：路径中是否包含 ${sep}project${sep}
      const type = file.includes(`${sep}project${sep}`) ? 'project' : 'model';

      // 提取 modelKey（假设结构：.../model/<modelKey>/... 或 .../model/<modelKey>/project/...）
      const relativePath = path.relative(modelPath, file);
      const parts = relativePath.split(sep);
      const modelKey = parts[0]; // 第一级目录名

      let modelItem = modelList.find(item => item.model?.key === modelKey);
      if (!modelItem) {
         modelItem = {};
         modelList.push(modelItem);
      }

      if (type === 'model') {
         // 挂载 model 定义
         modelItem.model = require(file);
         modelItem.model.key = modelKey;
      } else if (type === 'project') {
         // 提取 projKey（project 子目录下的文件名，不含扩展名）
         const projKey = path.basename(file, '.js');
         if (!modelItem.project) modelItem.project = {};
         modelItem.project[projKey] = require(file);
         modelItem.project[projKey].key = projKey;
      }
   });

   return modelList;
}