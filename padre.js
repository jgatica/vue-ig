Vue.component('padre', {
    template: `
        <div class="bg-warning text-white p-2">
            <div>
                <h1>Este es el componente padre</h1>
                <p>Numero padre: {{numeroPadre}}</p>
                <hijo :numero="numeroPadre"></hijo>
                <button class="btn btn-danger" @click="numeroPadre++">+</button>
                
            </div>
        </div>
    `,
    data() {
        return {
            numeroPadre:0
        }
    }
});