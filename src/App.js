import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Services from "./Pages/Services.jsx";
import NewsPage from "./Pages/News.jsx";
import Repairs from "./Pages/Repairs.jsx";
import Contact from "./Pages/Contact.jsx";
import Worker from "./Pages/Worker.jsx";
import NewsSingle from "./Pages/NewsSingle_01.jsx";
import Register from "./Pages/Register/Register.jsx";
import Login from "./Pages/Login/Login.jsx";
import { Context } from "./context/Context.js";
import Admin from "./Pages/Admin.jsx";
import Write from "./Pages/Write/Write.jsx";
import Corruption from "./Pages/Corruption.jsx";
import Sertificate from "./Pages/Sertificate.jsx";
import Licence from "./Pages/Licence.jsx";
import Diploma from "./Pages/Diploma.jsx";
import Projects from "./Pages/Projects.jsx";
import SingleProject from "./Pages/SingleProject.jsx";
import NewsSingle_01 from "./Pages/NewsSingle_01.jsx";
import NewsSingle_02 from "./Pages/NewsSingle_02.jsx";
import NewsSingle_03 from "./Pages/NewsSingle_03.jsx";
import NewsSingle_04 from "./Pages/NewsSingle_04.jsx";
import Snowfall from "react-snowfall";
import NewsSingle_05 from "./Pages/NewsSingle_05.jsx";
import NewsSingle_06 from "./Pages/NewsSingle_06.jsx";
import NewsSingle_07 from "./Pages/NewsSingle_07.jsx";
import NewsSingle_08 from "./Pages/NewsSingle_08.jsx";
import NewsSingle_09 from "./Pages/NewsSingle_09.jsx";

function App() {
  const { user } = useContext(Context);
  return (
    <>
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/admin">{user ? <Admin /> : <Login />}</Route>
            <Route path="/write">{user ? <Write /> : <Login />}</Route>
            <Route path="/about" component={About}></Route>
            <Route path="/services" component={Services}></Route>
            <Route path="/repairs" component={Repairs}></Route>
            <Route path="/news" component={NewsPage}></Route>
            <Route path="/worker" component={Worker}></Route>
            <Route exact path="/contacts" component={Contact}></Route>
            <Route path="/articles" component={NewsSingle}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/corruption" component={Corruption}></Route>
            <Route path="/certificate" component={Sertificate}></Route>
            <Route path="/licence" component={Licence}></Route>
            <Route path="/diplom" component={Diploma}></Route>
            <Route path="/projects" component={Projects}></Route>
            <Route path="/project/:projectId" component={SingleProject} />
            <Route path="/news_01" component={NewsSingle_01}></Route>
            <Route path="/news_02" component={NewsSingle_02}></Route>
            <Route path="/news_03" component={NewsSingle_03}></Route>
            <Route path="/news_04" component={NewsSingle_04}></Route>
            <Route path="/news_05" component={NewsSingle_05}></Route>
            <Route path="/news_06" component={NewsSingle_06}></Route>
            <Route path="/news_07" component={NewsSingle_07}></Route>
            <Route path="/news_08" component={NewsSingle_08}></Route>
            <Route path="/news_09" component={NewsSingle_09}></Route>
          </Switch>
        </Router>

        {/* <Router >
      <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home}></Route>
        <Route path={`${process.env.PUBLIC_URL}/admin`}>{user ? <Admin /> : <Login />}</Route>
        <Route path={`${process.env.PUBLIC_URL}/write`}>{user ? <Write /> : <Login />}</Route>
        <Route path={`${process.env.PUBLIC_URL}/about`} component={About}></Route>
        <Route path={`${process.env.PUBLIC_URL}/services`} component={Services}></Route>
        <Route path={`${process.env.PUBLIC_URL}/repairs`} component={Repairs}></Route>
        <Route path={`${process.env.PUBLIC_URL}/news`} component={NewsPage}></Route>
        <Route path={`${process.env.PUBLIC_URL}/worker`} component={Worker}></Route>
        <Route path={`${process.env.PUBLIC_URL}/contacts`} component={Contact}></Route>
        <Route path={`${process.env.PUBLIC_URL}/articles`} component={NewsSingle}></Route>
        <Route path={`${process.env.PUBLIC_URL}/register`} component={Register}></Route>
      </Switch>
    </Router> */}
      </>
      <Snowfall
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: "10000",
        }}
        snowflakeCount={300}
        wind={[-0.5, 2.0]}
        radius={[0.5, 2.5]}
      />
    </>
  );
}

export default App;

//   PUBLIC_URL=/test2
//   <Router baseurl="/test2">

//   <IfModule mod_rewrite.c>

//   RewriteEngine On
//   RewriteBase /
//   RewriteRule ^index\.html$ - [L]
//   RewriteCond %{REQUEST_FILENAME} !-f
//   RewriteCond %{REQUEST_FILENAME} !-d
//   RewriteCond %{REQUEST_FILENAME} !-l
//   RewriteRule . test2/index.html [L]

// </IfModule>
