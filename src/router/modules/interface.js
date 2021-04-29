/*
 * @Description: sss
 * @Version: 1.0
 * @Autor: zongguosheng
 * @Date: 2021-03-17 11:42:38
 * @LastEditors: zongguosheng
 * @LastEditTime: 2021-04-26 16:48:49
 */
/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const interfaceRouter = {
  path: '/interFace',
  component: Layout,
  redirect: '/interFace/application',
  name: 'InterFace',
  meta: {
    title: '集成应用',
    icon: 'nested'
  },
  children: [
    {
      path: 'application',
      component: () => import('@/views/interFace/application/index'), // Parent router-view
      name: 'application',
      meta: { title: '应用集成' }
    },
    {
      path: '/info/:id/:name',
      name: 'Info',
      hidden: true,
      component: () => import('@/views/interFace/application/info/info'),
      meta: { title: '详情', activeMenu: '/application/info/info' },
      children: [
        {
          path: 'log/:id/:name',
          name: 'Log',
          hidden: true,
          component: () => import('@/views/interFace/application/info/log'),
          meta: { title: '日志', activeMenu: '/application/log' }
        }
      ]
    },
    {
      path: 'infoone',
      name: 'Infoone',
      hidden: true,
      component: () => import('@/views/interFace/application/infoone'),
      meta: { title: '学校', activeMenu: '/application/infoone' }
    },
    {
      path: 'classes',
      name: 'Classes',
      hidden: true,
      component: () => import('@/views/interFace/application/classes'),
      meta: { title: '班级', activeMenu: '/application/classes' }
    }
  ]
}

export default interfaceRouter
