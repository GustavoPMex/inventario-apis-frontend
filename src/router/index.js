import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // -- Inventario --
  {
    path: '/inventario',
    component: () => import(/* webpackChunkName: "inventario" */ '../views/inventario/BaseInventario.vue'),
    children: [
      {
        path: '',
        name: 'InventarioArticulos',
        component: () => import(/* webpackChunkName: "inventario" */ '../views/inventario/Articulos.vue'),
      },
      {
        path: 'modificaciones',
        name: 'InventarioModificaciones',
        component: () => import(/* webpackChunkName: "modificaciones" */ '../views/inventario/Modificaciones.vue')
      },
      {
        path: 'ventas',
        name: 'InventarioVentas',
        component: () => import(/* webpackChunkName: "modificaciones" */ '../views/inventario/Ventas.vue')
      },
      {
        path: 'agregar',
        name: 'InventarioAgregar',
        component: () => import(/* webpackChunkName: "agregar" */ '../views/inventario/Agregar.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active'
})

export default router
