<template>
  <div class="container">
    <div class="tooltips">
      <el-form inline>
        <el-form-item>
          <el-input v-model="filterForm.name" placeholder="活动室名称" />
        </el-form-item>
        <el-form-item style="margin-right: 30px">
          <el-button type="primary" icon="el-icon-search" @click="refresh()">查询</el-button>
          <el-button icon="el-icon-refresh" @click="reset()">重置</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-plus" @click="handleAdd()">
            新建
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    <Grid ref="table" :request="request" :filter-form.sync="filterForm">
      <vxe-table-column field="name" title="活动室名称"></vxe-table-column>
      <vxe-table-column field="text1" title="活动室开放时间"></vxe-table-column>
      <vxe-table-column field="relNmae" title="可预约人数"></vxe-table-column>
      <vxe-table-column field="remark" title="备注"></vxe-table-column>
      <vxe-table-column field="contain" title="负责人"></vxe-table-column>
      <vxe-table-column field="phone" title="联系电话"></vxe-table-column>
      <vxe-table-column title="操作" fixed="right">
        <template #default="{ row }">
          <el-button type="primary" @click="handleAEdit(row)">编辑</el-button>
          <el-button type="danger" @click="handleRemove(row.id)">删除</el-button>
        </template>
      </vxe-table-column>
    </Grid>
  </div>
</template>

<script>
import getList from '@/lib/data'
export default {
  name: 'FormVxtable',
  data() {
    return {
      form: {},
      filterForm: {},
      request: getList
    }
  },
  watch: {},
  created() {},
  mounted() {
    this.init()
  },
  methods: {
    init() {
      console.log('初始化')
    },
    handleAAdd() {
      console.log('新增')
    },
    handleAEdit() {
      console.log('编辑')
    },
    handleRemove() {
      console.log('删除')
    },
    // 重置
    reset() {
      this.$refs.table.reset()
    },
    // 刷新表
    refresh() {
      this.$refs.table.refresh()
    }
  }
}
</script>
