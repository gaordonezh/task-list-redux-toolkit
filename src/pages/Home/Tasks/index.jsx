import { List } from "@mui/material";
import React from "react";
import Done from "./Done";
import Pending from "./Pending";
import Proccess from "./Proccess";
import { useSelector } from "react-redux";
import EmptyTasks from "./EmptyTasks";

const Tasks = () => {
  const pending = useSelector((state) => state.tasks.taskList.filter((tsk) => tsk.status === "PENDING"));
  const proccess = useSelector((state) => state.tasks.taskList.filter((tsk) => tsk.status === "IN_PROCCESS"));
  const done = useSelector((state) => state.tasks.taskList.filter((tsk) => tsk.status === "DONE"));

  console.log(pending);

  return (
    <React.Fragment>
      {pending.length === 0 && proccess.length === 0 && done.length === 0 ? (
        <EmptyTasks />
      ) : (
        <List>
          <Pending list={pending} />
          <Proccess list={proccess} />
          <Done list={done} />
        </List>
      )}
    </React.Fragment>
  );
};

export default Tasks;
