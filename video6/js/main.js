new Vue({
	el:'main',
	data:{
		mensaje: " hola mundo ;)",
		tareas: [{
			titulo: 'Aprende Vue.js',
			prioridad: true,
			antiguedad: 23
		},{
			titulo: 'Aprende ES6',
			prioridad: false,
			antiguedad: 135
		},{
			titulo: 'Publicar algo todos los dias',
			prioridad: true,
			antiguedad: 378
		}]
	},
	//estas propiedades se van reevaluando cada vez que son utilizadas a diferencia de las computed
	methods:{
	},
	// estas propiedades tienen un funcionamiento similar al de los methods sin embargo 
	// estas propiedades se evaluan una vez y se guardan en memoria  y solo re revaluan cuando hay 
	// un cambio en sus dependencias
	computed: {
		mensajeAlreves () {
			return this.mensaje.split('').reverse().join('');
		},
		tareasConPrioridad () {
			return this.tareas.filter(tarea => tarea.prioridad)
		},
		tareasPorAntiguedad(){
			return this.tareas.sort((a,b) => b.antiguedad - a.antiguedad)
		}
	}
})