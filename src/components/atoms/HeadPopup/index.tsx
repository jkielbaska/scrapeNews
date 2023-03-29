import Button from "@mui/material/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const HeaderPopup = () => {
  const notify = () => toast("Największą trudnością dla mnie");

  return (
    <>
      <ToastContainer
        role="toastcontainer"
        position="top-center"
        autoClose={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="light"
      />
      <Button variant="outlined" onClick={notify}>
        open info
      </Button>
    </>
  );
};
