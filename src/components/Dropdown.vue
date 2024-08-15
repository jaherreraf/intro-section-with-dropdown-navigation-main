<script setup>
    defineProps({
        content: Array,
        title: String
    })
    import { Menu, MenuButton, MenuItem,MenuItems } from '@headlessui/vue'
    import { ref } from 'vue';
    const isOpen = ref(false)
</script>
<template>
    <Menu as="div" class="relative ml-3">
        <div>
            <MenuButton class="relative flex max-w-xs items-center gap-2"
            @click="isOpen=!isOpen">
                {{ title }} <img v-if="!isOpen" src="../assets/images/icon-arrow-down.svg" alt="arrow">
                <img v-else src="../assets/images/icon-arrow-up.svg" alt="">
            </MenuButton>
        </div>
        <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
            <MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <MenuItem v-for="(item,index) in content" :key="index" v-slot="{ active }">
                <span  :class="[active ? 'bg-gray-100' : '', 'px-4 py-2  text-mediumGray flex justify-start items-center gap-2']">
                    <img :src="item.icon" alt="" v-if="item.icon">
                    {{ item.span }}
                </span>
            </MenuItem>
            </MenuItems>
        </transition>
    </Menu>
</template>