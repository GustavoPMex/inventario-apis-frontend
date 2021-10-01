import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/inventario',
    name: 'Inventario',
    component: () => import(/* webpackChunkName: "inventario" */ '../views/inventario/Inventario.vue')
  },
  {
    path: '/inventario/modificaciones/',
    name: 'InventarioModificaciones',
    component: () => import(/* webpackChunkName: "modificaciones" */ '../views/inventario/Modificaciones.vue')
  },
  {
    path: '/inventario/ventas/',
    name: 'InventarioVentas',
    component: () => import(/* webpackChunkName: "modificaciones" */ '../views/inventario/Ventas.vue')
  },
  {
    path: '/inventario/agregar/',
    name: 'InventarioAgregar',
    component: () => import(/* webpackChunkName: "agregar" */ '../views/inventario/Agregar.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
