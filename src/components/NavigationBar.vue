<script setup lang="ts">
import type { SecLink } from '@/interfaces/interfaces'
import { scrollToRef } from '@/common/utils';
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';

const props = defineProps<{
    links: SecLink[]
}>();

onMounted(() => {
    window.addEventListener("scroll", changeNavBarColorAndState);
});

onBeforeUnmount(() => {
    window.removeEventListener("scroll", changeNavBarColorAndState);
});

const navBarBgColor = ref("#ffffff");

const mobileMenuShown = ref(false);
const mobileMenuDisplay = computed(() => mobileMenuShown.value ? "block" : "none");

function changeNavBarColorAndState(): void {
    navBarBgColor.value = window.scrollY <= 16 ? "#ffffff" : "#f5f5f5";

    if (mobileMenuShown.value) {
        mobileMenuShown.value = false;
    }
}
</script>

<template>
    <nav class="navBar" @scroll="changeNavBarColorAndState">
        <ul class="mobileNavigation">
            <li class="mNavItem" id="liMenu">
                <button class="btnMenu" @click="mobileMenuShown = !mobileMenuShown">
                    <span class="hLine"></span>
                    <span class="hLine"></span>
                    <span class="hLine"></span>
                </button>
            </li>
            <li class="mNavItem" id="liPageTitle"><span class="pageTitle">Portfolio</span></li>
        </ul>

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
    background-color: v-bind(navBarBgColor);
    transition: background-color 0.6s;
}

ul.navList {
    display: block;
    margin: 0px;
    padding: 0px;
    
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

/* Styling for mobile menu */

ul.mobileNavigation {
    display: none;
    width: 100dvw;
    height: fit-content;
    padding: 0;
}

li.mNavItem {
    display: inline-block;
    list-style-type: none;
}

li#liMenu {
    margin-left: 1rem;
    vertical-align: middle;
}

li#liPageTitle {
    margin-left: 0.5rem;
    vertical-align: middle;
    font-size: 18pt;
}

span.hLine {
    display: block;
    height: 4px;
    width: 36px;
    margin-bottom: 6px;
    background-color: #000000;
    border-radius: 6px;
}

button.btnMenu {
    display: block;
    text-align: right;
    border: none;
    background-color: transparent;
}


/* CHANGES specific to mobile */
@media only screen and (max-width: 800px) {

    ul.mobileNavigation {
        display: block;
    }

    ul.navList {
        display: v-bind(mobileMenuDisplay);
    }

    li.navItem {
        display: block;
    }
}

</style>