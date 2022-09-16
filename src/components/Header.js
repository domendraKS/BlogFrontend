import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  Tab,
  Tabs,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";

const Header = () => {
  const dispath =useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const [value, setValue] = useState();

  return (
    <AppBar
      position="sticky"
      sx={{
        background:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(154,182,255,0.9475140397956058) 56%, rgba(0,212,255,1) 100%)",
      }}
    >
      <Toolbar>
        <Typography variant="h4">BlogsApp</Typography>

        {isLoggedIn && <Box display="flex" marginLeft={"auto"} marginRight="auto">
          <Tabs
            textColor="inherit"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={Link} to="/blogs" label="All Blogs" />
            <Tab LinkComponent={Link} to="/myBlogs" label="My BLogs" />
            <Tab LinkComponent={Link} to="/blogs/add" label="Add BLogs" />
          </Tabs>
        </Box>}

        <Box display="flex" marginLeft="auto">
          { !isLoggedIn && <> <Button
            LinkComponent={Link}
            to="/auth"
            variant="contained"
            sx={{ margin: 1, borderRadius: 10 }}
            color="warning"
          >
            Sign-In
          </Button>

          <Button
            LinkComponent={Link}
            to="/auth"
            variant="contained"
            sx={{ margin: 1, borderRadius: 10 }}
            color="warning"
          >
            Sign-Up
          </Button> </>
          }

          { isLoggedIn && <Button
          onClick={()=>dispath(authActions.logout())}
            LinkComponent={Link}
            to="/auth"
            variant="contained"
            sx={{ margin: 1, borderRadius: 10 }}
            color="warning"
          >
            Sign-out
          </Button>}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
