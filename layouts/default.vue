<template>
  <div :class="{ 'is-active-nav': showNav }" class="app">
    <div class="app-wrapper">
      <Grid />
    </div>
    <div class="app-content">
      <NavigationBar />
      <div class="app-container">
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.$t('meta.title'),
      titleTemplate: this.$t('meta.subtitle'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('meta.description')
        },
        {
          hid: 'og-description',
          name: 'og:description',
          content: this.$t('meta.description')
        },
        {
          hid: 'og-image',
          name: 'og:image',
          content: ''
        }
      ]
    };
  },
  data() {
    return {
      showNav: false
    };
  },
  methods: {
    toggleAppClass(showNav) {
      this.showNav = showNav;
    }
  }
};
</script>

<style lang="scss">
.app-wrapper {
  position: relative;
  width: 100%;
  color: $white;
}

.app-content {
  position: absolute;
  top: 30%;
  z-index: 99;

  @media (min-width: $tablet) {
    padding: 2em 4em;
  }
  width: 100%;
  font-family: 'Press Start 2P', cursive;
}

.app-container {
  background-color: black;
  box-shadow: 0px 1px 40px 20px #ab38bc;
  padding: 0em;
  background-color: transparent;
  width: 100%;
  border: 1px solid #ab38bc;
}
</style>
