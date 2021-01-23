<template>
  <div class="checkbox-block" >
    <input
        type="radio"
        id="primary"
        value="primary"
        v-model="value"
        @change="ChangePriority"
    >
    <label
        class="checkbox-block__item"
        for="primary"

    >
      primary</label>

    <input
        type="radio"
        id="secondary"
        value="secondary"
        v-model="value"
        @change="ChangePriority"
    >
    <label class="checkbox-block__item" for="secondary">secondary</label>

    <input
        type="radio"
        id="absolute"
        value="absolute"
        v-model="value"
        @change="ChangePriority"
    >
    <label class="checkbox-block__item" for="absolute">absolute</label>

  </div>
</template>

<script>
export default {
  name: "Priority",
  props: {
    priority: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      value: this.priority
    };
  },
  methods: {
    ChangePriority () {
      this.$emit('ChangePriority', this.value);
    }
  },
}
</script>

<style lang="sass" scoped>
.checkbox-block
  display: flex
  align-items: center
  input
    display: none
    &:checked + label
      background-color: #8bc34a
.checkbox-block__item
  margin: 10px 0
  display: block
  width: 33%
  padding: 18px 20px
  background-color: #ffffff
  -webkit-box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.2)
  -moz-box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.2)
  box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.2)
  transition: 0.22s ease-in
  cursor: pointer
  &:hover
    -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2)
    -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2)
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2)

</style>