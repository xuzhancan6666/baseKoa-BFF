<template>
   <h1>Page1</h1>
   <el-input v-model="content"></el-input>
   <span>{{ content }}</span>
   <el-button type="primary" @click="tableList">查询</el-button>
   <el-button type="primary" @click="getDsl">获取DSL</el-button>
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
      getDsl()
   })

   const f = (w) => {
      // 给定一个只包括 '(', ')', '{', '}', '[', ']' 的字符串，判断字符串是否有效。
      // '([]){})())}' false
      // '(){}[]' true
      let map = {
         '(': ')',
         '{': '}',
         '[': ']'
      }
      let arry = []
      let j = 0
      let wa = Array.from(w)
      let res = false
      for(let i = 0; i < wa.length; i ++) {
         let current = wa[i]
         let arryStart = wa[j]
         if(!map[current]) {
            res = false
         }
         if(map[arryStart] === current) {
            j = i + 1
            res = true
         } else {
            false
         }
      }
      console.log('43s...', res)
      return res
   }

   const f2 = (nums, target) => {
      // 输入: nums = [4,5,6,7,0,1,2], target = 0
      // 输出: 4
      let left = 0;
      let right = nums.length - 1;

      while(left <= right) {
         let mid = (left + right) / 2;

         if(nums[left] <= nums[mid] && nums[left] <= target && nums[mid] >= target) {
            right = mid
            if(left === right) return mid
         } else {
            left = mid
            if(left === right) return mid
         }
      }
   }

   const tableList = async() => {
      const res =  await curl({
         url: '/api/post/project/list',
         method: 'post',
         headers: {},
         query: {},
         data: {
            page: 'ADD',
            pagenum: 2
         },
         responseType: 'json',
         timeout: 60000,
         errorMessages: '网络异常'
      })
      data.value = res.data
   }

   const getDsl = async() => {
      const res =  await curl({
         url: '/api/get/dslTemplate',
         method: 'get',
         headers: {},
         query: {
            dslType: 'pdd'
         },
         data: {},
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
