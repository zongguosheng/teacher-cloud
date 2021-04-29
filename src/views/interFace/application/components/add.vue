<template>
  <el-dialog
    :projectid="projectid"
    width="800px"
    class=""
    top="10vh"
    title="人员授权"
    :visible="visible"
    @close="closerol"
  >
    <el-form ref="form" :model="form" label-width="150px">
      <el-form-item>
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="reset()">重 置</el-button>
      <el-button type="primary" @click="submit()">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'Edit',
  props: {
    value: {
      type: [Array, String, Number],
      default: null
    },
    disableKeys: {
      type: Array,
      default() {
        return []
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    valueKey: {
      type: String,
      default: 'id'
    },
    list: {
      type: Array,
      default: null
    },
    info: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      form: {}
    }
  },
  methods: {
    submit() {},
    reset() {},
    closerol() {}
  },
}
</script>
