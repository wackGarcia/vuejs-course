Vue.component('mis-tareas',{
    props:['listado'],
    template:'#mis-tareas-template'
})

new Vue({
    el:'main',
    data: {
        tareas:[
            {titulo: 'primera'},
            {titulo: 'segunda'},
            {titulo: 'tercera'},
            {titulo: 'cuarta'}
        ]
    }
})