<script setup lang="ts">

const props = defineProps<{
    employer: string,
    title: string,
    location: string,
    dateOfEmployment: string
}>();

</script>

<template>
    <div class="experienceCard">

        <h1 class="employerName">{{ props.employer }}</h1>
        <h2 class="jobTitle">{{ props.title }}</h2>
        <span class="workLocation">{{ props.location }}</span>
        <span class="divider">|</span>
        <span class="dateOfEmployment">{{ props.dateOfEmployment }}</span><br/>

        <div class="experienceInfo">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>

div.experienceCard {
    background-color: #f3f3f3;
    box-shadow: 0px 0px 12px #b9b9b9;
    outline-style: solid;
    outline-color: #cfcfcf;
    border-radius: 6px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 24px;
    padding: 12px;
}

div.experienceInfo {
    margin-top: 12px;
    margin-left: 6px;
}

h1.employerName {
    margin: 6px;
}

h2.jobTitle {
    color: var(--accent);
    margin: 6px;
}

span.workLocation {
    margin-left: 6px;
}

/* Separates work location & date of employment */
span.divider {
    margin-left: 6px;
    margin-right: 6px;
}

span.workLocation, span.dateOfEmployment, span.divider {
    color: #5e5e5e;
}

:slotted(ul.ecList) {
    margin: 0px;
    margin-top: 3px;
}

:slotted(ul.ecList li) {
    margin: 0px;
}

</style>