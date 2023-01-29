import {
  AppBar,
  CssBaseline,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import EastIcon from "@mui/icons-material/East";
import HomeIcon from "@mui/icons-material/Home";
import NorthIcon from "@mui/icons-material/North";
import WorkIcon from "@mui/icons-material/Work";
import React from "react";
import { Link } from "react-router-dom";
import navlogo from "../assets/linkedout logo navbar.png";
import "../styles/components/navbar.css";
import DrawerComponent from "./Drawer";



function Navbar({}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div data-testid='navbar-1'>
    <AppBar position="static" style={{ background: "#BDBABA" }}>
      <CssBaseline />
      <Toolbar>
        <img className="logo" src={navlogo} alt="LinkedOut" />
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <span className="navlinks">
            <Link to="/" className="link">
              Home <HomeIcon className="icon" sx={{ color: "#9606D9" }} />
            </Link>
            <Link to="/Jobs" className="link">
              Jobs <WorkIcon className="icon" sx={{ color: "#9606D9" }} />
            </Link>
            <Link to="/UserProfile" className="link">
              Login <EastIcon className="icon" sx={{ color: "#9606D9" }} />
            </Link>
            <Link to="/Signup" className="link">
              Signup <NorthIcon className="icon" sx={{ color: "#9606D9" }} />
            </Link>
          </span>
        )}
      </Toolbar>
    </AppBar>
    </div>
  );
}
export default Navbar;
