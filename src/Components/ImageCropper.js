import React, { useState } from "react";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70vw",
  height: "60vh",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ImageCropper({
  open,
  setOpen,
  imageURL,
  setImageURL,
  setFieldValue,
  fileName,
  fileType,
}) {
  //   const [open, setOpen] = React.useState(false);

  const handleClose = () => setOpen(false);

  const [cropper, setCropper] = useState();

  const getCropData = () => {
    if (typeof cropper !== "undefined") {
      // setImageURL(cropper.getCroppedCanvas().toDataURL());
      fetch(cropper.getCroppedCanvas().toDataURL())
        .then((res) => res.blob())
        .then((blob) => {
          const file = new File([blob], fileName, { type: fileType });
          setFieldValue("file", file);
        });
    }
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Image Cropper
          </Typography>

          <Cropper
            style={{ height: "40vh", width: "100%" }}
            zoomTo={0.5}
            initialAspectRatio={1}
            center={true}
            // preview=".img-preview"
            src={imageURL}
            viewMode={1}
            minCropBoxHeight={10}
            minCropBoxWidth={10}
            background={false}
            responsive={true}
            autoCropArea={1}
            checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
            onInitialized={(instance) => {
              setCropper(instance);
            }}
            guides={true}
          />

          <Button onClick={getCropData}>Crop Image</Button>
          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
    </div>
  );
}
