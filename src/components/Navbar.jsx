import { Link } from "react-router-dom";
import logo from "../assets/logo1.png";

const Navbar = () => {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        height: "90px",
        background: "white",
        borderBottom: "2px solid #ddd",
        padding: "15px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        zIndex: 1000,
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="AlgoView Logo" style={{ height: "45px", marginRight: "10px" }} />
        <Link to="/" style={{ color: "#333", textDecoration: "none", fontSize: "22px", fontWeight: "bold" }}>
          ALGO<span style={{ color: "#E74C3C" }}>VIEW</span>
        </Link>
      </div>

      {/* 메뉴 리스트 */}
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          margin: 0,
          padding: 0,
          alignItems: "center",
        }}
      >
        {[
          { path: "/interest-analysis", label: "YOUTUBE 기록 분석" },
          { path: "/bias-analysis", label: "편향도 분석" },
          { path: "/news", label: "관련 기사 추천" },
          { path: "/review", label: "후기" },
        ].map((item, index) => (
          <li key={index} style={{ margin: "0 15px" }}>
            <Link
              to={item.path}
              style={{
                color: "#777", // 기본 회색 (연한 색상)
                textDecoration: "none",
                fontSize: "18px",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.color = "black")}
              onMouseLeave={(e) => (e.target.style.color = "#777")}
            >
              {item.label}
            </Link>
          </li>
        ))}
        <li>
          <button
            style={{
              background: "#5C9ECF",
              border: "none",
              padding: "10px 8px",
              margin: "0px 20px",
              borderRadius: "5px",
              fontSize: "18px",
              cursor: "pointer",
              transition: "background 0.3s ease",
              color: "white",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "#ddd";
              e.target.style.color = "black";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "#5C9ECF";
              e.target.style.color = "#white";
            }}
          >
            로그인
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
