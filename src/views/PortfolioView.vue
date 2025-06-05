<script setup lang="ts">
import ExperienceCard from "@/components/ExperienceCard.vue";
import IntroCard from "@/components/IntroCard.vue";

</script>

<template>
    <div class="portfolioIntro">
        <IntroCard headline="Welcome to my site!" photo="../../public/pj.jpg" nextRef="experienceSection" btnScrollText="See My Experience">
                Hey there! I'm PJ Oschmann, a recent graduate of Baldwin Wallace University and an up-and-coming software developer seeking an
                entry-level opportunity to solve real-world problems. I have experience in full-stack software development, IoT programming, and software testing.
        </IntroCard>
    </div>
    <div ref="experienceSection" class="portfolioExperience">
        <h1 class="sectionHeader">Experience</h1>
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
    background-color: #f9f9f9;
}

h1.sectionHeader {
    text-align: center;
    font-size: 36pt;
}

</style>