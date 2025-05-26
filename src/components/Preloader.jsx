import React, { useEffect, useState } from "react";
import "../assets/css/preloader.css";
import logo from "../assets/as-logo.svg";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Total animation time: 2s (1.5s for content + 0.5s for fade out)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="preloader">
      <div className="preloader-content">
        <img src={logo} alt="Logo" className="preloader-logo" />
        <div className="loading-line"></div>
      </div>
    </div>
  );
};

export default Preloader;
