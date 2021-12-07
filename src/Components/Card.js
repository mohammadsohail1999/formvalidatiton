import { styled } from "@mui/material/styles";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  //   CardHeader,
  CardMedia,
  Typography,
  IconButton,
  CardActions,
} from "@mui/material";
import React from "react";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatIcon from "@mui/icons-material/Chat";
import IosShareIcon from "@mui/icons-material/IosShare";

const ColorButton = styled(Button)(({ theme }) => ({
  color: "#fff",
  backgroundColor: "#66180d",
  "&:hover": {
    backgroundColor: "#fff",
    color: "#66180d",
  },
}));

const CardUI = ({ src }) => {
  return (
    <Card sx={{ boxShadow: "none" }} raised={false}>
      <CardMedia component="img" height="194" image={src} alt="image1" />
      <CardContent>
        <div className="c_wrapper">
          <div className="avt_wrapper">
            <Avatar sx={{ width: 30, height: 30 }}>H</Avatar>
            <div>
              <Typography paragraph variant="p">
                Kelly Martin
              </Typography>
              <Typography paragraph variant="caption">
                {new Date().toDateString()}
              </Typography>
            </div>
          </div>
          <ColorButton variant="contained">Follow</ColorButton>
        </div>
      </CardContent>
      <CardActions className="c_actions">
        <div>
          <IconButton>
            <ThumbUpOffAltIcon />
          </IconButton>

          <Typography variant="caption">25 Likes</Typography>
        </div>
        <div>
          <IconButton>
            <ChatIcon />
          </IconButton>

          <Typography variant="caption">10 Comments</Typography>
        </div>
        <div>
          <IconButton>
            <IosShareIcon />
          </IconButton>

          <Typography variant="caption">Share</Typography>
        </div>
      </CardActions>
    </Card>
  );
};

export default CardUI;
