<template>
  <section class="project-content">
    <div class="description">
      <div class="subtitle is-white">Diner - the food dating app</div>
      <a href="http://thediner.fr">thediner.fr</a>
      <div class="text">
        <p>
          The app for all the food lovers out there ! My roommate and I, we’ve
          built this application on our spare time. This app geolocate you and
          let you find cookers around you, discuss with them and finally meet
          them to share a nice meal.
        </p>
        <br />
        <p>
          This app has very cool features such as, geolocation, user matching,
          instant chating, random menu generator (my favorite).
        </p>
        <br />
        <p>
          This app is built with Ionic framework and Firebase and it’s available
          on Android iOS.
        </p>
      </div>
      <div class="tech-stack">
        <span class="is-success">Ionic 2</span>
        <span class="is-success">Firebase</span>
      </div>
    </div>
    <div class="illustration">
      <img src="./../../assets/images/dinerLogo.png" alt="" />
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
  align-items: center;
  display: flex;
  @media (max-width: $tablet) {
    margin-bottom: 1rem;
    justify-content: center;
  }
}
</style>
