import React, { useState } from "react";
import {
  Container,
  Button,
  Carousel,
  CardGroup,
  Card,
  CardImg,
  CardTitle,
  Row,
  Col,
} from "react-bootstrap";
import "./home.css";
import Image from "react-bootstrap/Image";
import BackGround1 from "../images/back1.jpg";
import BackGround3 from "../images/backDown1.jpg";
import BackGround2 from "../images/back-3.jpg";
import image2 from "../images/img2.jpg";
import image8 from "../images/img8.jpg";
import image5 from "../images/img5.jpg";
import image6 from "../images/shopping-app.png";
import image7 from "../images/shopping-app2.png";
import image9 from "../images/img9.jpg";
import image10 from "../images/img6.jpg";
import image11 from "../images/img7.jpg";
import image12 from "../images/img4.jpg";
import c1 from "../images/s4.png";
import c2 from "../images/s3.jpg";
import c3 from "../images/s2.png";
import c4 from "../images/s1.jpg";
function Home() {
  let [like, setLike] = useState(true);

  return (
    <>
      <Container className="px-0" fluid>
        <Carousel variant="dark" fade>
          <Carousel.Item style={{ maxWidth: "100vw", maxHeight: "400px" }}>
            <img
              className="d-block w-100"
              src={BackGround1}
              alt="First slide"
            />
            <Carousel.Caption style={{ color: "#f1f2f6" }}>
              <h3>Wonder Pillars</h3>
              <h4>We Are a Digital Creative Agency.</h4>
              <Button variant="outline-light">Read More</Button>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item style={{ maxWidth: "100vw", maxHeight: "400px" }}>
            <img
              className="d-block w-100"
              src={BackGround2}
              alt="second slide"
            />

            <Carousel.Caption style={{ color: "f1f2f6" }}>
              <h3>Wonder Pillars</h3>
              <h4>We Focus On Design, Consulting, And Technology</h4>
              <Button variant="outline-dark">Read More</Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Container>
          <div
            className="text-center mt-3"
            style={{ maxWidth: 400, margin: "auto" }}
            className="text-center"
          >
            <h2>What is Happening ?</h2>
            <hr style={{ height: 2, color: "#2d3436" }} />
          </div>

          <CardGroup className="mt-4">
            <Card className="m-3">
              <Card.Img height="52%" width="100%" src={image2} />
              <Card.Body>
                <Card.Title tag="h5">Web Development</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus dignissimos eligendi tempora doloremque in obcaecati
                  incidunt necessitatibus porro nostrum ratione?
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="m-3">
              <Card.Img height="52%" width="100%" src={image8} />
              <Card.Body>
                <Card.Title tag="h5">Consulting</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus dignissimos eligendi tempora doloremque in obcaecati
                  incidunt necessitatibus porro nostrum ratione?
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="m-3">
              <Card.Img height="52%" width="100%" src={image5} />
              <Card.Title className="pt-2" tag="h5">
                Design
              </Card.Title>
              <Card.Text className="pt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                consectetur harum recusandae labore numquam temporibus iure ex
                odit perspiciatis ipsam?
              </Card.Text>
            </Card>
          </CardGroup>
        </Container>

        <section
          className="row mb-3"
          style={{
            backgroundImage: `url(${BackGround3})`,
            minHeight: 400,
            maxWidth: "100vw",
            justifyContent: "center",
            alignItem: "center",
          }}
        >
          <Container className="text-center pt-5">
            <div className="text-center text-white">
              <h1 className="pt-5">powering your Digital</h1>
              <h1>dreams, Taking Your</h1>
              <h1>Business Ahead.</h1>
              <Button
                variant="outline-light"
                color="secondary"
                className="mt-3"
              >
                Read More
              </Button>
            </div>
          </Container>
        </section>

        <Container>
          <div
            className="text-center mt-5"
            style={{ width: 400, margin: "auto" }}
          >
            <h1>Work</h1>
            <hr style={{ borderBottomColor: "black" }} />
          </div>

          <CardGroup className="text-center mt-4">
            {[{ image: image6 }, { image: image7 }, { image: image9 }].map(
              (el) => (
                <Card className="m-3">
                  <Card.Img
                    height="100%"
                    variant="top"
                    width="100%"
                    src={el.image}
                  ></Card.Img>
                  <Card.Body>
                    <Card.Text className="text-center">
                      <div className="text-center">
                        <h5 className="text-center ">
                          Works
                          <span className="material-icons mx-2">favorite</span>
                        </h5>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              )
            )}
          </CardGroup>

          <CardGroup>
            {[{ image: image10 }, { image: image11 }, { image: image12 }].map(
              (e) => (
                <Card className="m-3">
                  <Card.Img
                    height="100%"
                    width="100%"
                    variant="top"
                    src={e.image}
                  />
                  <Card.Body>
                    <Card.Text>
                      <div className="text-center">
                        <h5>
                          Works
                          <span className="material-icons mx-2">favorite</span>
                        </h5>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              )
            )}
          </CardGroup>
          <div className="text-center m-5" maxWidth="100%" margin="auto">
            <Button variant="outline-dark" className="w-50">
              Read More
            </Button>
          </div>
        </Container>

        <Container className="mt-5">
          <div
            style={{ maxWidth: 500, margin: "auto" }}
            className="text-center"
          >
            <h1>Brands & Clients</h1>
            <hr />
          </div>
        </Container>

        <Container className="text-center mt-4">
          <Row className="mb-4">
            <Col md={3}>
              <Image height="70" src={c1} fluid />
            </Col>
            <Col md={3}>
              <Image height="100" src={c2} />
            </Col>
            <Col md={3}>
              <Image height="100" src={c3} />
            </Col>
            <Col md={3}>
              <Image height="100" src={c4} />
            </Col>
          </Row>
        </Container>

        <footer
          className="mt-4"
          style={{ backgroundColor: "#2d3436", height: 190 }}
        >
          <Container className="pt-5">
            <div
              style={{ maxWidth: 500, margin: "auto" }}
              className="text-center text-white"
            >
              <h3>Our Work Process</h3>
              <hr />
            </div>
            <p className="text-center text-white">
              {" "}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Explicabo repudiandae quia nobis illum ea, quidem quasi voluptas
              saepe sunt eos quo laborum sint consequuntur eveniet provident.
            </p>
          </Container>
        </footer>
      </Container>
    </>
  );
}

export default Home;
