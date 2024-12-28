import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import diploma1 from "../../assets/diplomas/Diploma 1.jpg";
import diploma2 from "../../assets/diplomas/Diploma 2.jpg";
import diploma3 from "../../assets/diplomas/Diploma 3.jpg";
import diploma4 from "../../assets/diplomas/Diploma 4.jpg";
import diploma5 from "../../assets/diplomas/Diploma 5.jpg";
import "./diplomaPage.css";

const DiplomaPage = () => {
  const { t } = useTranslation();

  const diplomas = [
    { src: diploma1, width: 4, height: 3 },
    { src: diploma2, width: 4, height: 3 },
    { src: diploma3, width: 4, height: 3 },
    { src: diploma4, width: 4, height: 3 },
    { src: diploma5, width: 4, height: 3 },
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <Container>
      <Row>
        <Col>
          <div className="titleText">
            <div className="verticalBox">
              <div className="vertical-line vl"></div>
            </div>
            <h4 className="secondTitlePage">CONSTRUCTION ASIA</h4>
            <h1 className="firstTitlePage">{t("Diploma.title")}</h1>
            <h5>{t("Diploma.text1")}</h5>
          </div>
        </Col>
      </Row>
      <Row>
        <div className="photoGallery">
          <Gallery photos={diplomas} onClick={openLightbox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={diplomas.map((x) => ({
                    ...x,
                    srcset: x.srcSet,
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
      </Row>
    </Container>
  );
};

export default DiplomaPage;