<template>
  <div>
    <h1>Add New Topics</h1>

    <div class="field">
      <label>Title</label>
      <input type="text" v-model="topics.title" class="form-control" autofocus="true">
    </div>

    <div class="field">
      <label>Description</label>
      <input type="text" v-model="topics.description" class="form-control" autofocus="true">

    </div>

    <div class="actions">
      <button @click="addTopic()" class="btn btn-primary">Add Topic</button>
    </div>

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
