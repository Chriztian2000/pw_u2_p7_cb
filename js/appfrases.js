const frases = [{frase:'Perro que ladra no muerde', autor:'Juan de San Juan'},
    {frase:'El que madruga, dios lo ayuda', autor:'Pedro de San Pedro'},
    {frase:'Camaron que se duerme se le lleva la corriente', autor:'Elvis de San Elvis'},
    {frase:'Ayer nunca sera hoy', autor:'Carlos de San Carlos'},
    {frase:'Mañana sera un misterio', autor:'Edison de San Edison'},
    {frase:'Fiestas de Quito', autor:'Ricardo de San Ricardo'}
]

const app = Vue.createApp({
    methods: {

        cambiarMensaje() {

        }


    },
    data() {
        return {
            listaFrases: frases,


        }
    }


})

app.mount('#myApp')

