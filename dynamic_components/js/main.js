Vue.component('tareas',{
    template: "#lista-tareas",
    data(){
        return {
            tareas:[
                'Finalizar seccion componentes',
                'iniciar workflow con Vue CLI',
                'terminar de estudiar la documentacion'
            ]
        }
    }
});

Vue.component('contacto',{
    template:"#lista-contacto",
    data(){
        return {
            contacto : "abelgarcia38348@gmail.com"
        }
    }
})

Vue.component('bio',{
    template:"#lista-bio",
    data(){
        return {
            bio:"My name is Abel, I'm 25 years old and I live in Mexico city"
        }
    }
})

new Vue({
    el:'main',
    data: {
        seleccionado:'tareas'
    }
});
