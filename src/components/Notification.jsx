import { Alert, AlertTitle, Collapse } from "@mui/material";

const Notification = ({ title, message, type, open }) => {
  return (
    <Collapse in={open}>
      <Alert severity={type} variant="filled">
        <AlertTitle>{title}</AlertTitle>
        {message}
      </Alert>
    </Collapse>
  );
};

export default Notification;
