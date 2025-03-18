// import React from "react";
import { Box, Typography, Card, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import KeywordRadarChart from "../test/Test";
import KeywordChart from "../../components/KeywordChart";
import HourChart from "../../components/HourChart";

const InterestAnalysisResult = () => {
  const navigate = useNavigate();

  const handleNewsRedirect = () => {
    navigate("/news");
  };

  const data = {
    function: "llm_analysis",
    status: "success",
    data: "The user tends to watch YouTube mainly during evening hours (18-20), with a preference for entertainment and educational content. Key interests include music and gaming. The viewing pattern suggests YouTube is primarily used for relaxation after work hours."
};

  return (
    <Box sx={{ width: "80%", margin: "auto", textAlign: "center", mt: 5 }}>
      {/* 제목 */}
      <Typography variant="h4" gutterBottom>
        3. 나의 Youtube 취향은?
      </Typography>
      <Typography variant="subtitle1" color="textSecondary">
        Youtube 시청기록 분석 결과
      </Typography>

      {/* 키워드 클라우드 */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" align="left">
          주요 키워드
        </Typography>
        <Card sx={{ mt: 2, p: 2, display: "flex", justifyContent: "center" }}>
          <KeywordChart/>
        </Card>
      </Box>

      {/* 시청 시간별 시청 동영상 그래프 */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h6" align="left">
          시청 시간별 시청 동영상
        </Typography>
        <Card sx={{ mt: 2, p: 2, display: "flex", justifyContent: "center", height: 1200}}>
          <HourChart/>
        </Card>
      </Box>

      {/* 종합 결과 */}
      <Box sx={{ mt: 6, textAlign: "left" }}>
        <Typography variant="h6">종합 결과</Typography>
        <Card sx={{ mt: 2, p: 3 }}>
          <Typography variant="body1">
            {data.data}
          </Typography>
        </Card>
      </Box>

      {/* 관련 기사 추천하기 버튼 */}
      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Button variant="contained" color="primary" onClick={handleNewsRedirect}>
          관련 기사 추천
        </Button>
      </Box>
    </Box>
  );
};

export default InterestAnalysisResult;
