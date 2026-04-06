<template>
   <h1>Page1</h1>
   <el-input v-model="content"></el-input>
   <span>{{ content }}</span>
   <el-button type="primary" @click="tableList">查询</el-button>
   <el-table :data="data">
     <el-table-column label="id" prop="id"></el-table-column>
     <el-table-column label="name" prop="name"></el-table-column>
   </el-table>
</template>
<script setup>
   import { ref, onMounted } from 'vue'
   import curl from '$common/curl'

   const content = ref('')
   const data = ref([])

   onMounted(async() => {
      tableList()
   })

   const tableList = async() => {
      const res =  await curl({
         url: '/api/post/project/list',
         method: 'post',
         headers: {},
         query: {},
         data: {
            page: 1,
            pagenum: 2
         },
         responseType: 'json',
         timeout: 60000,
         errorMessages: '网络异常'
      })
      data.value = res.data
   }

</script>
<style lang="less" scoped>
h1 {
   color: red;
}
</style>
