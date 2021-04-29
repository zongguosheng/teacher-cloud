<template>
  <div>班级 {{ $route.query.name }}</div>
</template>
<script>

export default {
  name: 'Classes',
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
    init() {
      console.log('日志')
    }
  }
}
</script>
