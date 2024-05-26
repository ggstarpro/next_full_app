import { Task } from "@/app/api/tasks/route";

const getTasks = async () => {
  const response = await fetch(`${process.env.BASE_URL}/api/tasks`, {
    method: "GET",
    // キャッシュを利用したくない場合
    cache: "no-store",
  });

  return await response.json();
}
const TaskPage = async () => {
  const tasks = (await getTasks()).tasks as Task[]

  return (
    <div>
      <div>task page</div>
      {tasks.map((task) => (
        <div key={task.id}>{task.name}</div>
      ))}
    </div>
  )
}

export default TaskPage