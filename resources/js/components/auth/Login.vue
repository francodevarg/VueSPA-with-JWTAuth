<template>
    <div class="container">

    <div class="login row">
        <div class="col-md-4">
            <div class="card shadow-sm">
                <div class="h3 text-center pt-2">
                    Iniciar Sesión
                </div>
                <div class="card-body">
                    <form @submit.prevent="authenticate">
                        <div class="form-group row">
                            <label for="email">Email:</label>
                            <input type="email" v-model="form.email" class="form-control" placeholder="Ingrese su email">
                        </div>
                        <div class="form-group row">
                            <label for="password">Contraseña:</label>
                            <input type="password" v-model="form.password" class="form-control" placeholder="Ingrese su contraseña">
                        </div>
                        <div class="form-group row">
                            <input type="submit" value="Entrar" class="btn btn-primary btn-lg btn-block">
                        </div>
                        <div class="form-group row" v-if="authError">
                            <p class="error">
                                {{AuthError}}
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>


<script>

import {login} from '../../helpers/auth';

export default {
    name:'Login',
    data(){
        return{
            form:{
                email:'',
                password:''
            },
            error: null
        }
    },
    methods:{
        authenticate(){
            this.$store.dispatch('login');

            login(this.$data.form).then(
                (res) => {
                    this.$store.commit("loginSuccess", res);
                    this.$router.push({path: '/'});
                }
            ).catch( (error) =>{
                this.$store.commit("loginFailed" , {error});
            } );
        }
    },
    computed:{
        authError(){
            return this.$store.getters.authError;
        }
    }
}
</script>


<style scoped>

.error{
    text-align: center;
    color:red;
}
.login{
    display:flex;
    justify-content: center;
}

</style>