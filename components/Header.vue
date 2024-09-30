<template>
    <header class="">
        <el-menu :default-active="activeIndex" mode="horizontal" :ellipsis="false" @select="handleSelect" :router="true"
            class="menu-desktop px-10 hidden lg:flex">
            <NuxtImg provider="iGEM" src="/icons/logo.png" quality="100" @click="$router.push('/')"
                class="cursor-pointer py-2" />
            <div class="grow"></div>
            <el-menu-item index="/">HOME</el-menu-item>
            <el-sub-menu index="project">
                <template #title>Project</template>
                <el-menu-item index="/description">Description</el-menu-item>
                <el-menu-item index="/engineering">Engineering</el-menu-item>
                <el-menu-item index="/safety">Safety</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="wet-lab">

                <template #title>Wet Lab</template>
                <el-menu-item index="/experiment">Experiments</el-menu-item>
                <el-menu-item index="/result">Results</el-menu-item>
                <el-menu-item index="/notebook">Notebook</el-menu-item>
                <el-menu-item index="/parts">Parts</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="dry-lab">

                <template #title>Dry Lab</template>
                <el-menu-item index="/hardware">Hardware</el-menu-item>
                <el-menu-item index="/model">Model</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="team">

                <template #title>Team</template>
                <el-menu-item index="/member">Members</el-menu-item>
                <el-menu-item index="/attributions">Attributions</el-menu-item>
                <el-menu-item index="/contribution">Contributions</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="hp">

                <template #title>Human Practices</template>
                <el-menu-item index="/education">Education</el-menu-item>
                <el-menu-item index="/integrated">Integrated HP</el-menu-item>
            </el-sub-menu>
        </el-menu>

        <!-- mobile nav -->
        <el-menu :default-active="activeIndex" mode="horizontal" :ellipsis="false" @select="handleSelect" :router="true"
            class="menu-mobile px-10 flex lg:hidden">
            <NuxtImg provider="iGEM" src="/icons/logo.png" quality="100" @click="$router.push('/')"
                class="cursor-pointer py-2" />
            <div class="grow"></div>
            <el-popover :visible="visible" placement="bottom-start" trigger="click" class="">

                <template #reference>
                    <el-avatar class="self-center cursor-pointer" @click="visible = !visible"
                        :icon="ElIconMenu" />
                </template>

                <el-menu :default-active="activeIndex" class="" :collapse="true" :router="true">
                    <el-menu-item index="/">HOME</el-menu-item>
                    <el-sub-menu index="project">

                        <template #title>Project</template>
                        <el-menu-item index="/description">Description</el-menu-item>
                        <el-menu-item index="/engineering">Engineering</el-menu-item>
                        <el-menu-item index="/safety">Safety</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="wet-lab">

                        <template #title>Wet Lab</template>
                        <el-menu-item index="/experiment">Experiments</el-menu-item>
                        <el-menu-item index="/result">Results</el-menu-item>
                        <el-menu-item index="/notebook">Notebook</el-menu-item>
                        <el-menu-item index="/parts">Parts</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="dry-lab">

                        <template #title>Dry Lab</template>
                        <el-menu-item index="/hardware">Hardware</el-menu-item>
                        <el-menu-item index="/model">Model</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="team">

                        <template #title>Team</template>
                        <el-menu-item index="/member">Members</el-menu-item>
                        <el-menu-item index="/attributions">Attributions</el-menu-item>
                        <el-menu-item index="/contribution">Contributions</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="hp">

                        <template #title>Human Practices</template>
                        <el-menu-item index="/education">Education</el-menu-item>
                        <el-menu-item index="/integrated">Integrated HP</el-menu-item>
                    </el-sub-menu>
                </el-menu>
            </el-popover>
        </el-menu>
    </header>
</template>

<script setup>
const route = useRoute()
console.log(route.fullPath)
const activeIndex = ref(route.fullPath)

const handleSelect = (key, keyPath) => {
    console.log(key, keyPath)
}

const visible = ref(false)

watch(
    () => route.fullPath,
    (newVal) => {
        activeIndex.value = newVal
        visible.value = false
    }
)
</script>

<style lang="scss">
.el-menu {
    --el-menu-bg-color: rgba(0, 0, 0, 0.3);
    @apply backdrop-blur-lg;
    --el-menu-border-color: transparent;

    --el-menu-text-color: white;
    --el-menu-hover-bg-color: rgba(255, 255, 255, 0.5);

    
    .el-menu-item:focus:not(.el-menu-item:hover) {
        --el-menu-hover-bg-color: transparent;
        --el-menu-hover-text-color: white;
    }

    .el-sub-menu {
        height: 100%;

        .el-sub-menu__title {
            padding: 0;
            border: none;
        }

        &.is-active .el-sub-menu__title {
            font-weight: bold;
            @apply border-none;
        }

        .el-icon {
            display: none;
        }

        @apply pt-5;
        @apply px-10;

        &.is-active {
            font-weight: bold;

            &::after {
                content: '';
                position: relative;
                width: 100%;
                display: block;
                border-bottom: 2px solid var(--el-menu-active-color);
                bottom: 1.5rem;
            }
        }
    }

    &:not(.el-menu--popup) {
        .el-menu-item {
            @apply pt-5;
            --el-menu-base-level-padding: 2.5rem;

            &.is-active {
                font-weight: bold;
                @apply border-none;

                &::after {
                    content: '';
                    position: absolute;
                    width: 40%;
                    display: block;
                    border-bottom: 2px solid var(--el-menu-active-color);
                    margin-top: 2rem;
                }
            }

        }
    }

    .el-avatar--icon{
        --el-avatar-icon-size: 1.5rem;
        --el-avatar-bg-color: transparent;
        border: solid 2px white;
    }
}

.el-menu--horizontal {
    --el-menu-horizontal-height: 100px;
    align-items: stretch;

    &>.el-menu-item {
        border: none;
    }
}

.el-menu--vertical {
    @apply w-full;

    .el-menu-item, .el-sub-menu__title{
        @apply justify-center;
        
        padding-top: 0 !important;
    }

    .el-sub-menu.is-active::after {
        bottom: 0;
        width: 50%;
        margin: 0 auto;
    }
}

.el-popper {
    --el-bg-color-overlay: rgba(0, 0, 0, 0.3);
    @apply backdrop-blur-lg;
    --el-border-color-light: transparent;
    --el-menu-bg-color: transparent;
}
</style>