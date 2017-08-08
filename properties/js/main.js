Vue.component("autor", {
  props: ["nombre", "edad"],
  mounted() {
    // las props son accesibles desde this (proxy)
    console.log(this.nombre);
    console.log(this.edad);
  },
  template: `<div><h1>{{ nombre }}</h1><button @click = "cambiarProp" >Cambiar Prop</button></div>`,
  data: function() {
    return { counter: this.nombre };
  },
  methods: {
    cambiarProp() {
      this.nombre = this.nombre.toUpperCase();
    }
  }
});

new Vue({
  el: "main",
  data: {
    autor: "Juan Perez"
  }
});
