<script setup lang="ts">
import ContactCard from "@/components/ContactCard.vue";
import ExperienceCard from "@/components/ExperienceCard.vue";
import IntroCard from "@/components/IntroCard.vue";
import NavigationBar from '@/components/NavigationBar.vue';
import type { SecLink, ContactInfo } from "@/interfaces/interfaces";
import { onMounted, ref, useTemplateRef, type Ref, type ShallowRef } from "vue";

onMounted(() => {
    links.value = [
        { refSection: refIntroSection.value, displayText: "Home", id: id++},
        {refSection: refExperienceSection.value, displayText: "Experience", id: id++},
        {refSection: refEducationSection.value, displayText: "Education", id: id++}
    ];
});

defineExpose<{
    refExperienceSection: Readonly<ShallowRef<HTMLDivElement | null>>;
}>();


const refIntroSection = useTemplateRef("introSection");
const refExperienceSection = useTemplateRef("experienceSection");
const refEducationSection = useTemplateRef("educationSection");

let id = 0;
const links: Ref<SecLink[] | null> = ref(null);

const isShowingAdditionalEducation = ref(false);

let contactId = 0;
const contactLinks : ContactInfo[] = [
    {
        icon: "✉️",
        displayText: "pj.oschmann@pm.me",
        id: contactId++
    },
    {
        icon: "☎️",
        displayText: "(216) 856-5979",
        id: contactId++
    },
    {
        icon: "IN",
        displayText: "linkedin.com/in/pj-oschmann",
        id: contactId++
    }
]

</script>

<template>
    <NavigationBar :links="links ?? []"></NavigationBar>

    <div ref="introSection" class="portfolioIntro">
        <IntroCard headline="Welcome to my site!" 
        photo="../../public/pj.jpg" 
        nextRef="experienceSection"
        btnScrollText="See My Experience">
                Hey there! I'm PJ Oschmann, a recent graduate of Baldwin Wallace University and an
                up-and-coming software developer seeking an entry-level opportunity to solve 
                real-world problems. I have experience in full-stack software development,
                IoT programming, and software testing.
        </IntroCard>
    </div>
    <div ref="experienceSection" class="portfolioExperience">
        <h1 class="sectionHeader">Experience</h1>
        <ExperienceCard employer="Mission Guatemala Database"
        title="Scrum Master & Full-stack Developer"
        location="Berea, OH"
        dateOfEmployment="March 2024 - May 2025">
            <p class="ecParagraph">
            The Mission Guatemala EHR Database Software supports a clinic in a rural region of
            Guatemala in serving over 10,000 patients. It's developed as a multi-semester capstone
            at Baldwin Wallace University. Our last semester of the project involved a team of 12
            student-developers!
            </p>
            <ul class="ecList">
                <li>Lead & mentor 3 students to onboard them onto the project</li>
                <ul>
                    <li>Teach project goals</li>
                    <li>Teach advance topics like asynchronous programming and reflection</li>
                    <li>Perform static analysis on team members' PRs ("code review")</li>
                    <li>Perform dynamic analysis on team members' PRs (run & test code
                        for defects)</li>
                </ul>
                <li>Serve as Scrum Master</li>
                <ul>
                    <li>Track daily stand-ups</li>
                    <li>Lead end-of-sprint retrospectives</li>
                    <li>Prepare mid-semester & end-of-semester work completion reports</li>
                </ul>
                <li>Develop full-stack REST application in C# with .NET</li>
                <ul>
                    <li>Decrease "patient list" loading time by at least 80x per patient</li>
                    <li>Implement fuzzy search in "patient list"</li>
                    <li>Create "front desk" view to manage clinic payments</li>
                    <li>Create framework for designing automated UI tests</li>
                </ul>
            </ul>
        </ExperienceCard>
        <ExperienceCard employer="Current Lighting Solutions"
        title="Software Developer (Intern)"
        location="Beachwood, OH"
        dateOfEmployment="May 2024 - August 2024">
            <ul class="ecList">
                <li>Develop Python software for factories to configure LED drivers over
                    DALI interface</li>
                <ul>
                    <li>Gain IoT experience</li>
                    <li>Learn how to interact with hardware and verify changes were applied
                        successfully</li>
                    <li>Collaborate with factory employees to ensure application requirements
                        are met</li>
                    <li>Deliver application to factory that produces LED drivers</li>
                </ul>
                <li>Create cross-platform mobile app for field engineers to diagnose lighting
                    sensors and controls</li>
                <ul>
                    <li>Gain mobile app development experience</li>
                    <li>Quickly learn Dart and Flutter to start and complete app for use internally
                        by field engineers</li>
                    <li>Learn how to interact with IoT devices over Bluetooth LE</li>
                </ul>
            </ul>
        </ExperienceCard>
        <ExperienceCard employer="Xngage"
        title="Software Developer (Intern)"
        location="Middleburg Heights, OH"
        dateOfEmployment="June 2023 - July 2023">
        <ul class="ecList">
            <li>Write PowerShell script to backup SQL databases to Azure filesystem</li>
            <ul>
                <li>Accessible through JetBrains TeamCity</li>
            </ul>
            <li>Write C# program to generate Microsoft Word runbook using OpenXML SDK</li>
        </ul>
        </ExperienceCard>
    </div>

    <div ref="educationSection" class="portfolioEducation">
        
        <h1 class="sectionHeader">Education</h1>
        <ExperienceCard employer="Baldwin Wallace University"
        title="BS, Software Engineering"
        location="Berea, OH"
        dateOfEmployment="August 2022 - May 2025">
        <p class="ecParagraph">I graduated <i>magna cum laude</i> from Baldwin Wallace University in
            2025 with a major in Software Engineering and a minor in Asian Studies.
        </p>
        </ExperienceCard>
        
        <h2 class="subsectionHeader clickable" 
        @click="isShowingAdditionalEducation = !isShowingAdditionalEducation">
            {{ isShowingAdditionalEducation ? '▾' : '▸' }} Additional Education
        </h2>
        <div class="additionalEducation" v-if="isShowingAdditionalEducation">
            <ExperienceCard employer="Kansai Gaidai University"
        location="Online"
        dateOfEmployment="June 2024 - July 2024">
            <p>During Summer 2024, I took Japanese 1 online with Kansai Gaidai University as part
                of my Asian Studies minor.
            </p>
        </ExperienceCard>
        <ExperienceCard employer="Ohio Northern University"
        location="Ada, OH"
        dateOfEmployment="August 2021 - May 2022">
            <p class="ecParagraph">
                Before transferring to Baldwin Wallace, I began my college education at Ohio
                Northern University, originally studying Computer Science.
            </p>
        </ExperienceCard>

        </div>
    </div>

    <div ref="contactSection" class="portfolioContact">
        <h1 class="sectionHeader" id="contactHeader">Contact</h1>
        <ContactCard :contact-items="contactLinks" />
    </div>
</template>

<style scoped>


/* Section Styling */
div.portfolioIntro {
    margin-top: 120px;
}

div.portfolioExperience {
    padding: 24px;
    background-color: #f9f9f9;
}

div.portfolioContact {
    background-color: var(--accent);
    margin: 0px;
    overflow: auto; /* TODO: check me */
}

/* Header Styling */

h1.sectionHeader {
    text-align: center;
    font-size: 36pt;
}

h2.subsectionHeader {
    text-align: center;
    margin-top: 48px;
}

h2.clickable {
    display: block;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
}

h2.clickable:hover {
    color: var(--accent);
}

/* id-based overrides */
h1.sectionHeader#contactHeader {
    color: #ffffff;
}

</style>