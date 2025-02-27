import { Link } from 'react-router-dom';
import logo from "../assets/logo1.png";


const Navbar = () => {
    return (
        <nav style={{ borderBottom: "2px solid #ddd", padding: "10px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", background: "white" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
            <img src={logo} alt="AlgoView Logo" style={{ height: "40px", marginRight: "10px" }} />
            <Link to="/" style={{ color: "#333", textDecoration: "none", fontSize: "20px", fontWeight: "bold" }}>ALGO<span style={{ color: "#E74C3C" }}>VIEW</span></Link>
            </div>
            <ul style={{ display: "flex", listStyle: "none", margin: 0, padding: 0, alignItems: "center" }}>
                <li style={{ margin: "0 15px" }}>
                    <Link to="/interest-analysis" style={{ color: "#333", textDecoration: "none", fontSize: "16px" }}>YOUTUBE 기록 분석</Link>
                </li>
                <li style={{ margin: "0 15px" }}>
                    <Link to="/bias-analysis" style={{ color: "#333", textDecoration: "none", fontSize: "16px" }}>편향도 분석</Link>
                </li>
                <li style={{ margin: "0 15px" }}>
                    <Link to="/recommendation" style={{ color: "#333", textDecoration: "none", fontSize: "16px" }}>관련 기사 추천</Link>
                </li>
                <li style={{ margin: "0 15px" }}>
                    <Link to="/review" style={{ color: "#333", textDecoration: "none", fontSize: "16px" }}>후기</Link>
                </li>
                <li>
                    <button style={{ background: "#eee", border: "none", padding: "8px 15px", borderRadius: "5px", cursor: "pointer" }}>로그인</button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;