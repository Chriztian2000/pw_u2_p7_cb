const frases = [{ frase: 'Perro que ladra no muerde', autor: 'Juan de San Juan' },
{ frase: 'El que madruga, dios lo ayuda', autor: 'Pedro de San Pedro' },
{ frase: 'Camaron que se duerme se le lleva la corriente', autor: 'Elvis de San Elvis' },
{ frase: 'Ayer nunca sera hoy', autor: 'Carlos de San Carlos' },
{ frase: 'Mañana sera un misterio', autor: 'Edison de San Edison' },
{ frase: 'Fiestas de Quito', autor: 'Ricardo de San Ricardo' }
]

const app = Vue.createApp({
    methods: {


        agregarFrase() {
            console.log(this.frase);
            console.log(this.autor);

            const nuevaFrase = {
                frase: this.frase,
                autor: this.autor
            }

            this.listaFrases.unshift(nuevaFrase);
        },

        agregarFraseFinal() {
            console.log(this.frase);
            console.log(this.autor);

            const nuevaFrase = {
                frase: this.frase,
                autor: this.autor
            }

            this.listaFrases.push(nuevaFrase);
        },


        eventoKeyPress({ charCode, cancelable, key, keyCode, code, target }) {
            /*if(event.charCode === 13){
                console.log('Evento');
                console.log(event);
            }*/

            if (key === "Enter") {
                console.log('Evento');
                //console.log(event);
                console.log(charCode);
                console.log(cancelable);
                console.log(key);
                console.log(keyCode);
                console.log(code);
                console.log(target.baseURI);
                this.agregarFraseFinal();


            }

        },

        eventoKeyPressModificador() {



            console.log('Evento');
            
            console.log(charCode);
            console.log(cancelable);
            console.log(key);
            console.log(keyCode);
            console.log(code);
            console.log(target.baseURI);
            this.agregarFraseFinal();



        }



    },
    data() {
        return {
            listaFrases: frases,
            frase: null,
            //autor:'Sin autor'
            autor: null


        }
    }


})

app.mount('#myApp')

