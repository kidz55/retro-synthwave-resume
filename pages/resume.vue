<template>
  <div class="resume  nes-container is-dark with-title">
    <p class="title">Curriculum Vitae</p>
    <p>
      I've been a Fullstack developer for 5 years now. I love building and
      maintaining products. I mostly work with start-ups.
    </p>
    <br />
    <a href="https://drive.google.com/file/d/1yIl2uhzC21gtL3mHy_eoZsauaK7hHZIn/view?usp=sharing" download="">Download the PDF</a>
    <div class="content">
      <guts class="exp" />
      <pictarine class="exp" />
      <viveris class="exp" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.exp {
  margin: 2rem 0;
  padding-bottom: 2rem;
  border-bottom: 1px solid $border;
}
</style>
