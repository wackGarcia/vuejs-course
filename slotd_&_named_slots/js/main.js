Vue.component('alerta',{
    props:['tipo','posicion'],
    template: "#alert"
});
new Vue({
    el:'main',
    data : {
        hello : "saludo"
    }
});