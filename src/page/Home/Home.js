import React from "react";
import { Grid, Toolbar, Typography } from "@mui/material";
import CardUI from "../../Components/Card";

const Home = () => {
  return (
    <>
      <Toolbar sx={{ flexGrow: 1 }}>
        <Typography variant="h5">HOME</Typography>
      </Toolbar>
      <section className="categories">
        <Toolbar>
          <Typography variant="p">LATEST</Typography>
          <Typography
            sx={{
              marginLeft: "1rem",
              textDecoration: "underline",
              color: "#66180d",
            }}
            variant="p"
          >
            FOLLOWING
          </Typography>
        </Toolbar>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={4}>
            <CardUI src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/affordable-watches-1575670104.jpg?crop=1.00xw:0.752xh;0,0.00962xh&resize=1200:*" />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <CardUI src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/affordable-watches-1575670104.jpg?crop=1.00xw:0.752xh;0,0.00962xh&resize=1200:*" />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <CardUI src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/affordable-watches-1575670104.jpg?crop=1.00xw:0.752xh;0,0.00962xh&resize=1200:*" />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <CardUI src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/affordable-watches-1575670104.jpg?crop=1.00xw:0.752xh;0,0.00962xh&resize=1200:*" />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <CardUI src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/affordable-watches-1575670104.jpg?crop=1.00xw:0.752xh;0,0.00962xh&resize=1200:*" />
          </Grid>
        </Grid>
      </section>
    </>
  );
};

export default Home;
