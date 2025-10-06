<script setup>
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
import Projects from "./components/Projects.vue";
</script>

<template>
  <Header />
  <section id="about">
    <Hero/>
  </section>
  <section id="services">
    <Services/>
  </section>
  <section id="work">
    <Projects/>

  </section>
  <section id="contact">
    <Contact/>

  </section>
  <Footer/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
