import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const ErrorPage = () => {
  return (
    <div
      className="error-page"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #a8e063 0%, #56ab2f 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          background:
            "radial-gradient(circle at 20% 20%, #fff8e1 0%, transparent 60%), radial-gradient(circle at 80% 80%, #b2dfdb 0%, transparent 60%)",
          opacity: 0.5,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          zIndex: 1,
          textAlign: "center",
          animation: "fadeInUp 1s cubic-bezier(.68,-0.55,.27,1.55)",
        }}
      >
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ marginBottom: "2rem", animation: "spin 3s linear infinite" }}
        >
          <circle
            cx="60"
            cy="60"
            r="55"
            stroke="#388e3c"
            strokeWidth="10"
            fill="#fffde7"
          />
          <text
            x="50%"
            y="54%"
            textAnchor="middle"
            fill="#388e3c"
            fontSize="32"
            fontWeight="bold"
            dy=".3em"
          >
            404
          </text>
        </svg>
        <h1
          style={{ fontSize: "2.5rem", color: "#388e3c", marginBottom: "1rem" }}
        >
          Page Not Found
        </h1>
        <p style={{ color: "#333", fontSize: "1.2rem", marginBottom: "2rem" }}>
          Sorry, the page you are looking for does not exist.
        </p>
        <Link
          to="/"
          style={{
            padding: "0.75rem 2rem",
            background: "#388e3c",
            color: "#fff",
            borderRadius: "30px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "1.1rem",
            boxShadow: "0 4px 20px rgba(56,142,60,0.2)",
            transition: "background 0.3s, transform 0.3s",
            display: "inline-block",
          }}
          onMouseOver={(e) => {
            e.target.style.background = "#43a047";
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseOut={(e) => {
            e.target.style.background = "#388e3c";
            e.target.style.transform = "scale(1)";
          }}
        >
          Go to Home
        </Link>
      </div>
      <style>
        {`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(40px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default ErrorPage;
