<template>
  <div>详情
    {{ $route.params.id }}
    {{ $route.params.name }}
    <el-button type="text" @click="goInfo({id})">log详情</el-button>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Info',
  data() {
    return {
      id: this.$route.params.id
    }
  },
  mounted() {
    console.log('66')
    this.init()
  },
  methods: {
    goInfo(id) {
      console.log('20', id)
      this.$router.push({
        name: 'log',
        params: {
          id: id,
          name: 'zhangsan'
        }
      })
    },
    init() {
      console.log('19')
    }
  }
}
</script>
