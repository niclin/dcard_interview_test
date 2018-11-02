<template>
  <div>
    <h1>Topics</h1>

    <router-link to="topicCreate">Add Topic</router-link>

    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Likes</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="topic in topics" >
          <td>
            <router-link :to="{ name: 'topic_path', params: { id: topic.id } }">{{ topic.title }} </router-link>
          </td>
          <td>
            {{ topic.likes_count }}
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
      topics: []
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
