Vue.component("alerta", {
  props: ["tipo", "posicion"],
  template: "#alert"
});
new Vue({
  el: "main",
  data: {
    mostrarExito: true,
    mostrarInfo: false,
    mostrarWarnin: false,
    mostrarError: false
  },
  methods: {
    cerrar_mensaje() {
      this.$emit("ocultar");
    }
  }
 
});
