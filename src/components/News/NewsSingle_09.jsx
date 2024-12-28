import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./news.css";
import SwiperCore, { Navigation } from "swiper/core";
import { useTranslation } from "react-i18next";
import Card from "react-bootstrap/Card";
import image1 from "../../assets/News/ru2025.jpg";
import image2 from "../../assets/News/uz2025.jpg";

SwiperCore.use([Navigation]);

const NewsSingle_09 = () => {
  const { t, i18n } = useTranslation();

  // Determine the image based on the current language
  const currentLanguage = i18n.language;
  const displayedImage =
    currentLanguage === "ru"
      ? image1
      : currentLanguage === "uz"
      ? image2
      : null;

  return (
    <div className="newsContent">
      <Container>
        <div className="MainContent">
          <Card.Body className="cardBody">
            <Card.Title className="newsTitle">{t("News.title9")}</Card.Title>
            <Card.Text className="newsText">{t("News.text9")}</Card.Text>
          </Card.Body>
          <div className="newsPhoto">
            <Row>
              <Col>
                {/* Display the selected image */}
                {displayedImage && <Card.Img src={displayedImage} />}
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NewsSingle_09;
