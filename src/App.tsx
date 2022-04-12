import { useState } from "react";
import Container from "./components/Container";
import Header from "./components/Header";
import InputAdd from "./components/InputAdd";
import ListItem from "./components/ListItem";
import Main from "./components/Main";
import { Item } from "./types/Item";

export default function App() {
  const [list, setLista] = useState<Item[]>([
    {
      id: 1,
      name: "Exemplo Tarefa",
      done: false
    }
  ]);

  function handleAddTask(taskname: string) {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskname,
      done: false
    });
    setLista(newList);
  }

  function handleChangeTask(id: number, done: boolean) {
    let newList = [...list];
    newList.map(list => {
      if (list.id === id) {
        list.done = done;
      }
    })

    setLista(newList);
  }

  return (
    <Container>
      <Main>
        <Header titulo={"Lista de Tarefas"} />

        <InputAdd onEnter={handleAddTask} />

        {list.map(item => {
          return (
            <ListItem item={item} key={item.id} click={handleChangeTask} />
          )
        })}
      </Main>
    </Container>
  )
}