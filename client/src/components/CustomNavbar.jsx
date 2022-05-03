import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import styles from "./CustomNavbar.module.css";
import FilterListIcon from "@mui/icons-material/FilterList";

export const CustomNavbar = ({ deleteToken }) => {
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
                Home
              </Link>
            </div>
            {/* <div className={styles.linkContainer}>
              <Link to="/login" className={styles.linkchange}>
                Login
              </Link>
            </div> */}
            <div className={styles.linkContainer}>
              <FilterListIcon sx={{ color: "white" }}></FilterListIcon>
              <Link to="/account/" className={styles.linkchange}>
                Account
              </Link>
            </div>

            <div className={styles.linkchange}>
              <div onClick={() => deleteToken()}> Logout</div>
            </div>
          </Nav>
          {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>
    </div>
  );
};
