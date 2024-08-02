import { useEffect, useState } from "react";
import ContentTask from "./components/ContentTask";
import FormTask from "./components/FormTask";
import Header from "./components/Header";

interface Task {
  id: string;
  name: string;
  task: string;
  date: string;
  description: string;
}

const App = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      return JSON.parse(storedTasks);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask: Task) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="m-auto max-w-[1200px] h-dvh flex w-full flex-col justify-center justify-items-center bg-pink-400">
      <Header />
      <FormTask addTask={addTask} />
      <ContentTask tasks={tasks} setTasks={setTasks} />
    </div>
  );
};
export default App;
