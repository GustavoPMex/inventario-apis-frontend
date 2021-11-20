<template>
    <div class="content-form mx-auto">
        <h1 class="h1-registration mb-4">Login</h1>
        <form action="" method="POST">
            <div class="form-group">
                <label class="label-registration" for="">Usuario</label>
                <input 
                    class="form-control" 
                    type="text"
                    placeholder="Ingrese usuario"
                >

            </div>            

            <div class="form-group">
                <label class="label-registration" for="">Contraseña</label>
                <input 
                    class="form-control"
                    type="password"
                    placeholder="Ingrese contraseña"
                >
            </div>

            <button type="submit" class="btn btn-success mt-5 btn-registration">Entrar</button>
        </form>

        <div class="mt-5">
            <a href="#" class="link-registration">
                <p class="p-registration">Cambiar contraseña</p>
            </a>
        </div>

        <a 
            href="/">
            Home
        </a>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>