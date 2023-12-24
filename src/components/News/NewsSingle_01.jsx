import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import "swiper/swiper.min.css"
import "swiper/components/navigation/navigation.min.css"
import "./news.css"
import SwiperCore, { Navigation } from "swiper/core"
import { Link } from "react-router-dom"
import {useTranslation} from 'react-i18next';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image1 from '../../assets/media/licence_1.jpg';
import image2 from '../../assets/media/licence_3.jpg';
import image3 from '../../assets/media/licence_4.jpg';

SwiperCore.use([Navigation])

const NewsSingle_01 = () => {

  const { t } = useTranslation();

  return (
    <div className="newsContent">
      <Container>
        <div className="MainContent">
            <Card.Body className="cardBody">
              <Card.Title className="newsTitle">{t("News.title1")}</Card.Title>
              <Card.Text className="newsText">
                {t("News.text1")}
              </Card.Text>
            </Card.Body>
            <div className="newsPhoto">
              <Row>
                <Col>
                <Link to="/licence">
                   <Card.Img   src={image1} />
                </Link>
                </Col>
                <Col>
                <Link to="/licence">
                   <Card.Img   src={image2} />
                </Link>
                </Col>
                <Col>
                <Link to="/licence">
                   <Card.Img   src={image3} />
                </Link>
                </Col>
              </Row>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default NewsSingle_01
