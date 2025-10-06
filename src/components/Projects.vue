<template>
  <section class="bg-gray-50 py-16">
    <div class="container mx-auto px-4 text-center">
      <!-- Section Title -->
      <h2 class="text-3xl md:text-4xl font-extrabold mb-4">
        Recent <span class="text-[#2C7391]">Projects</span>
      </h2>
      
      <!-- Process Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Sketching -->
        <div class="bg-white rounded-lg shadow hover:shadow-md transition transform hover:-translate-y-1">
          <img src="../assets/Home.png" alt="design" class="rounded-t-lg w-full h-48 object-cover">
          <div class="p-6">
            <h3 class="font-bold text-lg mb-2">Clay-cast-houses</h3>
            <p class="text-gray-600 text-sm">
 Provides the client with Architectural designs, interiors, 3dimension  views and construction of the project.            </p>
          </div>
        </div>

        <!-- Designing -->
        <div class="bg-white rounded-lg shadow hover:shadow-md transition transform hover:-translate-y-1">
          <img src="../assets/phone.png" alt="spiral" class="rounded-t-lg w-full h-48 object-cover">
          <div class="p-6">
            <h3 class="font-bold text-lg mb-2">Spiral app</h3>
            <p class="text-gray-600 text-sm">
              Explore a world of spirituality, community, and enlightenment right
            at your fingertips. Elevate your daily devotion with Spiral, the
            mobile app designed to enrich your spiritual journey.
            </p>
          </div>
        </div>

        <!-- Delivering -->
        <div class="bg-white rounded-lg shadow hover:shadow-md transition transform hover:-translate-y-1">
          <img src="../assets/tasks.jpg" alt="Sending" class="rounded-t-lg w-full h-48 object-cover">
          <div class="p-6">
            <h3 class="font-bold text-lg mb-2">Task List System</h3>
            <p class="text-gray-600 text-sm">
              Task-List-System is a system that helps the supervisor to keep track of tasks assigned to the employees whether it's being done, pending or completed.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
