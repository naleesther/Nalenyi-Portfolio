<template>
  <section class="bg-white text-black py-16">
    <div
        class="container mx-auto flex flex-col md:flex-row justify-between items-center px-4"
    >

      <!-- Left Content -->
      <div class="md:w-1/2 space-y-6 text-center md:text-left">
        <h2 class="text-3xl md:text-4xl font-extrabold leading-tight">
          <span class="text-[#2C7391]">About Me</span><br>
         Software Developer
        </h2>

        <p class="text-gray-700 max-w-md mx-auto md:mx-0">
          "I’m a highly motivated and ambitious Software Developer with a strong passion for building high-quality, user-friendly digital experiences. I have hands-on experience working with technologies such as JavaScript (with React and Node.js frameworks), HTML/CSS, Python (with Django framework) and Angular. I’ve used these tools to develop responsive web applications and I’m constantly sharpening my skills through real-world projects and continuous learning. I’m driven by curiosity, creativity, and a desire to solve problems through technology. Whether it’s crafting intuitive front-end interfaces or building scalable back-end solutions, I’m eager to grow, embrace new challenges and contribute meaningfully to any team I join."
        </p>

        <!-- Years of Experience -->
        <div class="flex items-center space-x-4">
          <span class="text-4xl md:text-5xl font-extrabold text-[#2C7391]">3</span>
          <span class="font-medium text-lg">
            Years of Experience
          </span>
        </div>

        
      </div>
      <div class="md:w-1/2 mb-12 md:mb-0">
        <img src="../assets/dev.jpg" alt="wallpaper" class=" rounded-lg shadow-2xl max-w-sm mx-auto " />
      </div>


    </div>

    <!-- Progress Stats -->
    <div
        class="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mt-40 text-center"
    >
      <div>
        <div
            class="w-24 h-24 rounded-full border-4 border-[#2C7391] mx-auto flex items-center justify-center text-2xl font-bold"
        >
          95%
        </div>
        <p class="mt-2 font-medium">Frontend Development</p>
      </div>

      <div>
        <div
            class="w-24 h-24 rounded-full border-4 border-[#2C7391] mx-auto flex items-center justify-center text-2xl font-bold"
        >
          70%
        </div>
        <p class="mt-2 font-medium">Backend Development</p>
      </div>

      <div>
        <div
            class="w-24 h-24 rounded-full border-4 border-[#2C7391] mx-auto flex items-center justify-center text-2xl font-bold"
        >
          75%
        </div>
        <p class="mt-2 font-medium">Code Testing</p>
      </div>

      <div>
        <div
            class="w-24 h-24 rounded-full border-4 border-[#2C7391] mx-auto flex items-center justify-center text-2xl font-bold"
        >
          85%
        </div>
        <p class="mt-2 font-medium">Collaboration & Problem Solving</p>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
</script>
