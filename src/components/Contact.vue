<template>
  <section class="bg-[#111827] text-white py-12 px-4">
    <div class="container mx-auto grid md:grid-cols-2 gap-8">
      <!-- Contact Info -->
      <div class="space-y-4">
        <h2 class="text-3xl font-extrabold">Let’s Work Together.</h2>
        <p class="text-gray-400">Want to discuss potential opportunities or collaboration? Feel free to reach out through WhatsApp or Email</p>
        <div class="space-y-2">
          <p><span class="font-bold">Phone:</span> +254 740 421847</p>
          <p><span class="font-bold">Email:</span> esthernalenyi@gmail.com</p>
          <p><span class="font-bold">Location:</span> Nairobi, Kenya</p>
        </div>
      </div>

      <!-- Contact Form -->
      <form class="space-y-4">
        <input type="text" placeholder="Your Name" class="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400" />
        <input type="email" placeholder="Your Email" class="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400" />
        <textarea placeholder="Your Message" rows="4" class="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400"></textarea>
        <button type="submit" class="bg-[#2C7391] hover:bg-[#2C7391] text-white py-3 px-6 rounded-full">
          Send Message
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
</script>
