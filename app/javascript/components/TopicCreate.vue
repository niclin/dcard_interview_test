<template>
  <div>
    <h1>Add New Topics</h1>
    <input type="text" v-model="topics.title" class="form-control" autofocus="true">
    <input type="text" v-model="topics.description" class="form-control" autofocus="true">
    <button @click="addTopic()" class="btn btn-primary">Add Topic</button>

  </div>
</template>

<script>
export default {
  data () {
    return {
      topics: []
    }
  },

  methods: {
    addTopic () {
       this.$http.post('topics.json', { title: this.topics.title, description: this.topics.description }, {})
      .then((res) => this.topic = '', this.$router.push("/"))
      .catch((error) => console.log('Got a problem' + error));
    },

  }
}
</script>
