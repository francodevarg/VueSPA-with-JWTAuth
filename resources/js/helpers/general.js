export function initialize(store,router){    
    

    // Interceptores de ruta.

    // para las rutas que requieran auth
    router.beforeEach( (to,from,next) => {
        const requiresAuth = to.matched.some( record => record.meta.requiresAuth);
        const currentUser = store.state.currentUser;

        // si la ruta requiere auth, y no esta logged in.
        if(requiresAuth && !currentUser){
            next('/login');// lo lleva al login.

        // si quiere ir a /login y ya esta logged in.
        }else if (to.path == '/login' && currentUser) {
            next('/');// lo lleva al home
        } else{
            next();// siempre va next
        }

    }); 

    //Cuando la sesion termina (se agotó el token)
    axios.interceptors.response.use(null, (error) =>{
        if(error.response.status == 401){
            store.commit('logout'); //le cierro la sesion.
            router.push('/login'); // lo llevo al login.
        }
    });

}