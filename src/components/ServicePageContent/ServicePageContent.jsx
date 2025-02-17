import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./ServicePageContent.css";
import "../About/aboutcompany.css";
import { useTranslation } from "react-i18next";
import bobcat from "../../assets/machines/bobcat.jpg";
import doosan from "../../assets/machines/doosan.jpg";
import napac from "../../assets/machines/napac.jpg";
import isuze from "../../assets/machines/isuze.jpg";
import jcb from "../../assets/machines/jcb.jpg";
import liebherr from "../../assets/machines/liebherr.jpg";
import liebherrA904 from "../../assets/machines/liebherrA904.jpg";
import mantgs from "../../assets/machines/MAN-tgs.jpg";
import man from "../../assets/machines/man.jpg";
import manuat from "../../assets/machines/man-uat-sctf.jpg";
import manuatpresip from "../../assets/machines/manuatpresip.jpg";
import sany from "../../assets/machines/sany.jpg";
import chacman from "../../assets/machines/chacman.jpg";
import vodovoz from "../../assets/machines/vodovoz-chacman.jpg";
import shantui from "../../assets/machines/shantui.jpg";
import diamond from "../../assets/Group 185.png";
import howo from "../../assets/machines/Howo.jpg";
import howo10m from "../../assets/machines/howo10m.png";
import dewalon from "../../assets/machines/Dewalon.jpg";
import elkon from "../../assets/machines/Elkon.jpg";
import howot5g from "../../assets/machines/howo-T5G.jpg";
import hyundaiR60w9s from "../../assets/machines/hyundaiR60W9s.jpg";
import changanxinbaoT3 from "../../assets/machines/changanxinbaoT3.jpg";
import devalonDX160 from "../../assets/machines/devalonDX160.jpg";
import elkonElcomix135 from "../../assets/machines/elkonElcomix135.jpg";
import gazelBiznes from "../../assets/machines/gazelBiznes.jpg";
import gazelNext from "../../assets/machines/gazelNext.jpg";
import IsuzuNPR82L from "../../assets/machines/IsuzuNPR82L.jpg";
import sanySTC500 from "../../assets/machines/sanySTC500.jpg";
import shackmanX3000 from "../../assets/machines/shackmanX3000.jpg";

