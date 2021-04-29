<template>
  <div>
    详情{{ id }}
    <el-button type="text" @click="goInfo({id})">班级</el-button>
  </div>
</template>

<script>
export default {
  name: 'Infoone',
  data() {
    return {
      id: this.$route.query.id
    }
  },
  mounted() {
    console.log('66')
    this.init()
  },
  methods: {
    goInfo(id) {
      console.log('29', id)
      this.$router.push({
        path: 'classes',
        query: {
          id: id
        }
      })
    },
    init() {
      console.log(this.id)
    }
  }
}
</script>
