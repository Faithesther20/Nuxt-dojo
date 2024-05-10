<template>

<div>

  <h2>About</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi possimus provident maxime quia inventore autem repudiandae tempora accusantium iste quam.</p>
  <div>
    {{data}}
  </div>
</div>
</template>

<script setup>
  const { data }  = await useFetch('/api/currency/GBP')
  
</script>

<style scoped>

</style>