<script lang="typescript">
  import Todos from "./components/todos-feed.svelte";
  import "smelte/src/tailwind.css";
  import firebaseConfig from "./config/firebase";

  import { initializeApp, firestore } from "firebase/app";
  import "firebase/firestore";

  initializeApp(firebaseConfig);

</script>

<style>
  #app {
    padding: 50px;
    display: flex;
    justify-content: center;
  }
</style>

<div id="app">
  <Todos />
</div>
