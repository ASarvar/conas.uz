import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./workers.css";
import "../../components/About/aboutcompany.css";
import maxmudov from "../../assets/Screenshot_4.png";
import atametov from "../../assets/Screenshot_4.jpg";
import umarov from "../../assets/Screenshot_2.jpg";
// import yoriyxonov from '../../assets/Screenshot_1.jpg';
import xurramiddin from "../../assets/Screenshot_6.png";
import ismoilov from "../../assets/Screenshot_1.png";
import artiqhujayev from "../../assets/Screenshot_2.png";
import shoyusufov from "../../assets/Screenshot_3.png";
import qodirov from "../../assets/qodirov.jpg";
import sobirov from "../../assets/Sobirov.png";
import razbekov from "../../assets/Razbekov.jpg";
import latipov from "../../assets/Latipov Raximboy.jpg";
import akkulov from "../../assets/Akkulov.png";
import tanikulov from "../../assets/Tanikulov.jpg";
import rustamov from "../../assets/Rustomov.jpg";
import turdimatov from "../../assets/Turdimatov.jpg";
import qudratov from "../../assets/Qudratov.jpg";
import vaxobov from "../../assets/Vaxobov.jpg";
import pulatov from "../../assets/Pulatov.jpg";
import xodjayev from "../../assets/Xodjayev.png";
import rayimberdiyev from "../../assets/Rayimberdiyev.png";
import nurmatov from "../../assets/Nurmatov.png";
// import qurbonov from '../../assets/media/nophoto.jpg';
import { useTranslation } from "react-i18next";

