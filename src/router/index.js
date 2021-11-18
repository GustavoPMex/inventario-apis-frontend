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
        path: 'agregar',
        name: 'InventarioAgregar',
        component: () => import(/* webpackChunkName: "agregar" */ '../views/inventario/Agregar.vue')
      }
    ]
  },
  // -- Proveedores --
  {
    path: '/proveedores',
    component: () => import(/* webpackChunkName: "proveedores" */ '../views/proveedores/BaseProveedores.vue'),
    children: [
      {
        path: '',
        name: 'ProveedoresList',
        component: () => import(/* webpackChunkName: "proveedores" */ '../views/proveedores/Proveedores.vue'),
      },
      {
        path: 'agregar',
        name: 'ProveedoresAgregar',
        component: () => import(/* webpackChunkName: "proveedores" */ '../views/proveedores/Agregar.vue'),
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
