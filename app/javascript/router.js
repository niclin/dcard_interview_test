import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import TopicIndex from './components/TopicIndex.vue';
import TopicCreate from './components/TopicCreate.vue';
import TopicShow from './components/TopicShow.vue';

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: TopicIndex, name: 'root_path' },
    { path: '/topics/new', component: TopicCreate, name: 'new_topics_path' },
    { path: '/topics/:id', component: TopicShow, name: 'topic_path' },
  ]
});

export default router;
