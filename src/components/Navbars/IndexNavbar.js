import React from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";
import { SiWhatsapp } from "react-icons/si";
import ReactWhatsapp from 'react-whatsapp';



function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  const url = ''
  const number = '19173271819'
  const message = 'olá esse é um teste'
  const App = () => (
    url = 'https://api.whatsapp.com/send?phone='
    + number
    + '&text='
    + encodeURIComponent(message)
  );

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            title="LRT WEB"
          >
            <img src={require('../../assets/img/logo_black.png')} />
          </NavbarBrand>

          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink
                href="/index"
              >
                <i className="nc-icon nc-book-bookmark" /> Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#more-infos"
              >
                <i className="nc-icon nc-laptop" /> Services
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                href="#contact"
              >
                <i className="nc-icon nc-chat-33" /> Contact
              </NavLink>
            </NavItem>
          
            <Button
              className="btn-round"
              color="success"
              href="https://api.whatsapp.com/send?phone=19173271819&text=Hello, I would like a quote."
              target="_blank"
            >
              <SiWhatsapp /> {" Whatsapp"}
            </Button>
         

            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.instagram.com/aspereira83/"
                target="_blank"
                title="Follow my social networks"
              >
                <i className="fa fa-instagram" />
                <p className="d-lg-none">Instagram</p>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
