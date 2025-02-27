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
        height: "90px", // 세로 길이 조정
        background: "white",
        borderBottom: "2px solid #ddd",
        padding: "15px 20px", // 내부 여백 증가
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
        <li style={{ margin: "0 15px" }}>
          <Link to="/interest-analysis" style={{ color: "#333", textDecoration: "none", fontSize: "18px" }}>
            YOUTUBE 기록 분석
          </Link>
        </li>
        <li style={{ margin: "0 15px" }}>
          <Link to="/bias-analysis" style={{ color: "#333", textDecoration: "none", fontSize: "18px" }}>
            편향도 분석
          </Link>
        </li>
        <li style={{ margin: "0 15px" }}>
          <Link to="/recommendation" style={{ color: "#333", textDecoration: "none", fontSize: "18px" }}>
            관련 기사 추천
          </Link>
        </li>
        <li style={{ margin: "0 15px" }}>
          <Link to="/review" style={{ color: "#333", textDecoration: "none", fontSize: "18px" }}>
            후기
          </Link>
        </li>
        <li>
          <button
            style={{
              background: "#eee",
              border: "none",
              padding: "10px 8px",
              margin: "0px 20px",
              borderRadius: "5px",
              fontSize : "18px",
              cursor: "pointer",
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
