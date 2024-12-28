import React, { useState, useCallback } from 'react';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { photos_04 } from './photos';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const SingleProject_04 = () => {
  const { t } = useTranslation();

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
          <div className="mainTitles">
            {/* <div className="firstTitlePage">{t("Projects.huquqakademiya")}</div> */}
            <div className="tagLine">{t('Projects.chiller')}</div>
          </div>
        </Col>
      </Row>
      <Row>
        <div className="photoGallery">
          <Gallery photos={photos_04} onClick={openLightbox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={photos_04.map((x) => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title,
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
export default SingleProject_04;
