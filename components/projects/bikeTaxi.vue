<template>
  <section class="project-content">
    <div class="illustration">
      <img src="./../../assets/images/biketaxi.png" alt="" />
    </div>
    <div class="description">
      <div class="subtitle is-white">Bike Taxi - The Amsterdam experience</div>
      <a href="https://biketaxi-37498.ew.r.appspot.com/">biketaxi.com</a>
      <div class="text">
        <p>
          This project allow customers to book a Bike taxi for a city ride. The
          user can create an account, book a ride with a departure and arrival
          point on the map. When a customer send a request, a message is
          automatically sent on a slack group where one driver can pick it up
          and contact the customer.
        </p>
        <br />
        <p>
          This project has very cool feature such has, slack integration,
          automatic email sending, Google map integration, itineraire
          calculation
        </p>
        <br />
        <p>
          This project has never been really used by customers since Coronna
          striked just before it was released. Account creation is disabled for
          now.
        </p>
      </div>
      <div class="tech-stack">
        <span class="is-success">NuxtJS</span>
        <span class="is-success">Express</span>
        <span class="is-success">Google map API</span>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.project-content {
  @media (min-width: $tablet) {
    display: flex;
  }
}

.description {
  flex-basis: 69%;
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
  @media (min-width: $tablet) {
    margin-right: 1rem;
  }
}
</style>