const ServicePageContent = () => {
  const { t } = useTranslation();

  return (
    <div className="mainClass">
      <Container>
        <Row>
          <Col>
            <div className="titleText">
              <div className="verticalBox">
                <div className="vertical-line vl"></div>
              </div>
              <h4 className="secondTitlePage">CONSTRUCTION ASIA</h4>
              <h1 className="firstTitlePage">{t("machineService.title")}</h1>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className="ColCenter" lg="3" md="4" sm="6">
            <div className="machinesBox">
              <div className="imgBox">
                <img src={elkon} alt="" />
              </div>
              <h3 className="titleMachine">{t("machineService.elkon")}</h3>
            </div>
          </Col>
          <Col className="ColCenter" lg="3" md="4" sm="6">
            <div className="machinesBox">
              <div className="imgBox">
                <img src={elkonElcomix135} alt="" />
              </div>
              <h3 className="titleMachine">
                {t("machineService.elkonElcomix135")}
              </h3>
            </div>
          </Col>
          <Col className="ColCenter" lg="3" md="4" sm="6">
            <div className="machinesBox">
              <div className="imgBox">
                <img src={napac} alt="" />
              </div>
              <h3 className="titleMachine">{t("machineService.DYNAPAC")}</h3>
            </div>
          </Col>
          <Col className="ColCenter" lg="3" md="4" sm="6">
            <div className="machinesBox">
              <div className="imgBox">
                <img src={shantui} alt="" />
              </div>
              <h3 className="titleMachine">{t("machineService.shantui")}</h3>
            </div>
          </Col>
          <Col className="ColCenter" lg="3" md="4" sm="6">
            <div className="machinesBox">
              <div className="imgBox">
                <img src={bobcat} alt="" />
              </div>
              <h3 className="titleMachine">{t("machineService.bobcat")}</h3>
            </div>
          </Col>
          <Col className="ColCenter" lg="3" md="4" sm="6">
            <div className="machinesBox">
              <div className="imgBox">
                <img src={dewalon} alt="" />
              </div>
              <h3 className="titleMachine">{t("machineService.dewalon")}</h3>
            </div>
          </Col>
          <Col className="ColCenter" lg="3" md="4" sm="6">
            <div className="machinesBox">
              <div className="imgBox">
                <img src={jcb} alt="Экскаватор погрузчик" />
              </div>
              <h3 className="titleMachine">{t("machineService.JCB")}</h3>
            </div>
          </Col>
          <Col className="ColCenter" lg="3" md="4" sm="6">
            <div className="machinesBox">
              <div className="imgBox">
                <img src={doosan} alt="" />
              </div>
              <h3 className="titleMachine">{t("machineService.DOOSAN")}</h3>
            </div>
          </Col>
          <Col className="ColCenter" lg="3" md="4" sm="6">
            <div className="machinesBox">
              <div className="imgBox">
                <img src={devalonDX160} alt="" />
              </div>
              <h3 className="titleMachine">
                {t("machineService.devalonDX160")}
              </h3>
            </div>
          </Col>
          <Col className="ColCenter" lg="3" md="4" sm="6">
            <div className="machinesBox">
              <div className="imgBox">
                <img src={hyundaiR60w9s} alt="" />
              </div>
              <h3 className="titleMachine">
                {t("machineService.hyundaiR60w9s")}
              </h3>
            </div>
          </Col>
          <Col className="ColCenter" lg="3" md="4" sm="6">
            <div className="machinesBox">
              <div className="imgBox">
                <img src={liebherr} alt="Колесный экскаватор LIEBHERR" />
              </div>
              <h3 className="titleMachine">{t("machineService.LIEBHERR")}</h3>
            </div>
          </Col>
          <Col className="ColCenter" lg="3" md="4" sm="6">
            <div className="machinesBox">
              <div className="imgBox">
                <img src={liebherrA904} alt="Гусеничный экскаватор LIEBHERR" />
              </div>
              <h3 className="titleMachine">{t("machineService.LIEBHERR2")}</h3>
            </div>
          </Col>
          <Col className="ColCenter" lg="3" md="4" sm="6">
            <div className="machinesBox">
              <div className="imgBox">
                <img src={mantgs} alt="Автосамосвал MAN TGS" />
              </div>
              <h3 className="titleMachine">{t("machineService.manTgs1")}</h3>
            </div>
          </Col>
          <Col className="ColCenter" lg="3" md="4" sm="6">
            <div className="machinesBox">
              <div className="imgBox">
                <img src={man} alt="" />
              </div>
              <h3 className="titleMachine">{t("machineService.manTgs2")}</h3>
            </div>
          </Col>
          <Col className="ColCenter" lg="6" md="8" sm="12">
            <div className="machinesBox">
              <div className="doubleImg">
                <div className="imgBox">
                  <img src={manuat} alt="" />
                </div>
                <div className="imgBox">
                  <img src={manuatpresip} alt="" />
                </div>
              </div>
              <h3 className="titleMachine">{t("machineService.manTgs3")}</h3>
            </div>
          </Col>
          <Col className="ColCenter" lg="3" md="4" sm="6">
            <div className="machinesBox">
              <div className="imgBox">
                <img src={sanySTC500} alt="" />
              </div>
              <h3 className="titleMachine">{t("machineService.sanySTC500")}</h3>
            </div>
          </Col>
          <Col className="ColCenter" lg="3" md="4" sm="6">
            <div className="machinesBox">
              <div className="imgBox">
                <img src={sany} alt="" />
              </div>
              <h3 className="titleMachine">{t("machineService.SANY")}</h3>
            </div>
          </Col>
          <Col className="ColCenter" lg="3" md="4" sm="6">
            <div className="machinesBox">
              <div className="imgBox">
                <img src={chacman} alt="" />
              </div>
              <h3 className="titleMachine">{t("machineService.Shacman")}</h3>
            </div>
          </Col>
          <Col className="ColCenter" lg="3" md="4" sm="6">
            <div className="machinesBox">
              <div className="imgBox">
                <img src={vodovoz} alt="" />
              </div>
              <h3 className="titleMachine">
                {t("machineService.VodovozShacman")}
              </h3>
            </div>
          </Col>
          <Col className="ColCenter" lg="3" md="4" sm="6">
            <div className="machinesBox">
              <div className="imgBox">
                <img src={shackmanX3000} alt="" />
              </div>
              <h3 className="titleMachine">
                {t("machineService.shackmanX3000")}
              </h3>
            </div>
          </Col>
          <Col className="ColCenter" lg="3" md="4" sm="6">
            <div className="machinesBox">
              <div className="imgBox">
                <img src={howo10m} alt="" />
              </div>
              <h3 className="titleMachine">{t("machineService.howo10m")}</h3>
            </div>
          </Col>
          <Col className="ColCenter" lg="3" md="4" sm="6">
            <div className="machinesBox">
              <div className="imgBox">
                <img src={howo} alt="" />
              </div>
              <h3 className="titleMachine">{t("machineService.howo")}</h3>
            </div>
          </Col>
          <Col className="ColCenter" lg="3" md="4" sm="6">
            <div className="machinesBox">
              <div className="imgBox">
                <img src={howot5g} alt="" />
              </div>
              <h3 className="titleMachine">{t("machineService.howot5g")}</h3>
            </div>
          </Col>
          <Col className="ColCenter" lg="3" md="4" sm="6">
            <div className="machinesBox">
              <div className="imgBox">
                <img src={isuze} alt="" />
              </div>
              <h3 className="titleMachine">{t("machineService.ISUZU")}</h3>
            </div>
          </Col>
          <Col className="ColCenter" lg="3" md="4" sm="6">
            <div className="machinesBox">
              <div className="imgBox">
                <img src={IsuzuNPR82L} alt="" />
              </div>
              <h3 className="titleMachine">
                {t("machineService.IsuzuNPR82L")}
              </h3>
            </div>
          </Col>
          <Col className="ColCenter" lg="3" md="4" sm="6">
            <div className="machinesBox">
              <div className="imgBox">
                <img src={changanxinbaoT3} alt="" />
              </div>
              <h3 className="titleMachine">
                {t("machineService.changanxinbaoT3")}
              </h3>
            </div>
          </Col>
          <Col className="ColCenter" lg="3" md="4" sm="6">
            <div className="machinesBox">
              <div className="imgBox">
                <img src={gazelBiznes} alt="" />
              </div>
              <h3 className="titleMachine">
                {t("machineService.gazelBiznes")}
              </h3>
            </div>
          </Col>
          <Col className="ColCenter" lg="3" md="4" sm="6">
            <div className="machinesBox">
              <div className="imgBox">
                <img src={gazelNext} alt="" />
              </div>
              <h3 className="titleMachine">{t("machineService.gazelNext")}</h3>
            </div>
          </Col>
        </Row>
        <Row>
          <div className="diamondSection">
            <div className="diamondBox">
              <div className="imgbox">
                <img src={diamond} alt="" />
              </div>
              <div className="texts">
                <h3 className="title">{t("machineService.diamondBox")}</h3>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default ServicePageContent;
