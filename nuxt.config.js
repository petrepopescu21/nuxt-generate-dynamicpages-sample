import axios from "axios";

module.exports = {
  mode: "universal",
  modules: ["@nuxtjs/axios"],
  generate: {
    routes: () => {
      return axios
        .get("https://jsonplaceholder.typicode.com/todos/")
        .then(res => {
          return res.data.map(item => {
            return "/" + item.id;
          });
        });
    }
  }
};
