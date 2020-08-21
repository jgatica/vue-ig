const app = new Vue({
    el: '#app',
    data: {
        mensaje: 'Mi mensaje',
        porcentaje: 0
    },
    methods: {
    },
    computed: {
        invertido() {
            return this.mensaje.split('').reverse().join('');
        },
        manejarPorcentaje() {
            return this.porcentaje;
        }
    }
});