import CardTask from "./CardTask";

interface Task {
  id: string;
  name: string; // Each task has its own name, task, date, and description
  task: string;
  date: string;
  description: string;
}

interface ContentTaskProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>; // Add setTasks prop
}
const ContentTask = ({ tasks, setTasks }: ContentTaskProps) => {
  const deleteTask = (id: string) => {
    console.log(id);
    const newTasks = tasks.filter((task: Task) => task.id !== id);
    setTasks(newTasks);
  };

  return (
    <main className="bg-white/50 m-5 h-full p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-start gap-2 rounded-lg overflow-y-auto overflow-x-hidden">
      {tasks.map((taskCard: Task) => (
        <div
          className="bg-pink-300 flex justify-start items-center gap-3 border-solid border-4 border-white p-2 max-h-[200px] w-full relative"
          key={taskCard.id}
        >
          <CardTask
            id={taskCard.id}
            name={taskCard.name}
            task={taskCard.task}
            date={taskCard.date}
            description={taskCard.description}
            deleteTask={deleteTask}
          />
        </div>
      ))}
    </main>
  );
};
export default ContentTask;
