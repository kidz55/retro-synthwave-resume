<template>
  <div>
    <nuxt-link :to="`/profile/${user.id}`">
      <img src="./../assets/images/avatar.png" alt="Avatar" class="avatar" />
    </nuxt-link>
  </div>
</template>

<script>
export default {
    props: {
        user: {
            required: true,
            type: Object,
        }
    },
};
</script>

<style lang="scss" scoped>
.avatar {
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>
