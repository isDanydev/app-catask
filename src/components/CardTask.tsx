interface Task {
  id: string;
  name: string;
  task: string;
  date: string;
  description: string;
  deleteTask: (name: string) => void;
}

const CardTask = ({ name, task, date, description, id, deleteTask }: Task) => {
  return (
    <>
      <button
        className=" size-6 absolute top-2 light-2 hover:scale-125"
        onClick={() => deleteTask(id)}
      >
        ❌
      </button>
      <img
        src="https://picsum.photos/200"
        alt="avatar"
        width={100}
        height={100}
        className="rounded-full object-cover"
      />
      <div className="flex flex-col justify-start gap-3 p-2  max-w-[80%]">
        <div className="flex justify-between items-center gap-2">
          <span className="text-slate-950 font-bold">{name}</span>
          <span className="text-black font-light italic absolute top-3 right-3">
            {date}
          </span>
        </div>
        <h4 className="text-ellipsis overflow-hidden">{task}</h4>
        <p className=" overflow-hidden text-ellipsis w-[80%] max-h-12">
          {description}
        </p>
      </div>
    </>
  );
};
export default CardTask;
