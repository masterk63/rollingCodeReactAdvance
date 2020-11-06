import { Row, Col } from "antd";
import React from "react";
import FormGraph from "./components/FormGraph";
import Lista from "./components/Lista";
import "antd/dist/antd.css";

function App() {
  return (
    <Row justify="space-around" align="middle" style={{ height: "100vh" }}>
      <Col span={12} style={{ padding: 16 }}>
        <Lista />
      </Col>
      <Col span={12} style={{ padding: 16 }}>
        <FormGraph />
      </Col>
    </Row>
  );
}

export default App;
