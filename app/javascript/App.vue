<template>
  <div id="topics">
    <router-view></router-view>
  </div>
</template>

<script>
  import TopicIndex from './components/TopicIndex'

  export default {
    name: 'Topic',
    components: { TopicIndex }
  }
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
