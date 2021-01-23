<template>
  <div class="message">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: "Message",
  props: {
    message: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="sass" scoped>
p
  color: red
.message
  text-align: center
  padding: 20px
</style>