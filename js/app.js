console.log(Vue)

const app = Vue.createApp({
    /*template: `
    <h1>Hola Mundo</h1>
    <p>Con Vue.JS</p> 
    <p>{{1+2}}</p>   
    <p>{{[1,2,3,4,5,6,7]}}</p>
    <p>{{ {nombre:'Christian', apellido:'Betancourt'} }}</p>
    <p>{{false ? 'Activo':'Inactivo'}}</p>
    <p> 1===1 </p>
    <p>{{1===1}}</p>

    `  */


    methods: {

        cambiarMensaje() {
            this.mensaje = 'Adios Mundo'
            this.edad = 25
        }


    },
    data() {
        return {
            mensaje: 'Hola Mundo',
            edad: 24

        }
    }


})

app.mount('#myApp')

