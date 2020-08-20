const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola mundo con Vuejs',
        frutas: [
            {nombre: 'Pera', cantidad:10},
            {nombre: 'Manzana', cantidad:0},
            {nombre: 'Platano', cantidad:11}
        ],
        nuevaFruta: ''
    },
    methods: {
        agregarFruta: function () {
            this.frutas.push({
                nombre: this.nuevaFruta,
                cantidad: 0
            })
        },
        otroMetodo(){

        }
    }
});