Vue.component("email", {
  props: {
    email: String,
    require: true
  },
  template: "#email",
  methods: {
    validaEmain(email) {
      let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
      if (emailRegex.test(email)) {
        this.$refs.ema.value = email = "";
        console.log(email);
      } else {
        console.log("incorrecto");
      }
      this.$emit("input", email);
    }
  }
});

Vue.component("password", {
  props: {
    password: String,
    require: true
  },
  template: "#password",
  methods: {
    validPassword(password) {
      let PasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
      if (PasswordRegex.test(password)) {
        this.$refs.pass.value = password = "";  
        console.log(password);
      } else {
        console.log("incorrecto");
      }
      this.$emit("input", password);
    }
  }
});

new Vue({
  el: "main",
  data: {
    email: "abelgarcia38348@gmail.com",
    password: "123456",
    reglasPassword: [
      "Minimo 8 caracteres",
      "Maximo 15",
      "Al menos una letra mayúscula",
      "Al menos una letra minucula",
      "Al menos un dígito",
      "No espacios en blanco",
      "Al menos 1 caracter especial"
    ]
  }
});
