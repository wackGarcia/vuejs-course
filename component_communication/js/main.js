Vue.component('listado-productos',{
    props: ['productos'],
    template: "#listado_productos",
    methods:{
        eliminarProducto(precio){
            console.log("eliminar")
        },
        anadirProducto(precio){
            console.log("agregar")
        }
    }
});

new Vue({
  el: "main",
  data: {
    productos: [
      { producto: "Té Dharamsala", precio: 12 },
      { producto: "Cerveza tibetana Barley", precio: 12 },
      { producto: "Sirope de regaliz", precio: 12 },
      { producto: "Especias Cajun del chef Anton", precio: 12 },
      { producto: "Mezcla Gumbo del chef Anton", precio: 12 },
     /* { producto: "Mermelada de grosellas de la abuela", precio: 12 },
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




