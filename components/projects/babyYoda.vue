<template>
  <section class="project-content">
    <div class="description">
      <div class="subtitle is-white">
        Baby Yoda - The Ultimate wallpaper app
      </div>
      <a
        href="https://play.google.com/store/apps/details?id=baby.yoda.wallpaper.star.wars.wallpaper.cutout.starwars/"
        >Link to playstore</a
      >
      <div class="text">
        <p>
          This project is a simple wallpaper app written in Kotlin. The goal of
          this project was to learn Kotlin and to try to make money on the poor
          baby yoda with ads. Please don't blame me
        </p>
        <br />
        <p>
          This project was really interesting for me because I experimented a
          lot to understand how the ranking works on the playstore. I played
          around with keywords, ratings bundle optimisation to get a better
          ranking and more visibility.
        </p>
      </div>
      <div class="tech-stack">
        <span class="is-success">Kotlin</span>
        <span class="is-success">Firebase</span>
        <span class="is-success">Google admob</span>
      </div>
    </div>
    <div class="illustration">
      <img src="./../../assets/images/babyYoda.png" alt="" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.project-content {
  @media (min-width: $tablet) {
    display: flex;
  }
  @media (max-width: $tablet) {
    display: flex;
    flex-direction: column-reverse;
  }
}

.description {
  flex-basis: 70%;
  @media (max-width: $tablet) {
    margin-bottom: 1rem;
  }
}

.illustration {
  flex-basis: 30%;
  @media (max-width: $tablet) {
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
  }
}
</style>
