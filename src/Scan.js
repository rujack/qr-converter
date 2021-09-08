import React, { useState, useRef, Fragment } from "react";
import { Container, Button, Nav } from "react-bootstrap";
import QrReader from "react-qr-reader";

const Scan = () => {
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
    console.error(err);
  };

  return (
    <Container className="my-4">
      <Nav
        variant="tabs"
        defaultActiveKey="scan-file"
        className="mb-3"
        style={{ color: "" }}>
        <Nav.Item>
          <Nav.Link
            eventKey="scan-file"
            onClick={() => {
              setChange(true) + setResult("");
            }}>
            File
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="scan-cam"
            onClick={() => {
              setChange(false) + setResult("");
            }}>
            Camera
          </Nav.Link>
        </Nav.Item>
      </Nav>
      {change ? (
        <Fragment>
          <Button
            variant="contained"
            color="secondary"
            onClick={onScanFile}
            variant="primary"
            className="mb-3">
            Upload Qr Code <i class="fas fa-upload"></i>
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
