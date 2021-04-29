<template>
  <div>
    学校
    <el-button type="text" @click="goInfoone({id})">学校</el-button>
    <el-button type="text" @click="goInfo({id})">query详情1</el-button>
    <router-view />
  </div>

</template>

<script>
export default {
  name: '',
  data() {
    return {
      id: '789'
    }
  },
  methods: {
    goInfo(id) {
      console.log('20', id)
      this.$router.push({
        name: 'Info',
        params: {
          id: '78999',
          name: 'zhangsan'
        }
      })
    },
    goInfoone(id) {
      console.log('29', id)
      this.$router.push({
        path: 'infoone',
        query: {
          id: id
        }
      })
    }
  }
}
</script>
