<script setup lang="ts">
import { getCurrentInstance, onMounted } from 'vue';
import { scrollToRef } from '@/common/utils';

const props = defineProps<{
    headline: string,
    photo: string,
    nextRef: string,
    btnScrollText: string
}>();

let experienceSection: HTMLElement | null = null;

onMounted(() => {
    const retVal = getCurrentInstance()?.parent?.refs[props.nextRef];
    
    if (typeof retVal === 'object') {
        experienceSection = <HTMLElement>retVal;
    }
});

</script>

<template>
    <div class="introCard">
        <h1 class="headline">{{ props.headline }}</h1>
        <div class="divider"></div>
        <div class="introContent">
            <slot></slot>
        </div>
        <img class="headshotPhoto" :src="photo" />

        <button class="btnScroll" @click="scrollToRef(experienceSection)">
            {{ btnScrollText }} &rarr;
        </button>
    </div>
</template>

<style scoped>

div.introCard {
    padding: 5dvh;
}

h1.headline {
    margin: 0px;
    color: #000000;
    text-align: center;
    font-size: 5em;
}

div.introContent {
    color: #000000;
    text-align: center;
    font-size: 1.6em;
}

div.divider {
    width: 80%;
    height: 3px;
    background-color: var(--accent);
    margin-top: 12px;
    margin-bottom: 12px;
    margin-left: auto;
    margin-right: auto;
}


img.headshotPhoto {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 48px;
    max-width: 26dvw;
    min-width: 300px;
    border-radius: 100%;
    box-shadow: 0px 0px 12px #868686;
}

button.btnScroll {
    display: block;
    margin-top: 48px;
    margin-left: auto;
    margin-right: auto;
    padding: 12px;
    border: none;
    background-color: var(--accent);
    color: #ffffff;
    border-radius: 6px;
    box-shadow: 0px 3px var(--accent-shadow);
    font-weight: bold;
    font-size: 1.1em;
}

button.btnScroll:active {
    transform: translate(0px, 2px);
    box-shadow: none;
}

</style>