<template>
  <div class="navigation-bar">
    <nuxt-link to="/" class="nes-btn" title="">About</nuxt-link>
    <nuxt-link to="/resume" class="nes-btn" title="">CV</nuxt-link>
    <nuxt-link to="/projects" class="nes-btn" title="">Portfolio</nuxt-link>
    <nuxt-link to="/contact" class="nes-btn" title="">Contact</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar',

  methods: {}
};
</script>

<style lang="scss" scoped>
$nav-item-opacity: 0.8;

.navigation-bar {
  margin-top: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border-bottom: 2px solid rgba($green, 0.15);
  font-size: $size-medium;
}
</style>
