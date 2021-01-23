<template>
  <div class="notes">
    <div
        class="note"
        :class="[{full: !grid,}, note.priority]"
        v-for="(note, index) in notes"
        :key="index"
    >
      <div class="note-header">
        <input
            :ref="'note-header__input_' + index"
            class="note-header__input"
            v-if="items[index]"
            type="text"
            @keydown="changeTitle($event, index)"
            :value="newTitle[index]"
        >
        <p
            @click="db(index)"
            v-else
        >
          {{ note.title }}
        </p>

        <button class="note-delete" @click="removeNote(index)">X</button>
      </div>
      <div class="note-body">
        <p>{{ note.descr }}</p>
        <span>{{ note.date }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Notes",
  props: {
    notes: {
      type: Array,
      required: true
    },
    grid: {
      type: Boolean,
      required: true
    },
  },
  data () {
    return {
      items: Array(this.notes.length).fill(false),
      newTitle: []
    }
  },
  methods: {
    removeNote (index) {
      console.log(this.items);
      this.$emit('remove', index);
    },
    db (index) {
      this.newTitle[index] = this.notes[index].title;
      this.$set(this.items, index, true);
      this.$nextTick(() => {
        this.$refs['note-header__input_' + index][0].focus();
      });
    },
    changeTitle(event, index) {
      const val = event.target.value;
      if (event.key === 'Enter' || event.key === 'Tab') {
        this.notes[index].title = val;
        this.$set(this.items, index, false);
      } else if (event.key === 'Escape') {
        this.$set(this.items, index, false);
      }
    }
  }
}
</script>

<style lang="sass">
.notes
  display: flex
  align-items: center
  justify-content: space-between
  flex-wrap: wrap
  padding: 40px 0
.note
  width: 49%
  padding: 18px 20px
  margin-bottom: 20px
  background-color: #ffffff
  -webkit-box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.2)
  -moz-box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.2)
  box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.2)
  transition: 0.22s ease-in
  &.full
    width: 100%
  &:hover
    -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2)
    -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2)
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2)
  &.primary
    background-color: rgba(#7bd782, 0.3)
  &.secondary
    background-color: rgba(#ffd700, 0.3)
  &.absolute
    background-color: rgba(#ff2828, 0.3)
.note-header
  display: flex
  align-items: center
  justify-content: space-between
  transition: 0.22s ease-in
  p
    color: #402caf
    font-size: 22px
  &__input
    margin: 0
    padding: 4px 10px 3px
.note-body
  p
    margin: 20px 0
  span
    font-size: 14px
    color: #999999
.note-delete
  cursor: pointer
  border: none
  background-color: transparent
  outline: none
  &:hover
    color: #f13c3c
</style>