Vue.component('padre', {
    template: `
        <div class="bg-warning text-white p-2">
            <div>
                <h1>Este es el componente padre</h1>
                <hijo :numero="numero"></hijo>
            </div>
        </div>
    `,
    data() {
        return {
            numero:0
        }
    }
});