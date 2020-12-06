<template>
  <section class="project-content">
    <div class="illustration">
      <img src="./../../assets/images/movieQuizzReact.png" alt="" />
    </div>
    <div class="description">
      <div class="subtitle is-white">
        The Quizz App - The Ultimate staturday night fun (in React Native)
      </div>
      <div class="link-wrapper">
        <a href="https://play.google.com/store/apps/details?id=com.quizzy.quizz"
          >Link to the movie quiz App</a
        >
        <a href="https://play.google.com/store/apps/details?id=com.quizzy.sport"
          >Link to the sport quiz App</a
        >
      </div>

      <div class="text">
        <p>
          As you might notice now, I really do love to code Quiz app on my spare
          time. This time, I decided to re write my existing quiz app in React
          native (which was first written in native-script).
        </p>
        <br />
        <p>
          But WHY ? Well, because back in the days, I was starting a new
          position at GUTS Tickets and React native is part of their teck stack.
          I needed a project to learn and I had this idea of making a quiz
          template app on different topics.
        </p>
        <br />
        <p>
          I managed to ship 2 versions of the same quiz app and monetize this with ads, which was really
          satsifying.
        </p>
      </div>
      <div class="tech-stack">
        <span class="is-success">React native</span>
        <span class="is-success">Google admob</span>
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
    justify-content: center;
  }
  @media (min-width: $tablet) {
    margin-right: 1rem;
  }
}

.link-wrapper {
  display: flex;
  flex-direction: column;
}
</style>
