<script setup>
import Header from './components/Header.vue'
import Button from './components/Button.vue'
</script>
<template>
<div class="bg-almostWhite w-screen h-dvh text-lg  font-epilogue font-normal overflow-hidden">
  <Header></Header>
  <main class="grid grid-flow-row lg:grid-cols-3 lg:place-items-center w-screen h-full lg:px-24   pb-44 lg:pb-24 lg:py-24 ">
    <h1 class="text-4xl lg:text-9xl font-bold row-start-2 lg:row-start-1 lg:col-span-2 flex justify-center items-center lg:justify-start lg:items-end  lg:px-22">Make remote work</h1>
    <div class="row-start-3 lg:row-start-2 lg:col-span-2 w-full flex justify-center items-center lg:justify-start">
      <p class="w-full px-8 text-justify lg:w-96 lg:px-0  text-mediumGray  ">
        Get your team in sync, no matter your location. Streamline processes,
        create team rituals, and watch productivity soar.
      </p>
    </div>
    <div class="row-start-4 lg:row-start-3 lg:col-span-2 w-full text-center lg:text-left">
      <Button title="Learn More" characteristics="w-44 h-14 text-almostWhite bg-almostBlack hover:bg-transparent hover:border-2 hover:border-almostBlack hover:text-almostBlack"></Button>
    </div>
    <img src="./assets/images/image-hero-desktop.png" alt="image-hero" class="w-full h-80 lg:h-full row-start-1 lg:col-start-3 lg:row-span-4">
    <div class="row-start-5 lg:row-start-4 lg:col-span-2 flex justify-center lg:justify-start  items-end gap-2 lg:gap-24 w-full ">
      <img src="./assets/images/client-databiz.svg" alt="databiz">
      <img src="./assets/images/client-audiophile.svg" alt="audiophile">
      <img src="./assets/images/client-meet.svg" alt="meet">
      <img src="./assets/images/client-maker.svg" alt="maker">
    </div>
  </main>
</div>
</template>

<style scoped>
</style>
