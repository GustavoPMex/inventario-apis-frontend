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

        <div class="social-icons">
            <div class="subheading w-100 mb-5">
                <p class="p-subheading">Manten actualizadas tus redes</p>
            </div>
            <a class="social-icon" target="_blank" href="#">
              <i class="fab fa-facebook-f icon-social-icons"></i>
            </a>
        </div>
  </div>
</section>
<hr class="m-0" />

</template>


<script>
import HomeCard from '../components/HomeCard.vue'

export default {
  components: {
    HomeCard
  },
  name: 'Home',
  
}
</script>
