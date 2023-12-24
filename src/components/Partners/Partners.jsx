import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./partners.css";
import { useTranslation } from "react-i18next";
import image1 from "../../assets/Partners/Project.png";
import image2 from "../../assets/Partners/isuzu.png";
import image3 from "../../assets/Partners/alutex.png";
import image4 from "../../assets/Partners/Betonstroy.png";
import image5 from "../../assets/Partners/sany.png";
import image6 from "../../assets/Partners/shacman.png";
import image7 from "../../assets/Partners/procab.png";
import image8 from "../../assets/Partners/ozshaharsozlik.png";

const Partners = () => {
  const { t } = useTranslation();

  return (
    <>
    <div className="partners-section">
      <Container >
      <Row>
            <Col>
              <div className="PartnerTexts">
                <h2 className="SectionTitle">{t("PartnerTexts.Title")}</h2>
              </div>
            </Col>
      </Row>
      
    <Row className="partners">
        {/* <Col>
          <img src={image1} className="partner_Image" alt="" />
        </Col> */}
        <Col>
          <img src={image4} className="partner_Image" alt="Beton Stroy Detall" />
        </Col>
        <Col>
          <img src={image8} className="partner_Image" alt="O'zsharsozlik liti" />
        </Col>
        <Col>
          <img src={image3} className="partner_Image" alt="Alutex" />
        </Col>
        <Col>
          <img src={image7} className="partner_Image" alt="Procap" />
        </Col>
        <Col>
          <img src={image6} className="partner_Image" alt="Shacman" />
        </Col>
        <Col>
          <img src={image2} className="partner_Image" alt="Isuzu" />
        </Col>
        <Col>
          <img src={image5} className="partner_Image" alt="Sany" />
        </Col>
      </Row>
      </Container>
      </div>
    </>
  );
};

export default Partners;
