
Vue.component('candidato',{
    //props:['nombre','correo','imagen','location'],
    //validations properties
    props: {
        nombre:{
            type:[String,Array],
            required:true,
        },
        correo:{
            type:String,
            default:'S/N'
        },
        imagen:String,
        location:{
            type:Object,
            default(){
                return {
                    ciudad : "s/n"
                }
            }
        },
    },
    template: '#candidato-template'
});

new Vue({
    el:'main',
    mounted() {
        this.obtenerCandidatos();
    },
    data: {
        candidatos:[],
    },
    methods:{
        obtenerCandidatos() {
            this.$http.get('https://randomuser.me/api/?results=50')
                .then((respuesta)=>{
                    this.candidatos = respuesta.body.results
                    console.log(respuesta.body.results[0].email)
                });
        }
    }
})