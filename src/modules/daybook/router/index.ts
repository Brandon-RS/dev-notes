import { RouteLocationNormalized } from 'vue-router';
export default {
  name: 'daybook',
  component: () => import(/* webpackChunkName: "daybook" */ '@/modules/daybook/layouts/DaybookLayout.vue'),
  children: [
    {
      path: '',
      name: 'no-entry',
      component: () => import(/* webpackChunkName: "no-entry" */ '@/modules/daybook/views/NoEntrySelected.vue'),
    },
    {
      path: ':id',
      name: 'entry',
      component: () => import(/* webpackChunkName: "entry" */ '@/modules/daybook/views/EntryView.vue'),
      props: (route: RouteLocationNormalized) => ({ id: route.params.id })
    }
  ]
}
