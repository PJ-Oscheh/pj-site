<script setup lang="ts">
import ExperienceCard from "@/components/ExperienceCard.vue"

</script>

<template>
    <div class="portfolioIntro">
        
    </div>
    <div class="portfolioExperience">
        <ExperienceCard employer="Current Lighting Solutions" title="Software Developer (Intern)" location="Beachwood, OH" dateOfEmployment="May 2024 - August 2024">
            <ul class="ecList">
                <li>Develop Python software for factories to configure LED drivers over DALI interface</li>
                <ul>
                    <li>Gain IoT experience</li>
                    <li>Learn how to interact with hardware and verify changes were applied successfully</li>
                    <li>Collaborate with factory employees to ensure application requirements are met</li>
                    <li>Deliver application to factory that produces LED drivers</li>
                </ul>
                <li>Create cross-platform mobile app for field engineers to diagnose lighting sensors and controls</li>
                <ul>
                    <li>Gain mobile app development experience</li>
                    <li>Quickly learn Dart and Flutter to start and complete app for use internally by field engineers</li>
                    <li>Learn how to interact with IoT devices over Bluetooth LE</li>
                </ul>
            </ul>
        </ExperienceCard>
    </div>
</template>

<style scoped>

div.portfolioExperience {
    padding: 24px;
}

</style>