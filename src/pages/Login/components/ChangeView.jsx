import { Box, Button, Stack, Typography } from "@mui/material";

const ChangeView = ({ setView, view }) => {
  const handleChangeView = () => setView(!view);

  return (
    <Box className="panels-container">
      <Box className="panel left-panel">
        <Stack direction="column" spacing={0} className="content" alignItems="center">
          <Typography variant="h3" component="h3">
            ¿Eres nuevo por aquí?
          </Typography>
          <Typography variant="body1">
            Registrate para ponerte en contacto con tus amistades, familiares y mucho más...
          </Typography>
          <Button variant="outlined" color="inherit" onClick={handleChangeView}>
            REGISTRATE
          </Button>
        </Stack>
        <img src="/static/log.svg" className="image" alt="" />
      </Box>
      <Box className="panel right-panel">
        <Stack direction="column" spacing={0} className="content" alignItems="center">
          <Typography variant="h3" component="h3">
            ¿Ya tienes una cuenta?
          </Typography>
          <Typography variant="body1">
            Dale click para volver a la vista de inicio de sesión...
          </Typography>
          <Button variant="outlined" color="inherit" onClick={handleChangeView}>
            INICIAR SESIÓN
          </Button>
        </Stack>
        <img src="/static/register.svg" className="image" alt="" />
      </Box>
    </Box>
  );
};

export default ChangeView;
