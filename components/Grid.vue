<template>
  <div style="grid">
    <section class="moving-grid">
      <div class="container">
        <div class="static-lines">
          <div class="vert"></div>
          <div class="vert"></div>
          <div class="vert"></div>
          <div class="vert"></div>
          <div class="vert"></div>
          <div class="vert"></div>
          <div class="vert"></div>
          <div class="vert"></div>
          <div class="vert"></div>
          <div class="vert"></div>
          <div class="vert"></div>
          <div class="vert"></div>
          <div class="vert"></div>
          <div class="vert"></div>
          <div class="vert"></div>
          <div class="vert"></div>
          <div class="vert"></div>
          <div class="vert"></div>
          <div class="vert"></div>
          <div class="vert"></div>
        </div>
        <div class="moving-lines">
          <div class="horz"></div>
          <div class="horz"></div>
          <div class="horz"></div>
          <div class="horz"></div>
          <div class="horz"></div>
          <div class="horz"></div>
          <div class="horz"></div>
          <div class="horz"></div>
          <div class="horz"></div>
          <div class="horz"></div>
          <div class="horz"></div>
          <div class="horz"></div>
          <div class="horz"></div>
          <div class="horz"></div>
          <div class="horz"></div>
          <div class="horz"></div>
          <div class="horz"></div>
          <div class="horz"></div>
          <div class="horz"></div>
          <div class="horz"></div>
          <div class="horz"></div>
          <div class="horz"></div>
          <div class="horz"></div>
          <div class="horz"></div>
          <div class="horz"></div>
          <div class="horz"></div>
          <div class="horz"></div>
          <div class="horz"></div>
          <div class="horz"></div>
          <div class="horz"></div>
          <div class="horz"></div>
          <div class="horz"></div>
          <div class="horz"></div>
          <div class="horz"></div>
          <div class="horz"></div>
          <div class="horz"></div>
          <div class="horz"></div>
          <div class="horz"></div>
          <div class="horz"></div>
          <div class="horz"></div>
          <div class="horz"></div>
          <div class="horz"></div>
          <div class="horz"></div>
          <div class="horz"></div>
          <div class="horz"></div>
          <div class="horz"></div>
          <div class="horz"></div>
          <div class="horz"></div>
          <div class="horz"></div>
          <div class="horz"></div>
          <div class="horz"></div>
          <div class="horz"></div>
          <div class="horz"></div>
          <div class="horz"></div>
          <div class="horz"></div>
          <div class="horz"></div>
          <div class="horz"></div>
          <div class="horz"></div>
          <div class="horz"></div>
          <div class="horz"></div>
        </div>
      </div>
    </section>
    <div class="content-cont">
      <div class="text-body">
        <h1 id="title-name">
          <span id="span-title-name">KIDZ55</span>
          <h3 class="shine">Full stack dev</h3>
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Grid',
  methods: {},
  mounted() {
    $('.content-cont')
      .find('h1')
      .append(
        '<div class="shine one"></div><div class="shine two"></div><div class="shine three"></div><div class="shine four"></div><div class="shine five"></div>'
      );

    $('.text-body')
      .find('span')
      .attr(
        'text',
        $('.text-body')
          .find('span')
          .text()
      );
    $('.text-body')
      .find('span')
      .text('');
  }
};
</script>

<style lang="less">
@import 'https://fonts.googleapis.com/css?family=Damion|Work+Sans:900';

.text-outline(@h1border: 3px; @h1bordercolour: #fff;) {
  text-shadow: @h1border 0px @h1bordercolour, -@h1border 0px @h1bordercolour,
    0px @h1border @h1bordercolour, 0px -@h1border @h1bordercolour,
    @h1border @h1border @h1bordercolour, -@h1border -@h1border @h1bordercolour,
    @h1border -@h1border @h1bordercolour, -@h1border @h1border @h1bordercolour;
}
.neon-text(@color:#ee91ae;@width:1px;@outline:#fff;) {
  color: @color;
  text-shadow: @width @width @outline, -@width -@width @outline,
    -@width @width @outline, @width -@width @outline, @width 0px @outline,
    -@width 0px @outline, 0px -@width @outline, 0px @width @outline,
    0px 0px 12px @color;
}

