import { Box, Button, Stack, Typography } from "@mui/material";

const ChangeView = ({ setView, view }) => {
  const handleChangeView = () => setView(!view);

  return (
    <Box className="panels-container">
      <Box className="panel left-panel">
        <Stack direction="column" spacing={7} className="content" alignItems="center">
          <Stack direction="column">
            <Typography variant="h3" component="h3" gutterBottom>
              ¿Eres nuevo por aquí?
            </Typography>
            <Typography variant="body1">Registrate para llevar un orden en tus tareas...</Typography>
          </Stack>
          <Button variant="outlined" color="inherit" onClick={handleChangeView} size="large">
            REGISTRATE
          </Button>
        </Stack>
        <img src="/static/images/log.svg" className="image" alt="Sign up svg" />
      </Box>
      <Box className="panel right-panel">
        <Stack direction="column" spacing={7} className="content" alignItems="center">
          <Stack direction="column">
            <Typography variant="h3" component="h3" gutterBottom>
              ¿Ya tienes una cuenta?
            </Typography>
            <Typography variant="body1">Dale click para volver a la vista de inicio de sesión...</Typography>
          </Stack>
          <Button variant="outlined" color="inherit" onClick={handleChangeView} size="large">
            INICIAR SESIÓN
          </Button>
        </Stack>
        <img src="/static/images/register.svg" className="image" alt="Register svg" />
      </Box>
    </Box>
  );
};

export default ChangeView;
