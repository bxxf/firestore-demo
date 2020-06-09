<script>
  import TextField from "smelte/src/components/TextField";
  import Button from "smelte/src/components/Button";
  import { firestore } from "firebase/app";
  import "firebase/firestore";

  let todoBody = "";

  const addTodo = () => {
    if(!todoBody.length) return;
    firestore().collection("todos").add({
      body: todoBody,
      createdAt: Date.now()
    });
    todoBody = "";
  };

</script>

<TextField label="Todo" bind:value={todoBody} outlined />
<Button on:click={addTodo} outlined>Add Todo</Button>
