import { useState } from "react";
import { Article } from "@/types/tNewsResponse";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { FormattedMessage } from "react-intl";

export const MainPopup = ({
  countryNewsUrl,
  article,
}: {
  countryNewsUrl: string;
  article: Article;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClickOpen = () => () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={handleClickOpen()}>
        <FormattedMessage id="mainPopupButton" />
      </Button>
      <Dialog
        open={isOpen}
        fullScreen
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-title">{article.title}</DialogTitle>
        <DialogContent>
          <DialogContentText
            sx={{ paddingBottom: "1px" }}
            id="dialog-description"
            tabIndex={-1}
          >
            <FormattedMessage id="mainPopupAuthors" /> {article.author}
          </DialogContentText>

          <DialogContentText
            sx={{ paddingBottom: "10px" }}
            id="dialog-description"
            tabIndex={-1}
          >
            <a href={article.url}>
              <FormattedMessage id="mainPopupLink" /> {article.url}
            </a>
          </DialogContentText>

          <iframe
            loading="lazy"
            src={`/api/scrapeWeb?url=${encodeURIComponent(countryNewsUrl)}`}
            width="100%"
            height="93%"
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>
            <FormattedMessage id="mainPopupCloseButton" />
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
