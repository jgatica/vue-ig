const app = new Vue({
    el: '#app',
    data: {
        mensaje: 'Mi mensaje'
    },
    methods: {
    },
    computed: {
        invertido() {
            return this.mensaje.split('').reverse().join('');
        }
    }
});