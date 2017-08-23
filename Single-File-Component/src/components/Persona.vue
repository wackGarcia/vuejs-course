<template>
    <div>
        <template v-if="persona">
            <div class="container">
                <h1 v-text="datosPersona.nombre"></h1>
                <h2 v-text="datosPersona.correoe"></h2>
                <img :src="datosPersona.foto" />
            </div>
        </template>
        <template v-else>
            <span>espera...</span>
            <span class="glyphicon glyphicon-adjust"></span>
        </template>
    </div>
</template>


<script>
import axios from 'axios';
export default {
  mounted(){
      axios.get('https://randomuser.me/api/?results=100')
      .then((respuesta)=>{
          this.persona = respuesta.data.results[0]
      })
  },
  data () {
      return {
          persona :null,
      }
  },
  computed: {
      datosPersona(){
          return{
              nombre: `${this.persona.name.first} ${this.persona.name.last}`,
              foto: this.persona.picture.large,
              correoe:this.persona.email,
          }

      }
  }
}
</script>

<style>

</style>
