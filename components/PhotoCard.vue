<script setup>
defineProps({
    name: {
        type: String,
        required: true,
    },
    pos: {
        type: String,
        required: true,
    },
    src: {
        type: String,
        required: true,
    },
    offset: {
        type: Array,
        default: () => [2, -3],
    },
    degree: {
        type: String,
        required: true,
    },
    major: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
})
</script>

<template>
    <div class="m-2 inline-block">
        <el-popover
            placement="right-start"
            :width="200"
            effect="dark"
            trigger="hover"
        >
            <template #reference>
                <el-card shadow="hover" class="">
                    <template #footer>
                        <el-badge :value="pos" class="item" :offset="offset">
                            {{ name }}
                        </el-badge>
                    </template>
                    <NuxtImg
                        provider="iGEM"
                        :src="src"
                        fit="fill"
                        :placeholder="[50, 50]"
                        loading="lazy"
                        class="aspect-[3/4] w-full"
                    />
                </el-card>
            </template>
            <!-- title -->
            <div class="text-lg font-bold">
                {{ degree }} <br />
                {{ major }}
            </div>
            <!-- content -->
            <div class="mt-2">
                {{ content }}
            </div>
        </el-popover>
    </div>
</template>

<style lang="scss">
.el-card {
    max-width: 400px;
    min-width: 160px;
    width: 18vw;

    --el-box-shadow-light: 0px 0px 12px rgba(255, 255, 255, 0.3);
    --el-card-bg-color: rgba(133, 133, 133, 0.3);
    --el-card-border-color: none;
    --el-text-color-primary: white;

    &:hover .el-card__footer {
        color: var(--el-color-primary);
    }

    .el-card__footer {
        font-size: min(1.5rem, 4vw);
        font-weight: bold;
        text-align: center;

        @apply px-2;
    }

    .el-card__body {
        display: flex;
        justify-content: center;
    }

    .el-badge {
        --el-badge-font-size: min(14px, 2.5vw);
        --el-badge-size: 24px;
        --el-badge-padding: 6px;
        --el-badge-radius: 16px;

        .el-badge__content {
            border: none;
            right: 0;
            transform: translateY(-1rem) translateX(1rem);
        }
    }
}

.el-popper.el-popover {
    width: auto !important;
    max-width: 240px;
}
</style>
