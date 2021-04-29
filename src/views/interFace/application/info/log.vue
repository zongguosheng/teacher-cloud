<template>
  <div>日志 {{ $route.params.name }}</div>
</template>
<script>

export default {
  name: 'Log',
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
    init() {
      console.log('日志')
    }
  }
}
</script>
