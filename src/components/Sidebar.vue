<script setup>
defineProps({
    features: Array,
    company: Array
})
import { ref } from "vue";
import Btn  from "./Button.vue";
const sidebar = ref(false)
const isFeatures = ref(false)
const isCompany = ref(false)
</script>
  
<template>
    <aside class="lg:hidden">
        <button @click="sidebar=true"><img src="/src/assets/images/icon-menu.svg" alt=""></button>
        <div v-show="sidebar" class="fixed left-0 top-0 w-screen h-dvh z-10 bg-gray-900 opacity-70"><!--Background--></div>
        <div class="fixed top-0 right-0 w-1/2 h-dvh bg-almostWhite z-40 flex flex-col gap-6" v-show="sidebar">
            <div class="w-full text-end p-6">
                <button @click="sidebar=false"><img src="/src/assets/images/icon-close-menu.svg" alt=""></button>
            </div>
                <div class="ml-4">
                    <button @click="isFeatures=!isFeatures" class="flex justify-center items-center gap-2 cursor-pointer">
                        Features
                        <img v-if="!isFeatures" src="../assets/images/icon-arrow-down.svg" alt="arrow">
                        <img v-else src="../assets/images/icon-arrow-up.svg" alt="">
                    </button>
                    <ul v-show="isFeatures">
                        <li v-for="(item,index) in features" :key="index">
                            <span  class="px-4 py-2  text-gray-700 flex justify-start items-center gap-2">
                                <img :src="item.icon" alt="" v-if="item.icon">
                                {{ item.span }}
                            </span>
                        </li>
                    </ul>
                </div>
                <div class="ml-4">
                    <button @click="isCompany=!isCompany"  class="flex justify-center items-center gap-2 cursor-pointer">
                        Company
                        <img v-if="!isCompany" src="../assets/images/icon-arrow-down.svg" alt="arrow">
                        <img v-else src="../assets/images/icon-arrow-up.svg" alt="">
                    </button>
                    <ul v-show="isCompany">
                        <li v-for="(item,index) in company" :key="index">
                            <span  class="px-4 py-2  text-gray-700 flex justify-start items-center gap-2">
                                {{ item.span }}
                            </span>
                        </li>
                    </ul>
                </div>
                <span class="ml-4 cursor-pointer">Careers</span>
                <span class="ml-4 cursor-pointer">About</span>
            <div class="grid grid-flow-row place-content-center gap-4">
                <span class="text-center cursor-pointer">Login</span>
                <Btn title="Register" characteristics="w-44 py-2 text-mediumGray border-mediumGray bg-transparent border-2  hover:border-almostBlack hover:text-almostBlack active:border-almostBlack active:text-almostBlack"></Btn>
            </div>

        </div>
        </aside>
</template>
