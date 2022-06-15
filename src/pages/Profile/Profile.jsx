import Page from "components/Page";
import {
  Box,
  Card,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { AvatarStyled, BoxContainerStyled, BoxInsideStyled } from "components/styled";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { LoadingButton } from "@mui/lab";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { updateUser } from "store/slices/user";
import Notification from "components/Notification";
import { updatePassword } from "requests/user";

const Profile = () => {
  const dispatch = useDispatch();
  const { background, currentUser } = useSelector((state) => state.user);
  const [pass, setPass] = useState({ current: "", new: "", confirm: "" });
  const [msg, setMsg] = useState({ loading: false, alert: false });
  const [values, setValues] = useState({
    name: currentUser.name,
    email: currentUser.email,
    username: currentUser.username,
    position: currentUser.position,
  });

  const handleChange = (key, value) => setValues({ ...values, [key]: value });
  const handleChangePass = (key, value) => setPass({ ...pass, [key]: value });

  const handleUpdateInfo = () => dispatch(updateUser(values, currentUser._id, dispatch));

  const handleUpdatePassword = async () => {
    await updatePassword({ password: pass.new });
    setMsg({ alert: false, loading: true });
    await sleep(500);
    setMsg({ alert: true, loading: false });
    await sleep(2000);
    setMsg({ alert: false, loading: false });
  };

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  return (
    <Page title="Profile">
      <Card elevation={10} sx={{ mt: 5 }}>
        <CardMedia
          component="img"
          height="300px"
          image={background ? background : "./static/images/backgroundOne.jpg"}
          title="profile header"
        />
        <Grid container>
          <Grid item xs={12} sm={12} md={3}>
            <BoxContainerStyled>
              <AvatarStyled />
              <BoxInsideStyled>
                <Stack spacing={3} direction="column">
                  <Text keygen="Name" value={currentUser.name} />
                  <Text keygen="Email" value={currentUser.email} />
                  <Text keygen="Username" value={currentUser.username} />
                  <Text keygen="Description" value={currentUser.position} />
                </Stack>
              </BoxInsideStyled>
            </BoxContainerStyled>
          </Grid>
          <Grid item xs={12} sm={12} md={9}>
            <Box p={5}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h4" component="h2">
                    My information
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <TextField
                    label="Name"
                    fullWidth
                    value={values.name}
                    onChange={(event) => handleChange("name", event.target.value)}
                  />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <TextField
                    label="Email"
                    fullWidth
                    value={values.email}
                    onChange={(event) => handleChange("email", event.target.value)}
                  />
                </Grid>
                <Grid item xs={12} md={12} lg={4}>
                  <TextField
                    label="Username"
                    fullWidth
                    value={values.username}
                    onChange={(event) => handleChange("username", event.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Description"
                    fullWidth
                    value={values.position}
                    onChange={(event) => handleChange("position", event.target.value)}
                  />
                </Grid>
                <Grid item xs={12} textAlign="right">
                  <LoadingButton variant="contained" size="large" onClick={handleUpdateInfo} loading={msg.loading}>
                    UPDATE INFORMATION
                  </LoadingButton>
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="h4" component="h2">
                    Update password
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <Password value={pass.current} onChange={(event) => handleChangePass("current", event.target.value)} />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <Password
                    label="New password"
                    value={pass.new}
                    onChange={(event) => handleChangePass("new", event.target.value)}
                  />
                </Grid>
                <Grid item xs={12} md={12} lg={4}>
                  <Password
                    label="Confirm new password"
                    value={pass.confirm}
                    onChange={(event) => handleChangePass("confirm", event.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Stack spacing={2} justifyContent="space-between" direction="row">
                    <Notification title="Your information has updated" type="success" open={msg.alert} />
                    <LoadingButton variant="contained" size="large" onClick={handleUpdatePassword} loading={msg.loading}>
                      UPDATE PASSWORD
                    </LoadingButton>
                  </Stack>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </Page>
  );
};

export default Profile;

const Text = ({ keygen, value }) => (
  <Typography>
    <Typography component="span" sx={{ fontWeight: 700 }}>
      {keygen}:{" "}
    </Typography>
    {value}
  </Typography>
);

const Password = ({ ...rest }) => {
  const [visible, setVisible] = useState(false);

  return (
    <TextField
      label="Password"
      fullWidth
      type={visible ? "text" : "password"}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={() => setVisible(!visible)}>{visible ? <VisibilityOff /> : <Visibility />}</IconButton>
          </InputAdornment>
        ),
      }}
      {...rest}
    />
  );
};
