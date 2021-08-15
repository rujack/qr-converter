import React, { useState } from "react";
import {
  Navbar,
  FormControl,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import QRCode from "qrcode.react";
import "./App.css";

const App = () => {
  const [isiText, setIsiText] = useState("Hello World!");
  const [isiTextArea, setIsiTextArea] = useState("");
  const [change, setChange] = useState(true);

  const onConvert = () => {
    if (change) {
      setChange(false);
      setIsiText("");
      setIsiTextArea("Hello World!");
    } else {
      setChange(true);
      setIsiTextArea("");
      setIsiText("Hello World!");
    }
  };

  const onImageDownload = () => {
    const svg = document.getElementById("QRCode");
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.download = "QR Converter";
      downloadLink.href = `${pngFile}`;
      downloadLink.click();
    };
    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
  };

  return (
    <div className="main-content">
      <Navbar bg="primary" variant="dark" className="text-center text-white">
        <h4 className="text-center w-100">
          <span className="text-danger font-weight-bolder">Q</span>
          <span className="font-weight-bolder">R</span> Converter
        </h4>
      </Navbar>
      <Container className="my-4">
        <Button variant="primary " className="px-4" onClick={onConvert}>
          Change Input <i className="fas fa-retweet"></i>
        </Button>

        {change ? (
          <FormControl
            className="my-3"
            placeholder="Text or URL"
            value={isiText}
            onChange={(e) => setIsiText(e.target.value)}
          />
        ) : (
          <FormControl
            className="my-3"
            as="textarea"
            placeholder="Text or Paragraft"
            value={isiTextArea}
            onChange={(e) => setIsiTextArea(e.target.value)}
          />
        )}
        <Container className="text-center">
          <Row xs="1" sm="1" md="1" lg="1" xl="1">
            <Col className="mt-2 mb-4">
              <QRCode
                id="QRCode"
                value={isiText || isiTextArea}
                size={250}
                bgColor={"#ffffff"}
                fgColor={"#000000"}
                level={"L"}
                includeMargin={false}
                renderAs={"svg"}
              />
            </Col>
            <Col>
              <Button variant="outline-primary" className="px-4" size="lg" onClick={onImageDownload}>
                Download <i class="fas fa-download"></i>
              </Button>
            </Col>
          </Row>
        </Container>
      </Container>
      <div className="mt-auto">
        <Navbar bg="secondary" className="p-2">
          <Navbar.Text className="text-center w-100 text-black-50">
            Made with <i className="fas fa-heart"></i> in bedroom
          </Navbar.Text>
        </Navbar>
      </div>
    </div>
  );
};

export default App;
