import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Sidebar from "../../Components/Sidebar";
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
const Dashboard = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container sx={{ height: "100vh" }}>
          <Grid item xs={2}>
            <Sidebar />
          </Grid>
          <Grid item xs={10} sx={{ height: "100vh", overflow: "auto" }}>
            <Navbar />
            <main className="main_wrapper">
              <Outlet />
            </main>
            <Footer />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Dashboard;
