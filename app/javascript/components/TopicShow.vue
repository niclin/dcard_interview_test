<template>
<div>
  <h1>Topic</h1>
  <p>
    <strong>Title:</strong>
    {{ topic.title }}
  </p>

  <p>
    <strong>Description:</strong>
    {{ topic.description }}
  </p>

  <p>
    <strong>Likes count:</strong>
    {{ topic.likes_count }}
  </p>

</div>
</template>

<script>
export default {
  data () {
    return {
      topic: [ { title: 'Title', description: 'Description', likes_count: 0 } ]
    }
  },

  computed: {
    currentTopicId () {
      return this.$route.params.id
    }
  },

  mounted: function() {
    this.fetchTopic();
  },

  methods: {
    fetchTopic: function() {
      const resource = this.$resource(`/topics/${this.currentTopicId}.json`);

      resource.get().then(function(response){
        this.topic = response.data
     });
    }
  }
}
</script>
