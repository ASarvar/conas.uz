import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./CorruptionPage.css";
import { useTranslation } from "react-i18next";

const CorruptionPage = () => {
  const { t } = useTranslation();

  return (
    <div className="mainClass">
      <Container>
        <Row>
          <Col>
            <div className="titleText">
              <div className="verticalBox">
                <div className="vertical-line vl"></div>
              </div>
              <h4 className="secondTitlePage">CONSTRUCTION ASIA</h4>
              <h1 className="firstTitlePage">
              {t("CorruptionText.title")}
              </h1>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CorruptionPage;
