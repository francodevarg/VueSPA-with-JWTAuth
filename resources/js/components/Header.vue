<template>
    <div> 
        <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
            <div class="container">
                <a class="navbar-brand" href="#">VueSPA</a>
                <button class="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <template v-if="!currentUser">
                            <li>
                                <router-link to="/Login" class="btn btn-outline-primary"> Iniciar Sesión </router-link> 
                            </li>
                            <li>
                                <router-link to="/register" class="nav-link"> Register </router-link> 
                            </li>

                        </template>

                        <template v-else>

                            <li>
                                <router-link to="/customers" class="nav-link">Customers </router-link>
                            </li>

                               
                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" aria-expanded="false"
                                    aria-haspopup="true" data-toggle="dropdown" >
                                    {{currentUser.name}}
                                    <span class="caret"> </span>
                                </a>

                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <router-link to="/" class="dropdown-item">Home </router-link>
                                    <a href="#!" @click.prevent="logout" class="dropdown-item"> Logout</a>
                                </div>

                            </li>
                            
                        </template>
                    </ul>
                </div>
            </div>
        </nav>    
    </div>
</template>


<script>
export default {
    name: 'Header',
    methods:{
        logout(){
            this.$store.commit('logout');
            this.$router.push('/login');
        }

    },
    computed:{
        currentUser(){
            return this.$store.getters.currentUser;
        }
    }

}
</script>