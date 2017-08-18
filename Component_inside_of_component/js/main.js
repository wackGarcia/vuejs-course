Vue.component('lista-tareas',{
    props:['tareas'],
    template:"#listarTareas"
});
Vue.component('tarea',{
    props:['tarea'],
    template:"#tareas"
})

new Vue({
    el:'main',
    data:{
        tareas:[
            'Finalizar seccion Componentes',
            'Iniciar workflow con Vue CLI y webpack',
            'Terminar de estudiar la documentación de Vuex',
            'Seguir jugando con Vue Router y grabar el primer video'
        ]
    }
})