<template>
  <div>
    <h1>{{ todo.title }}</h1>
    <h4>by userId {{ todo.userId }}</h4>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.todo.title
    };
  },
  asyncData(ctx) {
    return ctx.$axios
      .get("https://jsonplaceholder.typicode.com/todos/" + ctx.route.params.id)
      .then(res => {
        return { todo: res.data };
      });
  }
};
</script>
