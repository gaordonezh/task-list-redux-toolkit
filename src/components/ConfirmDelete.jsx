import { Button, Dialog, DialogActions, DialogTitle, Typography } from "@mui/material";
import store from "config/firebaseStore";
import { doc, deleteDoc } from "firebase/firestore/lite";

const ConfirmDelete = ({ open, setOpen, handleRefresh, collection, id }) => {
  const handleDelete = async () => {
    await deleteDoc(doc(store, collection, id));
    handleRefresh();
    setOpen({ open: false, id: "" });
  };

  return (
    <Dialog open={open} onClose={() => setOpen({ open: false, id: "" })}>
      <DialogTitle>
        <Typography variant="h4" component="p">
          ¿Are you sure to delete this record?
        </Typography>
      </DialogTitle>
      <DialogActions>
        <Button variant="outlined" onClick={() => setOpen({ open: false, id: "" })}>
          CANCEL
        </Button>
        <Button variant="contained" onClick={handleDelete}>
          CONFIRM DELETE
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDelete;
