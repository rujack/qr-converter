import React, { useState, useRef, Fragment } from "react";
import { Container, Button, Nav } from "react-bootstrap";
import QrReader from "modern-react-qr-reader";

const Scan = () => {
  const [errorr, setErrorr] = useState("");
  const [result, setResult] = useState("");
  const [change, setChange] = useState(true);
  const qrRef = useRef(null);

  const handleErrorFile = (error) => {
    console.log(error);
  };
  const handleScanFile = (result) => {
    if (result) {
      setResult(result);
    }
  };
  const onScanFile = () => {
    qrRef.current.openImageDialog();
  };

  const handleScan = (data) => {
    if (data) {
      setResult(data);
    }
  };
  const handleError = (err) => {
    setErrorr(err.message)
    console.error(err);
  };

  const changeTab = () => {
    if (change) {
      setChange(false);
    } else {
      setChange(true);
    }
    setResult("");
  };

  return (
    <Container className="my-4">
      <Nav
        variant="tabs"
        defaultActiveKey="scan-file"
        className="mb-3"
        style={{ color: "" }}>
        <Nav.Item>
          <Nav.Link eventKey="scan-file" onClick={changeTab}>
            File
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="scan-cam" onClick={changeTab}>
            Camera
          </Nav.Link>
        </Nav.Item>
      </Nav>
      {change ? (
        <Fragment>
          <Button onClick={onScanFile} variant="primary" className="mb-3">
            Upload Qr Code <i className="fas fa-upload"></i>
          </Button>
          <div className="mx-5">
            <QrReader
              ref={qrRef}
              delay={300}
              style={{ width: "100%" }}
              onError={handleErrorFile}
              onScan={handleScanFile}
              legacyMode
            />
          </div>
        </Fragment>
      ) : (
        <div className="mx-5">
          {errorr && <p className="mb-3">{errorr}</p>}
          <QrReader
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ width: "100%" }}
          />
        </div>
      )}
      {result && (
        <h5 className="mt-3">
          Hasil : <code>{result}</code>
        </h5>
      )}
    </Container>
  );
};

export default Scan;
