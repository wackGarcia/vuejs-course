new Vue({
    el:'main',
    data : {
        personas: []
    },
    mounted(){
        this.cargarPersonas();
    },
    methods:{
        cargarPersonas(){
            this.$http.get('https://randomuser.me/api/?results=50')
                .then((respuesta)=>{
                    this.personas = respuesta.body.results
                    console.log(respuesta.body.results)
                });
        }
    }
})