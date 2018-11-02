<template>
  <div>
    <h1>Topics</h1>
    <router-link to="topics/new">Add Topic</router-link>

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
          <td>
            {{ topic.likes_count}}
            <button @click="addLike(topic.id)" class="btn btn-primary">like</button>
          </td>
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
    addLike (id) {
      this.$http.patch(`/topics/${id}/like`, {}, {})
      .then((res) => this.fetchTopics())
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
