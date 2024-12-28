import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./licencePage.css";
import { useTranslation } from "react-i18next";
// import image1 from "../../assets/media/licence_1.jpg"
import image2 from '../../assets/media/licence_3.jpg';
import image3 from '../../assets/media/licence_4.jpg';
import image5 from '../../assets/media/licence_5.png';
import Image from 'react-bootstrap/Image';

const LicencePage = () => {
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
              {t("LicenceText.title")}
              </h1>
            </div>
            <div className="certificate">
            <h5>{t("LicenceText.licence1")}</h5>
              <Image src={image5} fluid rounded alt="" />
            </div>
            <div className="certificate">
            <h5>{t("LicenceText.licence2")}</h5>
              <Image src={image2} fluid rounded alt="" />
            </div>
            <div className="certificate">
            <h5>{t("LicenceText.licence3")}</h5>
              <Image src={image3} fluid rounded alt="" />
            </div>
            {/* <div className="certificate">
            <h5>{t("LicenceText.licence5")}</h5>
              <Image src={image5} fluid rounded alt="" />
            </div> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LicencePage;
