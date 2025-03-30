import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { Box, Typography, Card, Button, CircularProgress, Alert } from "@mui/material";
import ShareButton from "../../components/ShareButton";
import KeywordChart from "../../components/KeywordChart";
import HourChart from "../../components/HourChart";

const InterestAnalysisResult = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const analysisId = searchParams.get("analysisId");

  const [hourlyStats, setHourlyStats] = useState([]);
  const [keywordFreq, setKeywordFreq] = useState([]);
  const [llmResult, setLlmResult] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleNewsRedirect = () => {
    navigate("/news");
  };

  useEffect(() => {
    if (!analysisId) {
      setError("분석 ID가 존재하지 않습니다.");
      setLoading(false);
      return;
    }

    const fetchAll = async () => {
      try {
        const [hourlyRes, keywordRes, llmRes] = await Promise.all([
          axios.get(`http://localhost:8080/api/analysis/hourly_stats?analysisId=${analysisId}`),
          axios.get(`http://localhost:8080/api/analysis/keyword_frequency?analysisId=${analysisId}`),
          axios.get(`http://localhost:8080/api/analysis/llm_analysis?analysisId=${analysisId}`),
        ]);

        if (hourlyRes.data.status === "success") setHourlyStats(hourlyRes.data.data);
        if (keywordRes.data.status === "success") setKeywordFreq(keywordRes.data.data);
        if (llmRes.data.status === "success") setLlmResult(llmRes.data.data);

        setLoading(false);
      } catch (err) {
        console.error("API 요청 오류:", err);
        setError("데이터를 불러오는 중 오류가 발생했습니다.");
        setLoading(false);
      }
    };

    fetchAll();
  }, [analysisId]);

  if (loading) {
    return (
      <Box sx={{ textAlign: "center", mt: 8 }}>
        <CircularProgress />
        <Typography variant="body1" sx={{ mt: 2 }}>
          분석 결과를 불러오는 중입니다...
        </Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ mt: 8 }}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

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
          <KeywordChart data={keywordFreq} />
        </Card>
      </Box>

      {/* 시청 시간별 시청 동영상 그래프 */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h6" align="left">
          시청 시간별 시청 동영상
        </Typography>
        <Card sx={{ mt: 2, p: 2, display: "flex", justifyContent: "center", height: 800 }}>
          <HourChart data={hourlyStats} />
        </Card>
      </Box>

      {/* 종합 결과 */}
      <Box sx={{ mt: 6, textAlign: "left" }}>
        <Typography variant="h6">종합 결과</Typography>
        <Card sx={{ mt: 2, p: 3 }}>
          <Typography variant="body1">{llmResult}</Typography>
        </Card>
      </Box>

      {/* 버튼들 */}
      <Box sx={{ mt: 4, textAlign: "center", display: "flex", justifyContent: "center", gap: 2 }}>
        <Button variant="contained" color="primary" onClick={handleNewsRedirect}>
          관련 기사 추천
        </Button>
        <ShareButton
          title="내 Youtube 분석 결과"
          text={llmResult}
          url={window.location.href}
        />
      </Box>
    </Box>
  );
};

export default InterestAnalysisResult;
