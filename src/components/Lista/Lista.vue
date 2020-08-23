<template>
    <div class="Lista">
        <p>Esta es la primer aplicacion que hago utilizando vue cli 4. <br>
            La instalacion actual esta hecha con vue cli 4 pero elegi la version
            2 de vuejs
        </p>
        <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center"
            v-for="item of frutas" v-bind:key="item.id">
                {{item.nombre}}
                <span class="badge badge-primary badge-pill">{{item.cantidad}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: 'Lista',
        props: {
        },
        computed: {
            ...mapState(['frutas'])
        }
    };
</script>
