const eventBus = new Vue();

Vue.component('listado-productos',{
    props: ['productos'],
    template: "#listado_productos",
    methods:{
        eliminarProducto(precio){ 
            console.log("eliminar")
            eventBus.$emit('eliminar',precio)
        },
        anadirProducto(precio){
            console.log("agregar")
            eventBus.$emit('anadir',precio)
        }
    }
});

Vue.component('carrito-compra',{
    template:"#carrito_de_compras",
    data(){
        return {
            cantidadProductos:0,
            total:0,
        }
    },
    created(){
        eventBus.$on('anadir',(precio)=>{
            console.log(precio)
            if(this.total >= 0){
                this.total += precio;
                this.cantidadProductos ++;
            }
        }),
        eventBus.$on('eliminar',(precio)=>{
            console.log(precio)
            if(this.total > 0){
                this.total -= precio;
                this.cantidadProductos --;
            }
        })
    }
});
new Vue({
  el: "main",
  data: {
    productos: [
      { producto: "Té Dharamsala", precio: 11.45 },
      { producto: "Cerveza tibetana Barley", precio: 32 },
      { producto: "Sirope de regaliz", precio: 14.99 },
      { producto: "Especias Cajun del chef Anton", precio: 12 },
      /*{ producto: "Mezcla Gumbo del chef Anton", precio: 32.50 },
      { producto: "Mermelada de grosellas de la abuela", precio: 150.50 },
      { producto: "Peras secas orgánicas del tío Bob", precio: 12 },
      { producto: "Salsa de arándanos Northwoods", precio: 12 },
      { producto: "Buey Mishi Kobe", precio: 12 },
      { producto: "Pez espada", precio: 12 },
      { producto: "Queso Cabrales", precio: 12 },
      { producto: "Queso Manchego La Pastora", precio: 12 },
      { producto: "Algas Konbu", precio: 12 },
      { producto: "Cuajada de judías", precio: 12 },
      { producto: "Salsa de soja baja en sodio", precio: 12 },
      { producto: "Postre de merengue Pavlova", precio: 12 },
      { producto: "Cordero Alice Springs", precio: 12 },
      { producto: "Langostinos tigre Carnarvon", precio: 12 }*/
    ]
  }
});




