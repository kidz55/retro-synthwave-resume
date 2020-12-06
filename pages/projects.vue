<template>
  <div class="projects nes-container is-dark with-title">
    <p class="title">Projects</p>
    <Diner class="project" />
    <BikeTaxi class="project" />
    <CovidTravelRules class="project" />
    <QuizzApp class="project" />
    <BabyYoda class="project" />
    <QuizzAppReact class="project" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

.project {
  margin: 2rem 0;
  padding-bottom: 2rem;
  border-bottom: 1px solid $border;
}
</style>
