new Vue({
	el:'main',
	data:{
		laborales:['lunes','martes','miercoles','jueves','viernes'],

		tareas: [
		{nombre: 'Hacer la compra',prioridad: 'baja'},
		{nombre: 'Aprender Vue y Firebase', prioridad: 'alta'},
		{nombre: 'Ir al gimnasio', prioridad: 'alta'},
		],

		persona: {
			nombre: 'Abel',
			profesion: 'dev',
			ciudad: 'Mexico'
		}
	}
})