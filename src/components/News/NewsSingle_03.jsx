import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import "swiper/swiper.min.css"
import "swiper/components/navigation/navigation.min.css"
import "./news.css"
import SwiperCore, { Navigation } from "swiper/core"
import {useTranslation} from 'react-i18next';
import Card from 'react-bootstrap/Card';
import image1 from '../../assets/News/3.png';

SwiperCore.use([Navigation])

const NewsSingle_03 = () => {

  const { t } = useTranslation();

  return (
    <div className="newsContent">
      <Container>
        <div className="MainContent">
            <Card.Body className="cardBody">
              <Card.Title className="newsTitle">{t("News.title3")}</Card.Title>
              <Card.Text className="newsText">
                {t("News.text3")}
              </Card.Text>
            </Card.Body>
            <div className="newsPhoto">
              <Row>
                <Col>
                  <Card.Img   src={image1} />
                </Col>
              </Row>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default NewsSingle_03
