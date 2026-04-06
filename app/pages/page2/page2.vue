<template>
   <h1>page2</h1>
   <el-input v-model="content"></el-input>
   <span>{{ content }}</span>
</template>
<script setup>
   import {ref} from 'vue'
   import util from '$common/utils';

   const content = ref('page2')
   console.log('page2....',  content.value)
   util()
</script>
<style lang="less" scoped>
h1 {
   color: blue;
}
</style>
