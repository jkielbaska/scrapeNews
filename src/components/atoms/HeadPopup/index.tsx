import Button from "@mui/material/Button";
import { ToastContainer, toast } from "react-toastify";
import { FormattedMessage } from "react-intl";
import "react-toastify/dist/ReactToastify.css";

export const HeadPopup = () => {
  const notify = () => toast(<FormattedMessage id="popupToast" />);

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
        <FormattedMessage id="popupButton" />
      </Button>
    </>
  );
};
