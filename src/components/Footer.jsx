import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";
import "../styles/home.css";
import { Button, Modal, Navbar, Nav, Container } from "react-bootstrap";

function Footer() {
  const [show, setShow] = useState(false);

  useEffect(() => {}, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Modal size="lg" show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Contact us!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Navbar
        id="footer"
        fixed="bottom"
        bg="dark"
        variant="dark"
        className="p-1"
      >
        <Container className="col-12 justify-content-center">
          <div id="footer_container">
            <Nav>
              <ul className="list-group list-group-horizontal text-center">
                <li className="list-group-item">
                  <Button id="footer_btn" onClick={handleShow}>
                    Theme
                  </Button>
                </li>
                <li className="list-group-item">
                  <Button id="footer_btn">
                    {/**TODO: Add github link */}
                    <Link to="#" id="footer_btn">
                      Github
                    </Link>
                  </Button>
                </li>
              </ul>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default Footer;
