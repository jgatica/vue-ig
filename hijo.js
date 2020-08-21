Vue.component('hijo', {
   template: `
    <div class="bg-success pt-2">
        <h2>Este es el componente hijo</h2>
        <p>Numero pasado por el padre {{numero}}</p>
        <p>Nombre hijo: {{nombre}}</p>
    </div>
   `,
    props: ['numero'],
    data() {
        return {nombre: 'Roberto'}
    },
    mounted() {
       this.$emit('nombreHijo', this.nombre)
    }
});