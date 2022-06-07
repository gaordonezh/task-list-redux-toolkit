import React from "react";
import { List } from "@mui/material";
import Done from "./Done";
import Pending from "./Pending";
import Proccess from "./Proccess";
import { useSelector } from "react-redux";
import EmptyTasks from "./EmptyTasks";
import ModalTask from "./ModalTask";
import BackDropComponent from "components/BackDrop";

const Tasks = () => {
  const pending = useSelector((state) => state.tasks.taskList.filter((tsk) => tsk.status === "PENDING"));
  const proccess = useSelector((state) => state.tasks.taskList.filter((tsk) => tsk.status === "IN_PROCESS"));
  const done = useSelector((state) => state.tasks.taskList.filter((tsk) => tsk.status === "DONE"));
  const loading = useSelector((state) => state.tasks.loading);

  return (
    <React.Fragment>
      <BackDropComponent loading={loading}>
        {pending.length === 0 && proccess.length === 0 && done.length === 0 ? (
          <EmptyTasks />
        ) : (
          <List>
            <Pending list={pending} />
            <Proccess list={proccess} />
            <Done list={done} />
          </List>
        )}
      </BackDropComponent>
      <ModalTask />
    </React.Fragment>
  );
};

export default Tasks;
