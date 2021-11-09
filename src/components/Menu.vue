<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <a class="navbar-brand js-scroll-trigger" >
            <span class="d-block d-lg-none">
                Adminv
            </span>
            <span class="d-none d-lg-block">
                <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="/assets/default_photo.jpg" alt="Default Photo" />
            </span>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link 
                        class="nav-link js-scroll-trigger" 
                    to="/" >
                        Inicio
                    </router-link>
                </li>

                <li class="nav-item">
                    <router-link 
                        class="nav-link js-scroll-trigger" 

                    :to="{name: 'InventarioArticulos'}" >
                        Inventario
                    </router-link >
                </li>

                <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" >
                        Taller
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" >
                        Servicios
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" >
                        Garantias
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" >
                        Proveedores
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" >
                        Clientes
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" >
                        Personal
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" >
                        Perfil actual
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>

export default {
    setup() {
        
    }

}
</script>