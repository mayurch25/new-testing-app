<script setup>
import { ref, onMounted } from 'vue'

const user = ref(null)

onMounted(async () => {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/github`)
    console.log(res, 'res')

    const data = await res.json()
    console.log(data, 'data')

    user.value = data
  } catch (err) {
    console.error("Error:", err)
  }
})
</script>

<template>
  <div v-if="user">
    <img :src="user.avatar_url" width="100" />
    <h2>{{ user.login }}</h2>
    <p>Followers: {{ user.followers }}</p>
    <p>Repos: {{ user.public_repos }}</p>
  </div>
</template>