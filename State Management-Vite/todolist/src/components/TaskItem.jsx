function TaskItem(props) {
  return (
    <div className="task">
      <p>{props.item.task}</p>
      <div className="taskFooter">
        <p>Assined to : {props.item.taskAssignedTo}</p>
        <p className={props.item.completed ? "completed" : "pending"}>
          {props.item.completed ? "completed" : "pending"}
        </p>
        <div>
          <button onClick={props.upadateTask}>Toggle</button>
          <button onClick={props.deleteTask}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default TaskItem;
