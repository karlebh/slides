<script setup>
  // prettier-ignore
  // eslint-ignore
  import { ref, onMounted } from "vue"

  const images = ref([
    "img-1.jpg",
    "img-2.jpg",
    "img-3.jpg",
    "img-4.jpg",
    "img-5.jpg",
    "img-6.jpg",
    "img-7.jpg",
    "img-8.jpg",
    "img-9.jpg",
    "img-10.jpg",
  ])











  // prettier-ignore

  let i = ref(images.value.length - 1)
  let j = ref(0)
  let k = ref(1)

  function next() {
    i.value = i.value === 9 ? 0 : i.value + 1
    j.value = j.value === 9 ? 0 : j.value + 1
    k.value = k.value === 9 ? 0 : k.value + 1
  }

  function prev() {
    i.value = i.value === 0 ? 9 : i.value - 1
    j.value = j.value === 0 ? 9 : j.value - 1
    k.value = k.value === 0 ? 9 : k.value - 1
  }

  const getImage = (img) => `/src/assets/${img}`

  onMounted(() => {
    setInterval(() => {
      prev()
    }, 2000)
  })
</script>
<template>
  <div class="container">
    <div class="slider-wrapper">
      <div>
        <div class="w-screen flex">
          <img
            class="w-1/2 h-96 slide object-cover"
            :class="{ 'w-1/4': key === 0 || key === 2 }"
            v-for="(pic, key) in [images[i], images[j], images[k]]"
            :src="getImage(pic)"
            :alt="key"
          />
        </div>
      </div>

      <div class="flex justify-between absolute w-full top-32">
        <button
          id="prev-slide "
          class="bg-white p-3 rounded shadow-sm"
          @click="prev"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-20 h-20"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
            />
          </svg>
        </button>
        <button
          @click="next"
          id="next-slide"
          class="bg-white p-3 rounded shadow-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-20 h-20"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>

    <div class="slider-scrollbar">
      <div class="scrollbar-track">
        <div class="scrollbar-thumb"></div>
      </div>
    </div>

    <div style="text-align: center">
      <span class="dot" onclick="currentSlide(1)"></span>
      <span class="dot" onclick="currentSlide(2)"></span>
      <span class="dot" onclick="currentSlide(3)"></span>
    </div>
  </div>
</template>

<style>
  .slide {
    animation: slide-in 1s ease-in-out forwards;
  }
  @keyframes slide-in {
    0% {
      opacity: 0;
      transform: translateX(-100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
</style>
