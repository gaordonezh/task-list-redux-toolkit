import React, { useEffect } from "react";
import Page from "components/Page";
import { useDispatch } from "react-redux";
import { fetchAllTasks } from "store/slices/tasks";
import Tasks from "./Tasks";
import Create from "./Tasks/Create";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTasks());
  }, []);

  return (
    <Page title="Lista de tareas">
      <Tasks />
      <Create />
    </Page>
  );
};

export default Home;
