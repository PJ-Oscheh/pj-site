<script setup lang="ts">
import { getCurrentInstance, onMounted } from 'vue';

const props = defineProps<{
    headline: string,
    photo: string,
    nextRef: string
}>();

let experienceSection: HTMLElement | null = null;

onMounted(() => {
    const retVal = getCurrentInstance()?.parent?.refs[props.nextRef];
    
    if (typeof retVal === 'object') {
        experienceSection = <HTMLElement>retVal;
    }
});

function scrollToRef(destRef: HTMLElement): void {
    destRef.scrollIntoView({behavior: 'smooth'});
}

</script>

<template>
    <div class="introCard">
        <h1 class="headline">{{ props.headline }}</h1>
        <div class="divider"></div>
        <div class="introContent">
            <slot></slot>
        </div>
        <img class="headshotPhoto" :src="photo" />

        <button @click="experienceSection != null ? scrollToRef(experienceSection) : () => {}">Scrolly</button>
    </div>
</template>

<style scoped>

div.introCard {
    padding: 60px;
    background-color: #ffffff;
    min-height: 60dvh;
}

h1.headline {
    margin: 0px;
    color: #000000;
    text-align: center;
    font-size: 36pt;
}

div.introContent {
    color: #000000;
    text-align: center;
    font-size: 18pt;
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
    height: 400px;
    border-radius: 100%;
    box-shadow: 0px 0px 12px #868686;
}


</style>