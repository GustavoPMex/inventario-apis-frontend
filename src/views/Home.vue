<template>

<section class="resume-section">
  <div class="resume-section-content">
        <h1 class="mb-5 h1-resume-section">
            Bienvenido
            <span class="text-primary">User</span>
        </h1>

        <div class="subheading w-100 mb-5">
            <p class="p-subheading">Mantente al día</p>
        </div>
        
        <div class="row w-100 mb-5 mx-auto">
            <HomeCard :card="{name: 'Equipos', count: 0}"/>

            <HomeCard :card="{name: 'Servicios', count: 2}" />

            <HomeCard :card="{name: 'Garantias', count: 1}" />
        </div>

        <!-- Redes sociales -->
        <div class="subheading w-100 mb-5">
            <p class="p-subheading">Manten actualizadas tus redes</p>
        </div>

        <div v-if="(redes.facebook || 
                    redes.twitter || 
                    redes.instagram
                    )" 
              class="social-icons">

            <a v-if="redes.facebook" 
              class="social-icon facebook" 
              target="_blank" 
              :href="`${redes.facebook}`">
              <i class="fab fa-facebook-square"></i>
            </a>

            <a v-if="redes.twitter" 
              class="social-icon twitter" 
              target="_blank" 
              :href="`${redes.twitter}`">
              <i class="fab fa-twitter-square"></i>
            </a>

            <a v-if="redes.instagram" 
              class="social-icon facebook" 
              target="_blank" 
              :href="`${redes.instagram}`">
              <i class="fab fa-instagram-square"></i>
            </a>
        </div>
        
        <div v-else>
          <p class="p-vacia">Sin redes sociales</p>
        </div>

        <button
          v-if="authorization" 
          class="btn btn-success mt-5"
          data-toggle="modal" data-target="#modalRedes" data-whatever="@getbootstrap"
          data-backdrop="static" data-keyboard="false"
          @click="redesActuales"
        >
          Editar
        </button>

        <ModalRedesSociales />
  </div>
</section>
<hr class="m-0" />

</template>


<script>
import HomeCard from '../components/HomeCard.vue'
import ModalRedesSociales from '../components/ModalRedesSociales.vue'
import { computed } from '@vue/reactivity'
import { useStore } from 'vuex'
import { onMounted } from '@vue/runtime-core'

export default {
  name: 'Home',
  components: {
    HomeCard, ModalRedesSociales
  },
  setup() {

    const store = useStore()

    const authorization = computed(() =>{
      return store.getters.getAuth
    })

    const redes = computed(() => {
      return store.getters.getRedes
    })

    const cargarRedes = () =>{
      store.dispatch('loadRedes')
    }

    const redesActuales = ()  => {
      store.dispatch('configReSoActuales')
    }

    onMounted(async() => {
      cargarRedes()
    })
    

    return {authorization, redes, cargarRedes, redesActuales}

  }
  
}
</script>
