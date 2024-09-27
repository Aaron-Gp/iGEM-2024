<template>
    <header class="pt-5">
        <el-menu :default-active="activeIndex" mode="horizontal" :ellipsis="false" @select="handleSelect" :router="true">
            <NuxtImg provider="iGEM" src="/icons/logo.png" />
            <div class="grow"></div>
            <el-menu-item index="/">HOME</el-menu-item>
            <el-sub-menu index="project">
                <template #title>Project</template>
                <el-menu-item index="/description">Description</el-menu-item>
                <el-menu-item index="/engineering">Engineering Succes</el-menu-item>
                <el-menu-item index="/safety">Safety form</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="wet-lab">
                <template #title>Wet Lab</template>
                <el-menu-item index="/experiment">Experiment</el-menu-item>
                <el-menu-item index="/result">Result</el-menu-item>
                <el-menu-item index="/parts">Notebook Parts</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="dry-lab">
                <template #title>Dry Lab</template>
                <el-menu-item index="/hardware">Hardware</el-menu-item>
                <el-menu-item index="/model">Model</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="team">
                <template #title>Team</template>
                <el-menu-item index="/member">Member</el-menu-item>
                <el-menu-item index="/attributions">Attribution</el-menu-item>
                <el-menu-item index="/contribution">Contribution</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="hp">
                <template #title>Human Practice</template>
                <el-menu-item index="/education">Education</el-menu-item>
                <el-menu-item index="/integrated">Integrated HP</el-menu-item>
            </el-sub-menu>
        </el-menu>
    </header>
</template>

<script setup>
const activeIndex = ref('/')

const handleSelect = (key, keyPath) => {
    console.log(key, keyPath)
}
</script>

<style lang="scss">
.el-menu {
    --el-menu-bg-color: transparent;
    --el-menu-text-color: white;
    --el-menu-hover-bg-color: rgba(255, 255, 255, 0.5);

    .el-menu-item:focus:not(.el-menu-item:hover) {
        --el-menu-hover-bg-color: transparent;
    }

    .el-sub-menu {
        height: 100%;

        .el-sub-menu__title {
            padding: 0;
        }

        &.is-active .el-sub-menu__title {
            font-weight: bold;
        }

        .el-icon {
            display: none;
        }

        @apply pt-5;
        @apply mx-10;
    }

    .el-menu-item {
        @apply pt-5;

        &.is-active {
            font-weight: bold;
        }
    }
}

.el-menu--horizontal {
    --el-menu-horizontal-height: 100px;
    align-items: stretch;
}

.el-popper {
    --el-bg-color-overlay: rgba(8, 0, 28, 0.8);
}
</style>