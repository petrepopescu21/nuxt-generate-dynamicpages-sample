<template>
  <div>
    <h1>Welcome!</h1>
    <p v-for="todo in todos" v-bind:key="todo.id">
      <NLink :to="`/${todo.id}`"> {{ todo.title }} </NLink>
    </p>
  </div>
</template>

<script>
export default {
  head: {
    title: "Home page"
  },
  asyncData({ $axios }) {
    return $axios
      .get("https://jsonplaceholder.typicode.com/todos/")
      .then(res => {
        return { todos: res.data };
      });
  }
};
</script>
