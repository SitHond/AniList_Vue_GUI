<template> 
    <div id="app">       
      <!-- Ваше главное содержимое приложения -->
      <HeaderComp />
      <router-view></router-view>
    </div>
  </template>
  
  <script>
import HeaderComp from './components/HeaderComp.vue';

  export default {
    name: 'App',
    components: { HeaderComp }
}
  </script>
  
  <style>
  /* Стили для вашего приложения */
  </style>
  