// import React from "react";
import { Typography, Box } from "@mui/material";
import sadFace from "../../assets/sad_face.png"; // 이미지 import

const BiasAnalysis = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)", // 완벽한 중앙 정렬
        textAlign: "center",
      }}
    >
      {/* 슬픈 얼굴 이미지 */}
      <img
        src={sadFace}
        alt="슬픈 얼굴"
        style={{ width: "150px", marginBottom: "20px" }}
      />

      {/* 안내 문구 */}
      <Typography variant="h4" fontWeight="bold">
        페이지 준비중입니다
      </Typography>
    </Box>
  );
};

export default BiasAnalysis;
