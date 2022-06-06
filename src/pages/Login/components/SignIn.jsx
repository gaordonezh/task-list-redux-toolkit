import { useState } from "react";
import { Stack, TextField, Typography, IconButton, InputAdornment } from "@mui/material";
import { VisibilityOff, Visibility, AccountBox } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import Platforms from "./Platforms";
import { useForm } from "react-hook-form";
import { signInUser } from "requests/auth";
import Notification from "components/Notification";
import StorageService from "config/StorageService";
import { SESSION_USER } from "config/session";
import { setCurrentUser } from "store/slices/user";
import { useDispatch } from "react-redux";

const SignIn = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState(false);
  const { register, handleSubmit, formState } = useForm();

  const handleLogin = async (items) => {
    try {
      setLoading(true);
      const res = await signInUser(items);
      StorageService.set(SESSION_USER, { token: res.token, user: res.user._id });
      dispatch(setCurrentUser(res.user));
      window.location.href = "/tasks";
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="sign-in-form" autoComplete="off" onSubmit={handleSubmit(handleLogin)}>
      <Stack direction="column" spacing={3} alignItems="center">
        <Typography variant="h2" component="h2" className="title">
          Iniciar Sesión
        </Typography>
        <Notification
          title="Error de autenticación..."
          message="El usuario usuario y/o contraseña no coinciden con nuestros registros."
          type="warning"
          open={error}
        />
        <TextField
          fullWidth
          label="Usuario"
          type="text"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <AccountBox />
              </InputAdornment>
            ),
          }}
          error={Boolean(formState.errors?.username ?? false)}
          {...register("username", { required: true })}
          onKeyDown={() => error && setError(false)}
        />
        <TextField
          label="Contraseña"
          fullWidth
          type={visible ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setVisible(!visible)}>{visible ? <VisibilityOff /> : <Visibility />}</IconButton>
              </InputAdornment>
            ),
          }}
          error={Boolean(formState.errors?.password ?? false)}
          {...register("password", { required: true })}
          onKeyDown={() => error && setError(false)}
        />
        <LoadingButton variant="contained" size="large" type="submit" loading={loading}>
          INGRESAR
        </LoadingButton>

        <Typography variant="body2" color="text.secondary">
          O inicia sesión con alguna de estas plataformas.
        </Typography>

        <Platforms />
      </Stack>
    </form>
  );
};

export default SignIn;
