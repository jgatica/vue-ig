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
            return {
                'bg-success': this.porcentaje <= 10,
                'bg-default': this.porcentaje > 10 && this.porcentaje <= 20,
                'bg-danger': this.porcentaje > 20,
            }
        }
    }
});