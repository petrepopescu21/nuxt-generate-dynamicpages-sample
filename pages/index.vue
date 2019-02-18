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
  asyncData: async ({ $axios }) => {
    var response = await $axios.get(
      "https://jsonplaceholder.typicode.com/todos/"
    );
    return {
      todos: response.data
    };
  }
};
</script>
