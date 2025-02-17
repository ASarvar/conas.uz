import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { projectPhotos } from "./photos"; // Store all project images in a single file

const SingleProject = () => {
  const { t } = useTranslation();
  const { projectId } = useParams(); // Get project ID from URL parameter
  console.log(projectId);

  const photos = projectPhotos[projectId] || []; // Fetch images dynamically based on projectId

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
            <div className="tagLine">{t(`Projects.${projectId}`)}</div>
          </div>
        </Col>
      </Row>
      <Row>
        <div className="photoGallery">
          <Gallery photos={photos} onClick={openLightbox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={photos.map((x) => ({
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

export default SingleProject;
