<template>
  <div class="search-input-wrapper">
    <input :placeholder="$t('search.placeholder')" class="search-input" type="text" />
    <Icon type="search" width="24px" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.search-input-wrapper {
  display: flex;
  align-items: center;
  border: 1px solid $green;
  border-radius: $radius;
}
.search-input {
  background-color: transparent !important;
  border: none !important;

  &:focus,
  &.is-focused,
  &:active,
  &.is-active {
    border-color: $green;
    box-shadow: 0 0 0 0.125em $green;
  }
}
</style>
