import { Drawer, Card, CardHeader, CardContent, CardActions, TextField, Stack, Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setClose } from "store/slices/modal";
import { useEffect, useState } from "react";
import { LoadingButton } from "@mui/lab";
import { updateTask } from "store/slices/tasks";

const color = { PENDING: "info", IN_PROCESS: "warning", DONE: "success" };
const translate = { PENDING: "PENDIENTE", IN_PROCESS: "EN PROCESO", DONE: "FINALIZADO" };

const ModalTask = () => {
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const { description, name, status } = modal.data;
  const [info, setInfo] = useState({});

  useEffect(() => {
    setInfo({ description, name, status });
    // eslint-disable-next-line
  }, [modal.data]);

  const handleChange = (key, newValue) => setInfo({ ...info, [key]: newValue });

  const handleClose = () => dispatch(setClose());

  const handleUpdate = () => {
    updateTask(info, modal.data._id, dispatch);
    handleClose();
  };

  return (
    <Drawer open={modal.open} anchor="right" onClose={handleClose}>
      <Alert variant="filled" severity={color[status]} sx={{ borderRadius: 0 }}>
        {translate[status]}
      </Alert>
      <Card sx={{ width: 350, height: "100%", borderRadius: 0 }}>
        <CardHeader title={name} subheader={description} />
        <CardContent>
          <Stack spacing={3}>
            <TextField
              label="Tarea"
              fullWidth
              variant="outlined"
              value={info.name}
              onChange={(event) => handleChange("name", event.target.value)}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="Descripción"
              fullWidth
              multiline
              variant="outlined"
              value={info.description}
              onChange={(event) => handleChange("description", event.target.value)}
              InputLabelProps={{ shrink: true }}
              minRows={4}
            />
          </Stack>
        </CardContent>
        <CardActions>
          <LoadingButton onClick={handleClose} variant="outlined" fullWidth size="large" color="error">
            CANCELAR
          </LoadingButton>
          <LoadingButton onClick={handleUpdate} variant="contained" fullWidth size="large">
            ACTUALIZAR
          </LoadingButton>
        </CardActions>
      </Card>
    </Drawer>
  );
};

export default ModalTask;
