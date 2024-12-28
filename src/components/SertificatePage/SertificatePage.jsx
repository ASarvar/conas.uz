import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./SertificatePage.css";
import { useTranslation } from "react-i18next";
import image1 from "../../assets/media/Milliy.png"
import image2 from "../../assets/media/ISO14001.jpg"
import image3 from "../../assets/media/ISO45001.jpg"
import image4 from "../../assets/media/ISO9001.jpg"
import Image from 'react-bootstrap/Image';

const SertificatePage = () => {
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
              {t("SertificateText.title")}
              </h1>
            </div>
            <div className="certificate">
              <Image src={image1} fluid rounded alt="" />
            </div>
            <div className="certificate">
              <Image src={image2} fluid rounded alt="" />
            </div>
            <div className="certificate">
              <Image src={image3} fluid rounded alt="" />
            </div>
            <div className="certificate">
              <Image src={image4} fluid rounded alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SertificatePage;
