<template>
  <div id="app">
    <h1>Random User</h1>
    <div class="person" v-for="person in persons"> 
      <div class="left">
        <img :src="person.picture.large">
      </div>
      <div class="right">
        <p>{{ person.name.first }} {{ person.name.last }}</p>
        <ul>
          <!-- <li>
            <strong>Birthday:</strong>
            {{ formatDate(person.dob) }}
          </li> -->
          <li class="text-capitalize">
            <strong>Location:</strong>
            {{ person.location.city }}, {{ person.location.state }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'app',
  data () {
    return {
      persons: []
    }
  },
  methods: {
    getInitialUsers () {
      for (var i = 0; i < 5; i++) {
        axios.get(`https://randomuser.me/api/`)
          .then(response => {
            this.persons.push(response.data.results[0]);
          });
      }
    },
    scroll (person) {
      window.onscroll = () => {
        let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;

        if (bottomOfWindow) {
          axios.get(`https://randomuser.me/api/`)
            .then(response => {
              person.push(response.data.results[0]);
            })
        }
      }
    }
  },
  beforeMount() {
    this.getInitialUsers();
  },
  mounted() {
    this.scroll(this.person);
  }
}
</script>

<style lang="scss">
 .person {
    background: #ccc;
    border-radius: 2px;
    width: 20%;
    margin: 0 auto 15px auto;
    padding: 15px;

    img {
      width: 100%;
      height: auto;
      border-radius: 2px;
    }

    p:first-child {
      text-transform: capitalize;
      font-size: 2rem;
      font-weight: 900;
    }

    .text-capitalize {
      text-transform: capitalize;
    }
  }
</style>
