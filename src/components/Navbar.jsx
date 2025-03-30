import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo1.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Nav>
      <LogoSection>
        <img src={logo} alt="AlgoView Logo" />
        <Link to="/">
          ALGO<span className="highlight">VIEW</span>
        </Link>
      </LogoSection>

      <MenuToggle onClick={() => setMenuOpen(!menuOpen)}>
        &#9776;
      </MenuToggle>

      <Menu $open={menuOpen}>
        {[
          { path: "/interest-analysis", label: "YOUTUBE 기록 분석" },
          { path: "/bias-analysis", label: "편향도 분석" },
          { path: "/news", label: "관련 기사 추천" },
          { path: "/review", label: "후기" },
        ].map((item, index) => (
          <li key={index}>
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
        <li>
          <button className="login-btn">로그인</button>
        </li>
      </Menu>
    </Nav>
  );
};

export default Navbar;

// Styled Components
const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 90px;
  background: white;
  border-bottom: 2px solid #ddd;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 45px;
    margin-right: 10px;
  }

  a {
    font-size: 22px;
    font-weight: bold;
    color: #333;
    text-decoration: none;

    .highlight {
      color: #e74c3c;
    }
  }
`;

const MenuToggle = styled.div`
  font-size: 30px;
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;

  li {
    margin: 0 15px;

    a {
      color: #777;
      text-decoration: none;
      font-size: 18px;
      transition: color 0.3s ease;

      &:hover {
        color: black;
      }
    }

    .login-btn {
      background: #5c9ecf;
      border: none;
      padding: 10px 8px;
      margin-left: 10px;
      border-radius: 5px;
      font-size: 18px;
      cursor: pointer;
      color: white;
      transition: background 0.3s ease, color 0.3s ease;

      &:hover {
        background: #ddd;
        color: black;
      }
    }
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 90px;
    left: 0;
    width: 100%;
    flex-direction: column;
    background: #111122;
    display: ${(props) => (props.$open ? "flex" : "none")};
    align-items: flex-start;
    padding: 20px;

    li {
      margin: 10px 0;
      width: 100%;
      text-align: left;

      a,
      .login-btn {
        color: white;
        width: 100%;
        display: block;
        padding-left: 15px;
      }

      .login-btn {
        text-align: left;
        background: transparent;
        border: 1px solid white;
      }
    }
  }
`;
