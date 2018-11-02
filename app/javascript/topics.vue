<template>
  <div>
    <h1>Topics</h1>
    <input type="text" v-model="topics.title" class="form-control" autofocus="true">
    <input type="text" v-model="topics.description" class="form-control" autofocus="true">
    <button @click="addTopic()" class="btn btn-primary">Add Topic</button>

    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Like Count</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="topic in topics" >
          <td>{{ topic.title }}</td>
          <td>{{ topic.description }}</td>
          <td>{{ topic.likes_count}}</td>
        </tr>
      </tbody>
    </table>



  </div>
</template>

<script>
export default {
  data () {
    return {
      topics: [
        { title: 1, description: "Foo", likes_count: 5 },
        { title: 2, description: "Bar", likes_count: 0 }
      ]
    }
  },

  created: function() {
    this.fetchTopics();
  },

  methods: {
    addTopic() {
       this.$http.post('topics.json', { title: this.topics.title, description: this.topics.description }, {})
      .then((res) => this.fetchTopics(), this.topic = '')
      .catch((error) => console.log('Got a problem' + error));
    },

    fetchTopics: function() {

     const resource = this.$resource('/topics.json/{ id }');
     resource.get().then(function(response){
       this.topics = response.data
     });
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