const Workers = () => {
  const { t } = useTranslation();
  const [worker, setworker] = useState("Employers.maxmudovData");
  const [photo, setPhoto] = useState(maxmudov);

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className="verticalBox">
              <div className="vertical-line  vl"></div>
            </div>
            <div className="mainTitle">
              <div className="secondTitlePage">CONSTRUCTION ASIA</div>
              <div className="firstTitlePage">{t("Menu.ourWorkers")}</div>
            </div>
          </Col>
        </Row>
        <Row id="goTop">
          <Col lg="5">
            <div className="imgDirektor">
              <img src={photo} alt="" />
            </div>
          </Col>
          <Col lg="7">
            <div className="textsWork">
              <div className="nameDirektor">{t(`${worker}.name`)}</div>
              <div className="job">{t(`${worker}.job`)}</div>
              <div className="descDir">{t(`${worker}.desc`)}</div>
            </div>
          </Col>
        </Row>
        <div className="Sotrudniki-section">
          <Row>
            <Col
              className="centerCol"
              lg="4"
              md="6"
              sm="12"
              onClick={() => setworker("Employers.maxmudovData")}
              href="#goTop n    "
            >
              <div className="WorkerCard" onClick={() => setPhoto(maxmudov)}>
                <div className="WorkerImage">
                  <img src={maxmudov} alt="" />
                </div>
                <div className="WorkerTexts">
                  <h4 className="titleName">
                    {t("Employers.maxmudovData.name")}
                  </h4>
                  <div className="jobDesc">
                    {t("Employers.maxmudovData.job")}
                  </div>
                </div>
              </div>
            </Col>

            <Col
              className="centerCol"
              lg="4"
              md="6"
              sm="12"
              onClick={() => setworker("Employers.atametovData")}
            >
              <div className="WorkerCard" onClick={() => setPhoto(atametov)}>
                <div className="WorkerImage">
                  <img src={atametov} alt="" />
                </div>
                <div className="WorkerTexts">
                  <h4 className="titleName">
                    {t("Employers.atametovData.name")}
                  </h4>
                  <div className="jobDesc">
                    {t("Employers.atametovData.job")}
                  </div>
                </div>
              </div>
            </Col>

            <Col
              className="centerCol"
              lg="4"
              md="6"
              sm="12"
              onClick={() => setworker("Employers.umarovRustamData")}
            >
              <div className="WorkerCard" onClick={() => setPhoto(umarov)}>
                <div className="WorkerImage">
                  <img src={umarov} alt="" />
                </div>
                <div className="WorkerTexts">
                  <h4 className="titleName">
                    {t("Employers.umarovRustamData.name")}
                  </h4>
                  <div className="jobDesc">
                    {t("Employers.umarovRustamData.job")}
                  </div>
                </div>
              </div>
            </Col>

            {/* <Col className="centerCol" lg="4" md="6" sm="12" onClick={() => setworker('Employers.siddiqovAbrorData')}>
              <div className="WorkerCard" onClick={() =>setPhoto(yoriyxonov)}>
                <div className="WorkerImage">
                  <img src={yoriyxonov} alt="" />
                </div>
                <div className="WorkerTexts">
                  <h4 className="titleName">{t("Employers.siddiqovAbrorData.name")}</h4>
                  <div className="jobDesc">{t("Employers.siddiqovAbrorData.job")}</div>
                </div>
              </div>
            </Col> */}

            <Col
              className="centerCol"
              lg="4"
              md="6"
              sm="12"
              onClick={() => setworker("Employers.xurramiddinData")}
            >
              <div className="WorkerCard" onClick={() => setPhoto(xurramiddin)}>
                <div className="WorkerImage">
                  <img src={xurramiddin} alt="" />
                </div>
                <div className="WorkerTexts">
                  <h4 className="titleName">
                    {t("Employers.xurramiddinData.name")}
                  </h4>
                  <div className="jobDesc">
                    {t("Employers.xurramiddinData.job")}
                  </div>
                </div>
              </div>
            </Col>

            {/* <Col className="centerCol" lg="4" md="6" sm="12" onClick={() => setworker('Employers.qurbonovData')}>
              <div className="WorkerCard" onClick={() =>setPhoto(qurbonov)}>
                <div className="WorkerImage">
                  <img src={qurbonov} alt="" />
                </div>
                <div className="WorkerTexts">
                  <h4 className="titleName">{t("Employers.qurbonovData.name")}</h4>
                  <div className="jobDesc">{t("Employers.qurbonovData.job")}</div>
                </div>
              </div>
            </Col> */}

            <Col
              className="centerCol"
              lg="4"
              md="6"
              sm="12"
              onClick={() => setworker("Employers.artiqhujayevData")}
            >
              <div
                className="WorkerCard"
                onClick={() => setPhoto(artiqhujayev)}
              >
                <div className="WorkerImage">
                  <img src={artiqhujayev} alt="" />
                </div>
                <div className="WorkerTexts">
                  <h4 className="titleName">
                    {t("Employers.artiqhujayevData.name")}
                  </h4>
                  <div className="jobDesc">
                    {t("Employers.artiqhujayevData.job")}
                  </div>
                </div>
              </div>
            </Col>
            <Col
              className="centerCol"
              lg="4"
              md="6"
              sm="12"
              onClick={() => setworker("Employers.shoyusufovData")}
            >
              <div className="WorkerCard" onClick={() => setPhoto(shoyusufov)}>
                <div className="WorkerImage">
                  <img src={shoyusufov} alt="" />
                </div>
                <div className="WorkerTexts">
                  <h4 className="titleName">
                    {t("Employers.shoyusufovData.name")}
                  </h4>
                  <div className="jobDesc">
                    {t("Employers.shoyusufovData.job")}
                  </div>
                </div>
              </div>
            </Col>

            <Col
              className="centerCol"
              lg="4"
              md="6"
              sm="12"
              onClick={() => setworker("Employers.ismoilovData")}
            >
              <div className="WorkerCard" onClick={() => setPhoto(ismoilov)}>
                <div className="WorkerImage">
                  <img src={ismoilov} alt="" />
                </div>
                <div className="WorkerTexts">
                  <h4 className="titleName">
                    {t("Employers.ismoilovData.name")}
                  </h4>
                  <div className="jobDesc">
                    {t("Employers.ismoilovData.job")}
                  </div>
                </div>
              </div>
            </Col>

            <Col
              className="centerCol"
              lg="4"
              md="6"
              sm="12"
              onClick={() => setworker("Employers.qodirovData")}
            >
              <div className="WorkerCard" onClick={() => setPhoto(qodirov)}>
                <div className="WorkerImage">
                  <img src={qodirov} alt="" />
                </div>
                <div className="WorkerTexts">
                  <h4 className="titleName">
                    {t("Employers.qodirovData.name")}
                  </h4>
                  <div className="jobDesc">
                    {t("Employers.qodirovData.job")}
                  </div>
                </div>
              </div>
            </Col>
            <Col
              className="centerCol"
              lg="4"
              md="6"
              sm="12"
              onClick={() => setworker("Employers.sobirovData")}
            >
              <div className="WorkerCard" onClick={() => setPhoto(sobirov)}>
                <div className="WorkerImage">
                  <img src={sobirov} alt="" />
                </div>
                <div className="WorkerTexts">
                  <h4 className="titleName">
                    {t("Employers.sobirovData.name")}
                  </h4>
                  <div className="jobDesc">
                    {t("Employers.sobirovData.job")}
                  </div>
                </div>
              </div>
            </Col>
            <Col
              className="centerCol"
              lg="4"
              md="6"
              sm="12"
              onClick={() => setworker("Employers.razbekovData")}
            >
              <div className="WorkerCard" onClick={() => setPhoto(razbekov)}>
                <div className="WorkerImage">
                  <img src={razbekov} alt="" />
                </div>
                <div className="WorkerTexts">
                  <h4 className="titleName">
                    {t("Employers.razbekovData.name")}
                  </h4>
                  <div className="jobDesc">
                    {t("Employers.razbekovData.job")}
                  </div>
                </div>
              </div>
            </Col>
            <Col
              className="centerCol"
              lg="4"
              md="6"
              sm="12"
              onClick={() => setworker("Employers.latipovData")}
            >
              <div className="WorkerCard" onClick={() => setPhoto(latipov)}>
                <div className="WorkerImage">
                  <img src={latipov} alt="" />
                </div>
                <div className="WorkerTexts">
                  <h4 className="titleName">
                    {t("Employers.latipovData.name")}
                  </h4>
                  <div className="jobDesc">
                    {t("Employers.latipovData.job")}
                  </div>
                </div>
              </div>
            </Col>
            {/* <Col
              className="centerCol"
              lg="4"
              md="6"
              sm="12"
              onClick={() => setworker("Employers.akkulovData")}
            >
              <div className="WorkerCard" onClick={() => setPhoto(akkulov)}>
                <div className="WorkerImage">
                  <img src={akkulov} alt="" />
                </div>
                <div className="WorkerTexts">
                  <h4 className="titleName">
                    {t("Employers.akkulovData.name")}
                  </h4>
                  <div className="jobDesc">
                    {t("Employers.akkulovData.job")}
                  </div>
                </div>
              </div>
            </Col> */}
            <Col
              className="centerCol"
              lg="4"
              md="6"
              sm="12"
              onClick={() => setworker("Employers.tanikulovData")}
            >
              <div className="WorkerCard" onClick={() => setPhoto(tanikulov)}>
                <div className="WorkerImage">
                  <img src={tanikulov} alt="" />
                </div>
                <div className="WorkerTexts">
                  <h4 className="titleName">
                    {t("Employers.tanikulovData.name")}
                  </h4>
                  <div className="jobDesc">
                    {t("Employers.tanikulovData.job")}
                  </div>
                </div>
              </div>
            </Col>
            <Col
              className="centerCol"
              lg="4"
              md="6"
              sm="12"
              onClick={() => setworker("Employers.rustamovData")}
            >
              <div className="WorkerCard" onClick={() => setPhoto(rustamov)}>
                <div className="WorkerImage">
                  <img src={rustamov} alt="" />
                </div>
                <div className="WorkerTexts">
                  <h4 className="titleName">
                    {t("Employers.rustamovData.name")}
                  </h4>
                  <div className="jobDesc">
                    {t("Employers.rustamovData.job")}
                  </div>
                </div>
              </div>
            </Col>
            <Col
              className="centerCol"
              lg="4"
              md="6"
              sm="12"
              onClick={() => setworker("Employers.turdimatovData")}
            >
              <div className="WorkerCard" onClick={() => setPhoto(turdimatov)}>
                <div className="WorkerImage">
                  <img src={turdimatov} alt="" />
                </div>
                <div className="WorkerTexts">
                  <h4 className="titleName">
                    {t("Employers.turdimatovData.name")}
                  </h4>
                  <div className="jobDesc">
                    {t("Employers.turdimatovData.job")}
                  </div>
                </div>
              </div>
            </Col>
            <Col
              className="centerCol"
              lg="4"
              md="6"
              sm="12"
              onClick={() => setworker("Employers.qudratovData")}
            >
              <div className="WorkerCard" onClick={() => setPhoto(qudratov)}>
                <div className="WorkerImage">
                  <img src={qudratov} alt="" />
                </div>
                <div className="WorkerTexts">
                  <h4 className="titleName">
                    {t("Employers.qudratovData.name")}
                  </h4>
                  <div className="jobDesc">
                    {t("Employers.qudratovData.job")}
                  </div>
                </div>
              </div>
            </Col>
            <Col
              className="centerCol"
              lg="4"
              md="6"
              sm="12"
              onClick={() => setworker("Employers.vaxobovData")}
            >
              <div className="WorkerCard" onClick={() => setPhoto(vaxobov)}>
                <div className="WorkerImage">
                  <img src={vaxobov} alt="" />
                </div>
                <div className="WorkerTexts">
                  <h4 className="titleName">
                    {t("Employers.vaxobovData.name")}
                  </h4>
                  <div className="jobDesc">
                    {t("Employers.vaxobovData.job")}
                  </div>
                </div>
              </div>
            </Col>
            {/* <Col
              className="centerCol"
              lg="4"
              md="6"
              sm="12"
              onClick={() => setworker("Employers.pulatovData")}
            >
              <div className="WorkerCard" onClick={() => setPhoto(pulatov)}>
                <div className="WorkerImage">
                  <img src={pulatov} alt="" />
                </div>
                <div className="WorkerTexts">
                  <h4 className="titleName">
                    {t("Employers.pulatovData.name")}
                  </h4>
                  <div className="jobDesc">
                    {t("Employers.pulatovData.job")}
                  </div>
                </div>
              </div>
            </Col> */}
            <Col
              className="centerCol"
              lg="4"
              md="6"
              sm="12"
              onClick={() => setworker("Employers.xodjayevData")}
            >
              <div className="WorkerCard" onClick={() => setPhoto(xodjayev)}>
                <div className="WorkerImage">
                  <img src={xodjayev} alt="" />
                </div>
                <div className="WorkerTexts">
                  <h4 className="titleName">
                    {t("Employers.xodjayevData.name")}
                  </h4>
                  <div className="jobDesc">
                    {t("Employers.xodjayevData.job")}
                  </div>
                </div>
              </div>
            </Col>
            <Col
              className="centerCol"
              lg="4"
              md="6"
              sm="12"
              onClick={() => setworker("Employers.rayimberdiyevData")}
            >
              <div
                className="WorkerCard"
                onClick={() => setPhoto(rayimberdiyev)}
              >
                <div className="WorkerImage">
                  <img src={rayimberdiyev} alt="" />
                </div>
                <div className="WorkerTexts">
                  <h4 className="titleName">
                    {t("Employers.rayimberdiyevData.name")}
                  </h4>
                  <div className="jobDesc">
                    {t("Employers.rayimberdiyevData.job")}
                  </div>
                </div>
              </div>
            </Col>
            <Col
              className="centerCol"
              lg="4"
              md="6"
              sm="12"
              onClick={() => setworker("Employers.nurmatovData")}
            >
              <div className="WorkerCard" onClick={() => setPhoto(nurmatov)}>
                <div className="WorkerImage">
                  <img src={nurmatov} alt="" />
                </div>
                <div className="WorkerTexts">
                  <h4 className="titleName">
                    {t("Employers.nurmatovData.name")}
                  </h4>
                  <div className="jobDesc">
                    {t("Employers.nurmatovData.job")}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Workers;
