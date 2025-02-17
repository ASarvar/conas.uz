import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./projects.css";
import "./projects_img.scss";

const Projects = () => {
  const { t } = useTranslation();

  // Project data stored in an array for scalability
  const projectData = [
    {
      id: "01",
      slug: "xafsizlikuniver",
      imgClass: "imgBox_1",
      titleKey: "Projects.xafsizlikuniver",
      descKey: "Projects.xafsizlikuniverDesc",
    },
    {
      id: "02",
      slug: "huquqakademiya",
      imgClass: "imgBox_2",
      titleKey: "Projects.huquqakademiya",
      descKey: "Projects.huquqakademiyadesc",
    },
    {
      id: "03",
      slug: "xafsizlikuniverB",
      imgClass: "imgBox_3",
      titleKey: "Projects.xafsizlikuniverB",
      descKey: "Projects.xafsizlikuniverBDesc",
    },
    {
      id: "04",
      slug: "chiller",
      imgClass: "imgBox_4",
      titleKey: "Projects.chiller",
      descKey: "Projects.chillerDesc",
    },
    {
      id: "05",
      slug: "huquqakademiya2",
      imgClass: "imgBox_5",
      titleKey: "Projects.huquqakademiya2",
      descKey: "Projects.huquqakademiya2desc",
    },
  ];

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
          {projectData.map((project) => (
            <Col key={project.id} lg="4" md="6" sm="12">
              <Link className="linkk" to={`/project/${project.slug}`}>
                <div className="CartBox1">
                  <div className={`imgBox ${project.imgClass}`}></div>
                  <div className="cardTitle">{t(project.titleKey)}</div>
                  <div className="cardDesc">{t(project.descKey)}</div>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
