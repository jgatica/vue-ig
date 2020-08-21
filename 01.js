const app = new Vue({
    el: '#app',
    data: {
        saludo: 'Mi mensaje'
    },
    beforeCreate() {
        console.log('beforeCreate')
    },
    created() {
        // Al crear los metodos, observadores y eventos, pero aun no accede al DOM
        // Aun no se puede acceder a 'el'
        console.log('created')
    },
    beforeMount() {
        // Se ejecuta antes de insertar el DOM
        console.log('beforeMount')
    },
    mounted() {
        // Se ejecuta al insertar el DOM
        console.log('mounted')
    },
    beforeUpdate() {
        // Al detectar un cambio
        console.log('beforeUpdate')
    },
    updated() {
        // Al realizar los cambios
        console.log('updated')
    },
    beforeDestroy() {
        // Antes de destruir la instancia
        console.log('beforeDestroy')
    },
    destroyed() {
        // Se destruye toda la instancia
        console.log('destroyed')
    },
});