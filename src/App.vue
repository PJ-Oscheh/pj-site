<script setup lang="ts">
import { RouterView } from 'vue-router'

</script>

<template>
  <header>
    <div class="wrapper">

    </div>
  </header>

  <RouterView v-slot="{ Component }">
    <component :is="Component" ref="rviewComponent"/>
  </RouterView>
</template>

<style scoped>


</style>
