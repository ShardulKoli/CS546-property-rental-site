import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import styles from "./CustomNavbar.module.css";
import FilterListIcon from "@mui/icons-material/FilterList";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import { Login } from "./Login";

export const CustomNavbar = ({ loginToken, setLoginToken }) => {
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand>
            <img
              src={require("../assets/logo192.png")}
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>

          {/* <Navbar.Collapse id="basic-navbar-nav"> */}
          <Nav>
            <div className={styles.linkContainer}>
              <Link to="/" className={styles.linkchange}>
                <HomeIcon
                  // sx={{ }}
                  style={{
                    color: "white",
                    marginRight: "5px",
                  }}
                ></HomeIcon>
                Home
              </Link>
            </div>
            {/* <div className={styles.linkContainer}>
              <Link to="/login" className={styles.linkchange}>
                Login
              </Link>
            </div> */}
            <div className={styles.linkContainer}>
              <Link to="/account/" className={styles.linkchange}>
                <AccountCircleIcon
                  // sx={{ }}
                  style={{
                    color: "white",
                    marginRight: "5px",
                  }}
                ></AccountCircleIcon>
                Account
              </Link>
            </div>

            <div className={styles.linkchange}>
              <Link to="/logout/" className={styles.linkchange}>
                <LogoutIcon
                  // sx={{ }}
                  style={{
                    color: "white",
                    marginRight: "2px",
                  }}
                ></LogoutIcon>
                Logout
              </Link>
            </div>
          </Nav>
          {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>
    </div>
  );
};
