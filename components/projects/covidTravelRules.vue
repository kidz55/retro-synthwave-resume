<template>
  <section class="project-content">
    <div class="description">
      <div class="subtitle is-white">
        Covid Travel Rules - The guide to travel safe
      </div>
      <a href="https://covid-travel-rules.com">covid-travel-rules.com</a>

      <div class="text">
        <p>
          The project's goal is to check the feasibility of your trip. We gather
          for you the daily up-to-date country by country information on the
          entry conditions, local travel and containment measures related to the
          coronavirus (COVID-19)
        </p>
        <br />
        <p>
          I created this app to help people who need to travel during the
          covid-19 pandemic. I found out that rules differ a lot from a country
          to another. It's really hard for someone to gather the good
          informations. I decided to create a UX frindly interface that do the
          job for them.
        </p>
      </div>
      <div class="tech-stack">
        <span class="is-success">NuxtJS</span>
        <span class="is-success">SEO</span>
      </div>
    </div>
    <div class="illustration">
      <img src="./../../assets/images/covidTravel.png" alt="" />
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
    display: flex;
    justify-content: center;
  }
}
</style>
