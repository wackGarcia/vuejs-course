new Vue({
	el:'main',
	data:{
		busqueda: null,
		minimo : 5,
		juegos: [{
			titulo: 'Battlefield 1',
			genero: 'FPS',
			puntuacion: 9
		},{
			titulo: 'Civilizacion VI',
			genero: 'Estrategia',
			puntuacion: 10
		},{
			titulo: 'Resident Evil 7',
			genero: 'Survival Horror',
			puntuacion: 7
		}]
	},
	//estas propiedades se van reevaluando cada vez que son utilizadas a diferencia de las computed
	methods:{
	},
	// estas propiedades tienen un funcionamiento similar al de los methods sin embargo 
	// estas propiedades se evaluan una vez y se guardan en memoria  y solo re revaluan cuando hay 
	// un cambio en sus dependencias
	computed: {
		mejoresJuegos () {
			return this.juegos.filter(juego => juego.puntuacion >= this.minimo)
		},
		buscarJuego (){
			return this.juegos.filter(juego => juego.titulo.includes(this.busqueda))
		}
	}
})