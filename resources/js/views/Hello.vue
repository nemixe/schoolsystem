<template>
  <div>
    <p>This is the Hello page s{{ test }}</p>
    <button @click="add">add</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  computed: {
    test: function () {
      return this.$store.state.test.notes
    }
  },
  methods: {
    add: function () {
      // this.$store.commit('FETCH')
      axios.post('/login', {
        email: 'rafel.ami@gmail.com',
        password: '12345678',
        _token: axios.defaults.headers.common['X-CSRF-TOKEN'],
        remember: false
      })
      .then((res) => {
        if(res.status === 200) window.location.href = '/'
      })
    }
  }
}
</script>