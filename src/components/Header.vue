<template>
  <section class="bg-black text-white min-h-screen relative">
    <!-- Header -->
    <header class="container mx-auto flex justify-between items-center py-6 px-4">
     

      <!-- Navigation Links -->
      <nav class="hidden text-center  md:flex space-x-8 font-medium">
        <a href="#about" class="hover:text-[#2C7391]" @click.prevent="scrollTo('about')">About</a>
        <a href="#services" class="hover:text-[#2C7391]" @click.prevent="scrollTo('services')">Services</a>
        <a href="#work" class="hover:text-[#2C7391]" @click.prevent="scrollTo('work')">Work</a>
        <a href="#contact" class="hover:text-[#2C7391]" @click.prevent="scrollTo('contact')">Contact</a>
      </nav>

      <!-- Hamburger Menu (Mobile) -->
      <div class="md:hidden">
        <button @click="toggleMenu" class="focus:outline-none">
          <svg
              class="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>

    <!-- Mobile Menu -->
    <div v-if="isOpen" class="md:hidden bg-black text-white px-4 py-4 space-y-2">
      <a href="#about" class="block hover:text-[#2C7391]" @click.prevent="scrollTo('about')">About</a>
      <a href="#services" class="block hover:text-[#2C7391]" @click.prevent="scrollTo('services')">Services</a>
      <a href="#work" class="block hover:text-[#2C7391]" @click.prevent="scrollTo('work')">Work</a>
      <a href="#contact" class="block hover:text-[#2C7391]" @click.prevent="scrollTo('contact')">Contact</a>
    </div>

    <!-- Hero Section -->
    <div
        class="container mx-auto flex flex-col-reverse md:flex-row justify-between items-center py-16 px-4"
    >
      <!-- Left Text -->
      <div class="md:w-1/2 text-center md:text-left space-y-6">
        <h1 class="text-4xl md:text-5xl font-extrabold leading-tight">
          Hello👋,I'm <span class="text-[#2C7391]">Esther Nalenyi</span><br />
          Software Developer
        </h1>
        <p class="text-gray-300 max-w-md mx-auto md:mx-0">
         "Front-end to back-end, bringing ideas to life with: React, Next.js, Angular, TypeScript, Node.js, Python (Django), HTML/CSS, TailwindCss"
        </p>
        <div class="space-x-4">
          <button
              class="border border-[#2C7391] hover:bg-[#2C7391] hover:text-white font-bold text-xl text-[#2C7391] py-2 px-6 rounded-full"
              @click="downloadPdf">My Resume</button>
        </div>
      </div>

      <!-- Right Image -->
      <div class="md:w-1/2 mb-8 md:mb-0">
        <img
            src="../assets/fem-dev.jpg"
            alt="Hero"
            class="rounded-lg shadow-lg"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

// Smooth scroll to sections
const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
    isOpen.value = false; // Close mobile menu after click
  }
};
</script>
