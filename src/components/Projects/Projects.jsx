import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./projects.css";
import "./projects_img.scss";
import "../About/AboutCompany";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <div className="StaffContent">
      <div className="vertical-line vl"></div>
      <Container>
        <Row>
          <Col>
            <div className="mainTitles">
              <div className="secondTitlePage">CONSTRUCTION ASIA</div>
              <div className="firstTitlePage">{t("ProjectsPage.title")}</div>
              <div className="tagLine">{t("ProjectsPage.desc")}</div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="6" sm="12">
          <Link className="linkk" to="/project_01" >
            <div className="CartBox1">
              <div className="imgBox imgBox_1 ">
                {/* <div className="bottomElements">
                  <div className="cardNumber">01</div>
                  <div className="cardLine"></div>
                </div> */}
              </div>
              <div className="cardTitle">{t("Projects.xafsizlikuniver")}</div>
              <div className="cardDesc">
              {t("Projects.xafsizlikuniverDesc")}
              </div>
            </div>
            </Link>
          </Col>
          <Col lg="4" md="6" sm="12">
          <Link className="linkk" to="/project_02" >
            <div className="CartBox1">
              <div className="imgBox imgBox_2 ">
                {/* <div className="bottomElements">
                  <div className="cardNumber">01</div>
                  <div className="cardLine"></div>
                </div> */}
              </div>
              <div className="cardTitle">{t("Projects.huquqakademiya")}</div>
              <div className="cardDesc">
              {t("Projects.huquqakademiyadesc")}
              </div>
            </div>
            </Link>
          </Col>
          <Col lg="4" md="6" sm="12">
          <Link className="linkk" to="/project_03" >
            <div className="CartBox1">
              <div className="imgBox imgBox_3 ">
                {/* <div className="bottomElements">
                  <div className="cardNumber">01</div>
                  <div className="cardLine"></div>
                </div> */}
              </div>
              <div className="cardTitle">{t("Projects.xafsizlikuniverB")}</div>
              <div className="cardDesc">
              {t("Projects.xafsizlikuniverBDesc")}
              </div>
            </div>
            </Link>
          </Col>
          <Col lg="4" md="6" sm="12">
          <Link className="linkk" to="/project_04" >
            <div className="CartBox1">
              <div className="imgBox imgBox_4 ">
                {/* <div className="bottomElements">
                  <div className="cardNumber">01</div>
                  <div className="cardLine"></div>
                </div> */}
              </div>
              <div className="cardTitle">{t("Projects.chiller")}</div>
              <div className="cardDesc">
              {t("Projects.chillerDesc")}
              </div>
            </div>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
