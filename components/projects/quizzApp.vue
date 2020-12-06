<template>
  <section class="project-content">
    <div class="illustration">
      <img src="./../../assets/images/movieQuizz.png" alt="" />
    </div>
    <div class="description">
      <div class="subtitle is-white">
        The Quizz App - The Ultimate saturday night fun
      </div>
      <a href="https://play.google.com/store/apps/details?id=com.quizzy.quizz"
        >Link to playstore</a
      >

      <div class="text">
        <p>
          This project is a movie quizz app. It is written in native-script /
          VueJS. The quizz data is provided by a third party Trivia API
          (opentdb.com). The player can have so much fun doing movie quizzes
        </p>
        <br />
        <p>
          I did this simple project because I wanted to discover how native
          script with VueJS works. My conclusion is that you are still limited
          by the framework in term of component styling and animation. The VueJS
          wrapper is also barely used by the comuninity. it is sometimes hard to
          find answers.
        </p>
      </div>
      <div class="tech-stack">
        <span class="is-success">Native script</span>
        <span class="is-success">VueJS</span>
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
  @media (max-width: $tablet) {
    margin-bottom: 1rem;
    justify-content: center;

  }
  @media (min-width: $tablet) {
    margin-right: 1rem;
  }
}
</style>
