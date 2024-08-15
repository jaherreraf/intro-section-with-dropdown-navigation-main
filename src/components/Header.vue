<script setup>
    import Dropdown  from "./Dropdown.vue";
    import Btn  from "./Button.vue";
    import Sidebar  from "./Sidebar.vue";
    const features=[
        {span:'Todo List', icon:'/src/assets/images/icon-todo.svg'},
        {span:'Calendar', icon: '/src/assets/images/icon-calendar.svg'},
        {span:'Reminders', icon:'/src/assets/images/icon-reminders.svg'},
        {span:'Planning', icon:'/src/assets/images/icon-planning.svg'},

    ]
    const company= [
        {span:'History'},{span:'Our Team'}, {span:'Blog'}]
</script>
<template>
    <header class="flex justify-between items-center  p-6  text-mediumGray">
        <div class="hidden lg:flex justify-center items-center gap-6">
            <img src="/src/assets/images/logo.svg"  class="w-24 h-12">
            <Dropdown :title="'Features'" :content="features"/>
            <Dropdown :title="'Company'" :content="company"/>
            <span class="capitalize cursor-pointer">Careers</span>
            <span class="capitalize cursor-pointer">About</span>
        </div>
        <div class="hidden lg:flex justify-normal items-center gap-6">
            <span class="cursor-pointer">Login</span>
            <Btn title="Register" characteristics="w-24 text-mediumGray border-mediumGray bg-transparent border-2  hover:border-almostBlack hover:text-almostBlack"></Btn>
        </div>
        <img src="/src/assets/images/logo.svg"  class="w-24 h-12 lg:hidden">
        <Sidebar :features :company/>
  </header>
</template>