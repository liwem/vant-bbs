<template>
  <div>
    <h1>{{ thread.title }}</h1>
    <div>{{ thread.content }}</div>
    <div>{{ thread.user.username }}</div>

    <div v-for="comment in comments" :key="comment.id">
      {{ comment.content }}
      {{ comment.user.username }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      thread: {
        title: '',
        content: '',
        user: {
          username: '',
        },
      },
      comments: [],
      page: 1,
    };
  },
  methods: {
    getThread() {
      this.$http.get(`/threads/${this.$route.params.id}`)
        .then(resp => {
          this.thread = resp.data;
        });
    },
    getComments() {
      this.$http.get(`/comments?thread_id=${this.$route.params.id}&page=${page}`)
        .then(resp => {
          this.comments = resp.data.data;
        });
    },
  },
  created() {
    this.getThread();
    this.getComments();
  },
};
</script>
