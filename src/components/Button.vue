<script setup>
    defineProps({
        title: String,
        characteristics: String,
    })
</script>
<template>
    <button :class="['capitalize cursor-pointer font-bold rounded-lg  transition-color ease-in-out duration-500',
        characteristics
    ]">
        {{ title }}
    </button>
</template>