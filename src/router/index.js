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
    component: () => import('../views/inventario/BaseInventario.vue'),
    children: [
      {
        path: '',
        name: 'InventarioArticulos',
        component: () => import('../views/inventario/Articulos.vue'),
      },
      {
        path: 'agregar',
        name: 'InventarioAgregar',
        component: () => import('../views/inventario/Agregar.vue')
      }
    ]
  },
  // -- Proveedores --
  {
    path: '/proveedores',
    component: () => import('../views/proveedores/BaseProveedores.vue'),
    children: [
      {
        path: '',
        name: 'ProveedoresList',
        component: () => import('../views/proveedores/Proveedores.vue'),
      },
      {
        path: 'agregar',
        name: 'ProveedoresAgregar',
        component: () => import('../views/proveedores/Agregar.vue'),
      }
    ]

  },
  {
    path: '/personal',
    component: () => import('../views/personal/BasePersonal.vue'),
    children: [
      {
        path: '',
        name: 'PersonalList',
        component: () => import('../views/personal/Personal.vue')
      },
    ]
  },
  {
    path: '/registro',
    component: () => import('../views/registro/BaseRegistro.vue'),
    children: [
      {
        path: '',
        name: 'Login',
        component: () => import('../views/registro/Login.vue')
      },
      {
        path: 'signup',
        name: 'Signup',
        component: () => import('../views/registro/Signup.vue')
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
