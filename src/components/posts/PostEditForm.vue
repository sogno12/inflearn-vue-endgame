<template>
  <div class="contents">
    <h1 class="page-header">Edit Post</h1>
    <div class="form-wrapper">
      <div class="form">
        <form class="form" @submit.prevent="submitForm">
          <div>
            <label for="title">Title: </label>
            <input id="title" type="text" v-model="title" />
          </div>
          <div>
            <label for="contents">Content: </label>
            <textarea id="contents" type="text" rows="5" v-model="contents" />
            <p class="validation-text" v-if="!isContentsValid">
              Contents must be less than 200
            </p>
          </div>
          <button type="submit" class="btn">Edit</button>
        </form>
        <p class="log">{{ logMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchPost, editPost } from '@/api/posts';
export default {
  data() {
    return {
      title: '',
      contents: '',
      logMessage: '',
    };
  },
  computed: {
    isContentsValid() {
      return this.contents.length <= 200;
    },
  },
  methods: {
    async submitForm() {
      const id = this.$route.params.id;
      try {
        await editPost(id, {
          title: this.title,
          contents: this.contents,
        });
        this.$router.push('/main');
      } catch (error) {
        console.log(error);
        this.logMessage = error;
      }
    },
  },
  async created() {
    const id = this.$route.params.id;
    const { data } = await fetchPost(id);
    // console.log(data);
    this.title = data.title;
    this.contents = data.contents;
  },
};
</script>

<style scope>
.form-wrapper.form {
  width: 100%;
}
.btn {
  color: white;
}
.validation-text {
  font-weight: 500;
  color: red;
}
</style>
