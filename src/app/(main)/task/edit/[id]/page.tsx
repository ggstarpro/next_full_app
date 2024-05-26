const TaskEditIdPage = ({ params }: {
  // idはディレクトリ名
  params: {id: string}
}) => {
  return (
    <div>TaskEditIdPage: {params.id}</div>
  )
}

export default TaskEditIdPage