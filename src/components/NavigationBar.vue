<script setup lang="ts">
import type { SecLink } from '@/interfaces/interfaces'
import { scrollToRef } from '@/common/utils';
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';

const props = defineProps<{
    links: SecLink[]
}>();

onMounted(() => {
    window.addEventListener("scroll", changeNavBarColor);
});

onBeforeUnmount(() => {
    window.removeEventListener("scroll", changeNavBarColor);
});

const navBarBgColor = ref("#ffffff");

function changeNavBarColor(): void {
    navBarBgColor.value = window.scrollY == 0 ? "#ffffff" : "#f5f5f5";
}
</script>

<template>
    <nav class="navBar" @scroll="changeNavBarColor">
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
    position: fixed;
    width: 100dvw;
    min-height: 0;
    top: 0;
}

ul.navList {
    display: block;
    margin: 0px;
    padding: 0px;
    background-color: v-bind(navBarBgColor);
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