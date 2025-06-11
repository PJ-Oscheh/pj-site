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
                {{ item.icon }}
                <a class="clickLink" :href="item.clickLink">
                    {{ item.displayText }}
                </a>
                
                <!-- Divider between links - don't show for last element-->
                <span class="clickLinkDivider" v-if="item.id < props.contactItems.length-1">|</span>
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
    padding-bottom: 60px;
}

ul.ccList {
    margin: 0px;
    padding: 0px;
    list-style: none;
    color: #ffffff;
    text-align: center;
}

ul.ccList > li {
    display: inline-block;
    font-size: 14pt;
}

a.clickLink {
    color: #ffffff;
}

span.clickLinkDivider {
    margin-left: 0.5rem;
    margin-right: 0.25rem;
}

</style>