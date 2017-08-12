Vue.component("alerta", {
  props: ["tipo", "posicion"],
  template: "#alert",
  methods: {
    cerrar_mensaje() {
      this.$emit('ocultar');
    }
  }
});

new Vue({
  el: "main",
  data: {
    mostrarExito: true,
    mostrarInfo: false,
    mostrarWarnin: false,
    mostrarError: false
  }
});
