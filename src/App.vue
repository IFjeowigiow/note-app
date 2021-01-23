<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <section>
        <div class="container">
          <message v-if="message" :message="message"/>
          <new-note :note="note" @addNote="addNone" @ChangePriority="ChangePriority"/>
          <header class="notes-header">
            <h1>{{ title }}</h1>
            <search
                :value="search"
                placeholder="Find your note"
                @search="search = $event"
            />
            <div class="icons">
              <svg
                  :class="{active: grid}"
                  @click="grid = true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round" >
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
              <svg
                  :class="{active: !grid}"
                  @click="grid = false"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                <line x1="8" y1="6" x2="21" y2="6"></line>
                <line x1="8" y1="12" x2="21" y2="12"></line>
                <line x1="8" y1="18" x2="21" y2="18"></line>
                <line x1="3" y1="6" x2="3" y2="6"></line>
                <line x1="3" y1="12" x2="3" y2="12"></line>
                <line x1="3" y1="18" x2="3" y2="18"></line>
              </svg>


            </div>
          </header>
          <notes :notes="notesFilter" :grid="grid" @remove="removeNote"/>
        </div>
      </section>
    </div>
  </div>
</template>

<script>

import message from '@/components/Message';
import notes from '@/components/Notes';
import newNote from '@/components/NewNote';
import search from '@/components/Search';
export default {
  name: 'App',
  components: {
    message, newNote, notes, search
  },
  data () {
    return {
      title: 'Notes App',
      message: null,
      note: {
        title: '',
        descr: '',
        priority: 'primary'
      },
      search: '',
      notes: [
        {
          title: 'First Note',
          descr: 'Description for first note',
          date: new Date(Date.now()).toLocaleString(),
          priority: 'primary'
        },
        {
          title: '2 Note',
          descr: 'Description for 2 note',
          date: new Date(Date.now()).toLocaleString(),
          priority: 'secondary'
        },
        {
          title: '3 Note',
          descr: 'Description for 3 note',
          date: new Date(Date.now()).toLocaleString(),
          priority: 'absolute'
        },
      ],
      grid: true
    }
  },
  methods: {
    ChangePriority(val) {
      this.note.priority = val;
    },
    addNone() {

      const {title, descr, priority} = this.note;
      if(title === '') {
        this.message = 'title can`t be blank!';
        return false;
      }
      console.log(priority);
      this.notes.push({
        title,
        descr,
        priority,
        date: new Date(Date.now()).toLocaleString()
      });
      this.note.title = '';
      this.note.descr = '';
      this.message = null;
      this.priority = 'primary';
    },
    removeNote(index) {
      this.notes.splice(index, 1);
    }
  },
  computed: {
    notesFilter () {
      let array = this.notes;
      let search = this.search;
      if (!search) return array
      search = search.trim().toLowerCase();
      array = array.filter((item) => {
        if(item.title.toLowerCase().indexOf(search) !== -1) {
          return item;
        }
      });
      return array;
    }
  }
}
</script>

<style lang="sass">
.notes-header
  display: flex
  align-items: center
  justify-content: space-between
  svg
    margin-right: 12px
    color: #999999
    cursor: pointer
    transition: 0.2s ease-in
    &.active
      color: #402caf
    &:last-child
      margin-right: 0
  h1
    font-size: 32px
    font-weight: 400
</style>
