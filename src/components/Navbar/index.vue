<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import routerArr from '../../router/routers'
const routerArrRef = ref(routerArr);
// this is only necessary if we care about matching the query
function includesQuery(outter, inner) {

    for (let key in inner) {
        
        let innerValue = inner[key]
        let outterValue = outter[key]
        if (typeof innerValue === 'string') {
            if (innerValue !== outterValue) return false
        } else {
            if (
                !Array.isArray(outterValue) ||
                outterValue.length !== innerValue.length ||
                innerValue.some((value, i) => value !== outterValue[i])
            )
                return false
        }
    }

    return true
}

</script>

<template>
    <nav class="navbar-container">
        <RouterLink class="router_item" v-slot="{ route }" v-for="item in routerArrRef" :to="{ name: item.name }"
            :key="item.path" active-class="selected" exact-active-class="">{{ item.name
            }} {{ $route.path.startsWith(route.path) && includesQuery($route.query, route.query) }}{{ route.path }}
        </RouterLink>
    </nav>
    <br>
</template>

<style lang="scss" scoped>
.navbar-container {
    width: 100%;
    padding-left: 10%;
    padding-right: 10%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #f40;
    text-align: center;
    height: 70px;
    box-sizing: border-box;
    align-items: center;

    .router_item {
        display: block;
        width: max-content;
        margin: 0 auto;
        text-align: center;

        &.selected {
            background-color: #666;
        }
    }
}
</style>