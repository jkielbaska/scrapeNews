import { useState, useRef, useEffect } from "react";
import { Article } from "@/types/tNewsResponse";
import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export const MainPopup = ({
  countryNewsUrl,
  article,
}: //   isPopupOpen,
{
  countryNewsUrl: string;
  article: Article;
  //   isPopupOpen: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const descriptionElementRef = useRef<HTMLElement>(null);

  const handleClickOpen = () => () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [isOpen]);

  return (
    <div>
      <Button onClick={handleClickOpen()}>See whole article</Button>
      <Dialog
        open={isOpen}
        fullScreen
        // onClose={handleClose}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-title">{article.title}</DialogTitle>
        <DialogContent>
          <DialogContentText
            sx={{ paddingBottom: "5px", overflow: "auto" }}
            id="dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <p>Authors: {article.author}</p>
            <a href={article.url}>Click here to see original article</a>
          </DialogContentText>
          <iframe
            loading="lazy"
            src={`/api/scrapeWeb?url=${encodeURIComponent(countryNewsUrl)}`}
            width="100%"
            height="93%"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>CLOSE</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

//code which is not using iframe
//   //   const scrapeIfIsOpen = async () => {
//   //     if (isOpen) {
//   //       try {
//   //         const scrapedArticle: DataScrape = await getScrapeArticleContent(
//   //           countryNewsUrl
//   //         );
//   //         return setScrapedData(scrapedArticle);

//   //         // setScrapedData(getScrapeArticleContent(countryNewsUrl));
//   //       } catch (error) {
//   //         // setScrapedData(
//   //         //   "Can't display content here. Click link below to see article on the original page"
//   //         // );
//   //         console.error(error);
//   //       }
//   //     }
//   //   };

//   const scrapeUrl = async () => {
//     if (isOpen) {
//       return await getScrapeArticleContent(countryNewsUrl);
//     }
//   };

//   useEffect(() => {
//     // if (isOpen) {
//     //   const { current: descriptionElement } = descriptionElementRef;
//     //   if (descriptionElement !== null) {
//     //     descriptionElement.focus();
//     //   }
//     // }
//     scrapeUrl();
//   }, [isOpen]);
