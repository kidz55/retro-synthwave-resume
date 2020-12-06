<template>
  <span :style="{ width: width, height: width }" class="icon">
    <component :is="icon" :fill="color" preserve-aspect-ratio="xMinYMid meet" />
  </span>
</template>

<script>
import styles from '~/assets/styles/_settings.scss';

export default {
  props: {
    type: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: false,
      default: styles.green
    },
    width: {
      type: String,
      required: false,
      default: '32px'
    }
  },
  computed: {
    icon() {
      // eslint-disable-next-line
      return () => import(`./../assets/images/icons/icon-${this.type}.svg`);
    }
  }
};
</script>

<style lang="scss" scoped>
.icon {
  display: inline-block;
  height: 0;
  position: relative;

  svg {
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
