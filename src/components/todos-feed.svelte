<script>
  import TodoNew from "./todo-new.svelte";
  import TodoBlock from "./todo-block.svelte";
  import { firestore } from "firebase/app";
  import { collectionData } from "rxfire/firestore";
  import "firebase/firestore";

  const todosRef = firestore().collection("todos");

  const subscription = collectionData(todosRef, "createdAt").subscribe(
    (collection) => (todos = collection)
  );

  $: todos = [];
</script>

<div class="wrapper">
  <TodoNew />
  <ul>
    {#each todos as todo (todo.createdAt)}
      <li>
        <TodoBlock bind:body={todo.body} />
      </li>
    {/each}
  </ul>
</div>

<style>
.wrapper{
  width: 500px;
}
</style>
