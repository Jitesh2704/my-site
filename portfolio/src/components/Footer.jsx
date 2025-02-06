import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/coding.svg";

export const Footer = () => {
  const check = new Date();
  const year = check.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/kadiyala-jitesh/">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://github.com/Jitesh2704">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="https://leetcode.com/u/kadiyalajitesh2003/">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>Copyright &copy; {year}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
