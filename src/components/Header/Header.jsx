import React, {useState} from "react";
import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-light.svg";
import "./Styles.css";
import { useTranslation } from "react-i18next";
import { useLang } from '../../context/language'
import "./s.scss";

const Header = (props) => {
  const { t, i18n } = useTranslation();
  const [setLang] = useLang(true)
  function handleClick(lang) {
    i18n.changeLanguage(lang);
    setLang(lang)
  }

  const [activeToggle,setActiveToggle] = useState('')
   
  return (
    <Navbar className={props.position} expand="lg">
      <Container>
        <Link to="/">
          <Navbar.Brand >
            <img src={logo} alt="logo" />
          </Navbar.Brand>
        </Link>
        {/* <div className="toogleBox" aria-controls="basic-navbar-nav" ><img src={toogleIcon} className="toogleMenuIcon"/></div> */}
        <div id="toggle" className={activeToggle} onClick={()=>setActiveToggle(activeToggle === ''? 'activeClass': '')}></div>
        <Navbar.Collapse id="basic-navbar-nav" className={activeToggle}>
          <Nav className="me-auto menuNav" >

            <NavDropdown 
              title={t("Menu.company")}
              className="navLinkDropdown"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item as={Link} className="navDrop" to="/about">
              {t("Menu.aboutCompany")}
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} className="navDrop" to="/worker">
              {t("Menu.ourWorkers")}
              </NavDropdown.Item>
              
              <NavDropdown.Item as={Link} className="navDrop" to="/certificate">
              {t("Menu.certificate")}
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} className="navDrop" to="/licence">
              {t("Menu.licence")}
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown 
              title={t("Menu.services")}
              className="navLinkDropdown"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item as={Link} className="navDrop" to="/repairs">
              {t("Menu.buildingWork")}
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} className="navDrop" to="/services">
              {t("Menu.MachineService")}
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} className="navLink" to="/news">
            {t("Menu.news")}
            </Nav.Link>
            <Nav.Link as={Link} className="navLink" to="/projects">
            {t("Menu.projects")}
            </Nav.Link>
            <Nav.Link as={Link} className="navLink" to="/contacts">
            {t("Menu.contact_inf")}
            </Nav.Link>

            <Nav.Link as={Link} className="navLink" to="/corruption">
            {t("Menu.corruption")}
            </Nav.Link>
          
          </Nav>

          <Nav className="langNav">
            <Button
              onClick={() => handleClick("ru")}
              className="navLink langAtribute"
            >
              RU
            </Button>
            <span className="slash">/</span>
            <Button
              onClick={() => handleClick("uz")}
              className="navLink langAtribute"
            >
              UZ
            </Button>
          </Nav>

          <div className="callButton">
            <FaPhoneAlt className="phoneIcon" />
            <a href="tel:+998997972785" className="phoneNamber">
              +998 (99) 797-27-85
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
};

export default Header;