body {
  background: linear-gradient(
    #000000 0%,
    #212938 10%,
    #ab38bc 20%,
    #121212 100%,
  );
}

h1,
h3 {
  margin: 0;
  line-height: 1;
}
h1 {
  display: inline-block;
  font-family: 'Work Sans', sans-serif;
}
h3 {
  display: inline-block;
  font-family: 'Damion', cursive;
}


.content-cont {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}
.text-body {
  position: absolute;
  top: 10%;
  display: inline-block;
  font-size: 16px;
  h1 {
    position: relative;
    text-transform: uppercase;
    font-size: 4em !important;
    z-index: 1;
    span {
      font-size: 5rem;
      color: transparent;
      background: linear-gradient(
        #000000 0%,
        #113e87 22%,
        #10cccc 50%,
        #000000 51%,
        #e21ddc 78%,
        #e21ddc 78%,
        #ffffff 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      &:before {
        content: attr(text);
      }
      &:after {
        content: attr(text);
        position: absolute;
        top: 0;
        left: 0;
        .text-outline();
        opacity: 0.2;
      }
    }
  }
  h3 {
    // positioning
    position: absolute;
    top: 70%;
    right: 20%;
    text-align: right;
    //styles
    font-size: 0.5em;
    letter-spacing: -1px;
    text-transform: capitalize;
    transform: skewY(-10deg);
    z-index: 1;
    // colours
    .neon-text();
  }
  .shine {
    position: absolute;
    width: 5px;
    height: 2px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0 0 7px 2px #fff;
    z-index: 3;
    &.one {
      top: 15%;
      left: 4%;
      animation: shine1 1000ms alternate infinite;
    }
    &.two {
      top: 55%;
      left: 20%;
      animation: shine1 1500ms alternate infinite;
    }
    &.three {
      top: 15%;
      left: 40%;
      animation: shine1 1700ms alternate infinite;
    }
    &.four {
      top: 15%;
      left: 80%;
      animation: shine1 900ms alternate infinite;
    }
    &.five {
      top: 55%;
      left: 95%;
      animation: shine1 1300ms alternate infinite;
    }
  }
}

.moving-grid {
  position: absolute;
  top: 20%;
  left: 0;
  width: 100%;
  height: 70%;
  perspective: 1000px;
  z-index: 1;
  &:before {
    content: '';
    position: absolute;
    top: 8px;
    width: 100%;
    height: 10px;
    box-shadow: -2px 0 21px -3px pink;
  }
  .container {
    position: relative;
    width: 100%;
    height: 300%;
    border: 2px solid pink;
    box-sizing: border-box;
    background-color: #010a1c;
    transform-origin: top;
    transform: rotateX(70deg) translateY(10%);
    overflow: hidden;
    .static-lines {
      display: inline-block;
      width: 100%;
      height: 100%;
      .vert {
        display: inline-block;
        height: 100%;
        width: 2px;
        background-color: pink;
        margin-left: 4.5%;
        box-shadow: 0 2px 21px pink;
      }
    }
    .moving-lines {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 300%;
      .horz {
        display: inline-block;
        width: 100%;
        height: 3px;
        margin-top: 4.8%;
        background-color: pink;
        box-shadow: 2px 0 21px pink;
        animation: lines 4000ms linear infinite;
      }
    }
  }
}
@keyframes lines {
  from {
    transform: translateY(-65px);
  }
  to {
    transform: translateY(65px);
  }
}

@keyframes shine1 {
  0% {
    transform: rotate(0) scale(0);
    opacity: 0;
  }
  50% {
    transform: rotate(360deg) scale(1);
    opacity: 1;
  }
  100% {
    transform: rotate(720deg) scale(0);
    opacity: 0;
  }
}
</style>
