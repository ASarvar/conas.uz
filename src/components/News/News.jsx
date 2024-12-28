import React, { useState, useEffect, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsChevronLeft, BsChevronRight, BsArrowRight } from "react-icons/bs";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./news.css";
import SwiperCore, { Navigation } from "swiper/core";
import axios from "axios";
import { Link } from "react-router-dom";
import reactHtmlParser from "react-html-parser";
import { useApi } from "../../context/api";
import { useLang } from "../../context/language.jsx";
import { useTranslation } from "react-i18next";

import Card from "react-bootstrap/Card";
import image1 from "../../assets/News/1.png";
import image2 from "../../assets/News/2.png";
import image3 from "../../assets/News/3.png";
import image4 from "../../assets/News/newyear1.png";
import image5 from "../../assets/News/14.jpg";
import image6 from "../../assets/News/navruz.jpg";
import image7 from "../../assets/News/33.jpg";
import image8 from "../../assets/News/Diploma.png";
import image9 from "../../assets/News/ru2025.jpg";
import image9uz from "../../assets/News/uz2025.jpg";

SwiperCore.use([Navigation]);

const News = () => {
  const [articles, setArticles] = useState([]);
  const { t } = useTranslation();
  const [api] = useApi();
  const [lang] = useLang();
  async function getArticles(api) {
    const articleRes = await axios.get(api + "/articles");
    setArticles(articleRes.data);
  }

  useEffect(() => {
    getArticles(api);
  }, [api]);

  function renderList(articles) {
    return articles.map((article, i) => (
      <Fragment key={i}>
        <SwiperSlide key={i}>
          <div className="CartItem">
            <div className="cartImageBox">
              <img
                src={api + "/images/" + article.newsImage}
                className="imageSection2"
                alt={article.title}
              />
            </div>

            <h4 className="title">
              {article && article.title.length >= 50
                ? lang === "uz"
                  ? article.title.substring(0, 50) + "..."
                  : article.titleRu.substring(0, 50) + "..."
                : lang === "uz"
                ? article.title
                : article.titleRu}
            </h4>
            <div className="desc">
              {article.markdown.length >= 150
                ? reactHtmlParser(
                    lang === "uz"
                      ? article.markdown.substring(0, 150) + "..."
                      : article.markdownRu.substring(0, 150) + "..."
                  )
                : reactHtmlParser(
                    lang === "uz" ? article.markdown : article.markdownRu
                  )}
            </div>

            <hr />
            <div className="read-more">
              <Link to={`/articles/${article._id}`}>
                Читать дальше
                <BsArrowRight className="bsArrowRight" />
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Fragment>
    ));
  }

  return (
    <div className="newsContent">
      <Container>
        <h2 className="MainTitle">{t("News.title")}</h2>
        <hr />
        <div className="MainContent">
          <Row className="content">
            <Col>
              <div className="newsPhoto">
                <Card.Img variant="top" src={image9} />
              </div>
            </Col>
            <Col xs={9}>
              <Card.Body className="cardBody">
                <Link className="linkk" to="/news_09">
                  <Card.Title className="newsTitle">
                    {t("News.title9")}
                  </Card.Title>
                </Link>
                <Card.Text className="newsText">{t("News.text9")}</Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </div>
        <div className="MainContent">
          <Row className="content">
            <Col>
              <div className="newsPhoto">
                <Card.Img variant="top" src={image8} />
              </div>
            </Col>
            <Col xs={9}>
              <Card.Body className="cardBody">
                <Link className="linkk" to="/news_08">
                  <Card.Title className="newsTitle">
                    {t("News.title8")}
                  </Card.Title>
                </Link>
                <Card.Text className="newsText">{t("News.text8")}</Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </div>
        <div className="MainContent">
          <Row className="content">
            <Col>
              <div className="newsPhoto">
                <Card.Img variant="top" src={image7} />
              </div>
            </Col>
            <Col xs={9}>
              <Card.Body className="cardBody">
                <Link className="linkk" to="/news_07">
                  <Card.Title className="newsTitle">
                    {t("News.title7")}
                  </Card.Title>
                </Link>
                <Card.Text className="newsText">{t("News.text7")}</Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </div>
        <div className="MainContent">
          <Row className="content">
            <Col>
              <div className="newsPhoto">
                <Card.Img variant="top" src={image6} />
              </div>
            </Col>
            <Col xs={9}>
              <Card.Body className="cardBody">
                <Link className="linkk" to="/news_06">
                  <Card.Title className="newsTitle">
                    {t("News.title6")}
                  </Card.Title>
                </Link>
                <Card.Text className="newsText">{t("News.text6")}</Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </div>
        <div className="MainContent">
          <Row className="content">
            <Col>
              <div className="newsPhoto">
                <Card.Img variant="top" src={image5} />
              </div>
            </Col>
            <Col xs={9}>
              <Card.Body className="cardBody">
                <Link className="linkk" to="/news_05">
                  <Card.Title className="newsTitle">
                    {t("News.title5")}
                  </Card.Title>
                </Link>
                <Card.Text className="newsText">{t("News.text5")}</Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </div>
        <div className="MainContent">
          <Row className="content">
            <Col>
              <div className="newsPhoto">
                <Card.Img variant="top" src={image4} />
              </div>
            </Col>
            <Col xs={9}>
              <Card.Body className="cardBody">
                <Link className="linkk" to="/news_04">
                  <Card.Title className="newsTitle">
                    {t("News.title4")}
                  </Card.Title>
                </Link>
                <Card.Text className="newsText">{t("News.text4")}</Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </div>

        <div className="MainContent">
          <Row className="content">
            <Col>
              <div className="newsPhoto">
                <Card.Img variant="top" src={image3} />
              </div>
            </Col>
            <Col xs={9}>
              <Card.Body className="cardBody">
                <Link className="linkk" to="/news_03">
                  <Card.Title className="newsTitle">
                    {t("News.title3")}
                  </Card.Title>
                </Link>
                <Card.Text className="newsText">{t("News.text3")}</Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </div>

        <div className="MainContent">
          <Row className="content">
            <Col>
              <div className="newsPhoto">
                <Card.Img variant="top" src={image1} />
              </div>
            </Col>
            <Col xs={9}>
              <Card.Body className="cardBody">
                <Link className="linkk" to="/news_01">
                  <Card.Title className="newsTitle">
                    {t("News.title1")}
                  </Card.Title>
                </Link>
                <Card.Text className="newsText">{t("News.text1")}</Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </div>
        <div className="MainContent">
          <Row className="content">
            <Col>
              <div className="newsPhoto">
                <Card.Img variant="top" src={image2} />
              </div>
            </Col>
            <Col xs={9}>
              <Card.Body className="cardBody">
                <Link className="linkk" to="/news_02">
                  <Card.Title className="newsTitle">
                    {t("News.title2")}
                  </Card.Title>
                </Link>
                <Card.Text className="newsText">{t("News.text2")}</Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default News;
