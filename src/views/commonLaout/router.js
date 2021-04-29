import Layout from '@/layout'

export default [
  {
    path: '/commonLaout',
    component: Layout,
    name: 'CommonLaout',
    redirect: '/commonLaout/formVxtable',
    meta: {
      title: '常用布局',
      roles: ['editor', 'admin'],
      icon: 'el-icon-document'
    },
    children: [
      {
        path: 'formVxtable',
        component: () => import('@/views/commonLaout/formVxtable'),
        name: 'FormVxtable',
        meta: { title: '表单表格', noCache: true }
      },
      {
        path: 'tree',
        component: () => import('@/views/commonLaout/tree'),
        name: 'Tree',
        meta: { title: '树结构', noCache: true }
      },
      {
        path: 'fileUpdate',
        component: () => import('@/views/commonLaout/fileUpdate'),
        name: 'FileUpdate',
        meta: { title: '文件上传', noCache: true }
      },
      {
        path: 'imgUpdate',
        component: () => import('@/views/commonLaout/imgUpdate'),
        name: 'ImgUpdate',
        meta: { title: '图片上传', noCache: true }
      }
    ]
  }
]
