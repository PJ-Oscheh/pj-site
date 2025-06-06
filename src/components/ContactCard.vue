<script setup lang="ts">
import type { ContactInfo } from '@/interfaces/interfaces';


const props = defineProps<{
    contactItems: ContactInfo[]
}>();

</script>

<template>
    <div class="contactCard">
        <ul class="ccList">
            <li v-for="item in props.contactItems" :key="item.id">
                {{ item.icon }}: {{ item.displayText }}
            </li>
        </ul>
    </div>
</template>

<style scoped>

div.contactCard {
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: fit-content;
    padding-top: 60px;
    padding-bottom: 60px;
}

ul.ccList {
    margin: 0px;
    padding: 0px;
    list-style: none;
    color: #ffffff
}

ul.ccList > li {
    font-size: 14pt;
}

</style>