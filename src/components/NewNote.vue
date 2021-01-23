<template>
  <div class="new-note">
    <label for="title">Title</label>
    <input type="text" id="title" v-model="note.title">
    <label for="descr">Description</label>
    <textarea v-model="note.descr" id="descr"></textarea>
    <priority @ChangePriority="ChangePriority" :priority="note.priority"/>
    <button class="btn btnPrimary" @click="addNote">New note</button>
  </div>
</template>

<script>

import priority from '@/components/Priority';

export default {
  name: "NewNote",
  components: {
    priority
  },
  props: {
    note: {
      type: Object,
      required: true
    },
  },
  methods: {
    ChangePriority(val) {
      this.$emit('ChangePriority', val)
    },
    addNote() {
      this.$emit('addNote', this.note)
    },

  }
}
</script>

<style lang="sass" scoped>
.new-note
  text-align: center
  padding-bottom: 20px
.btn
  margin: 20px 0
</style>