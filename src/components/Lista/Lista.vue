<template>
    <div class="Lista">
        <p>Esta es la primer aplicacion que hago utilizando vue cli 4. <br>
            La instalacion actual esta hecha con vue cli 4 pero elegi la version
            2 de vuejs
        </p>
        <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center">
                Cras justo odio
                <span class="badge badge-primary badge-pill">14</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                Dapibus ac facilisis in
                <span class="badge badge-primary badge-pill">2</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                Morbi leo risus
                <span class="badge badge-primary badge-pill">1</span>
            </li>
        </ul>    </div>
</template>

<script>
    export default {
        name: 'Lista',
        props: {
        },
    };
</script>
