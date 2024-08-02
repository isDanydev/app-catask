import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
interface Task {
  id: string;
  name: string;
  task: string;
  date: string;
  description: string;
}

interface TaskFormProps {
  addTask: (task: Task) => void; // Función para agregar la tarea
}

const FormTask: React.FC<TaskFormProps> = ({ addTask }) => {
  const [newTask, setNewTask] = useState<Task>({
    id: "",
    name: "",
    task: "",
    date: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTask(newTask);

    setNewTask({ name: "", task: "", date: "", description: "", id: uuidv4() });
    console.log(newTask);
  };

  return (
    <section className=" h-full p-5 flex flex-col justify-center items-center gap-2">
      <h2 className="text-4xl font-bold text-center uppercase text-pink-400 bg-white rounded-full px-5 py-3">
        Registra la tarea
      </h2>
      <form className="grid grid-cols-3 gap-5 mt-5" onSubmit={handleSubmit}>
        <div>
          <h3 className="text-white text-center text-lg font-semibold tracking-wide">
            Nombre del gato
          </h3>
          <input
            value={newTask.name}
            onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
            type="text"
            className="border-2 border-pink-400 rounded-lg px-5 py-3 w-full"
            placeholder="Ingrese nombre del gato"
          />
        </div>
        <div>
          <h3 className="text-white text-center text-lg font-semibold tracking-wide">
            Nombre de la tarea
          </h3>
          <input
            value={newTask.task}
            onChange={(e) => setNewTask({ ...newTask, task: e.target.value })}
            type="text"
            className="border-2 border-pink-400 rounded-lg px-5 py-3 w-full"
            placeholder="Ingrese el nombre de la tarea"
          />
        </div>
        <div>
          <h3 className="text-white text-center text-lg font-semibold tracking-wide">
            Fecha de la tarea
          </h3>
          <input
            value={newTask.date}
            onChange={(e) => setNewTask({ ...newTask, date: e.target.value })}
            type="date"
            className="border-2 border-pink-400 rounded-lg px-5 py-3 w-full"
            placeholder="Ingrese la fecha de la tarea"
          />
        </div>
        <div className="col-span-3">
          <h3 className="text-white text-center text-lg font-semibold tracking-wide">
            Descripcion de la tarea
          </h3>
          <textarea
            value={newTask.description}
            onChange={(e) =>
              setNewTask({ ...newTask, description: e.target.value })
            }
            rows={5}
            className="border-2 border-pink-400 rounded-lg px-5 py-3 w-full"
            placeholder="Ingrese la descripcion de la tarea"
          />
        </div>
        <button
          type="submit"
          className="text-xl font-bold text-center uppercase text-pink-400 bg-white hover:bg-slate-100 rounded-full px-5 py-3 hover:scale-105"
        >
          Agregar tarea
        </button>
      </form>
    </section>
  );
};
export default FormTask;
