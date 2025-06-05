<script setup lang="ts">
import type { SecLink } from '@/interfaces/interfaces'
import { scrollToRef } from '@/common/utils';

const props = defineProps<{
    links: SecLink[]
}>();
</script>

<template>
    <nav class="navBar">
        <ul class="navList">
            <li class="navItem" v-for="link in props.links" :key="link.id">
                <a @click="scrollToRef(link.refSection)">{{ link.displayText }}</a>
            </li>
        </ul>
    </nav>
</template>

<style scoped>

nav.navBar {
    display: block;
    min-height: 0;
}

ul.navList {
    display: block;
    margin: 0px;
    padding: 0px;
    background-color: #f5f5f5;
}

li.navItem {
    display: inline-block;
    list-style-type: none;
    
}

li.navItem:hover {
    background-color: #dbdbdb;
}

li.navItem a {
    display: block;
    text-decoration: none;
    color: var(--accent);
    font-weight: bold;
    padding: 36px;
}

</style>