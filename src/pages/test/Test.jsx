import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { CircularProgress, Alert, Container, Typography, Box } from "@mui/material";

const Test = () => {
  const [searchParams] = useSearchParams();
  const analysisId = searchParams.get("analysisId");

  const [hourlyStats, setHourlyStats] = useState([]);
  const [keywordFreq, setKeywordFreq] = useState([]);
  const [llmResult, setLlmResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
      <Container sx={{ textAlign: "center", mt: 8 }}>
        <CircularProgress />
        <Typography variant="body1" sx={{ mt: 2 }}>
          분석 결과를 불러오는 중입니다...
        </Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container sx={{ mt: 8 }}>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 8 }}>
      <Typography variant="h5" gutterBottom>
        📊 분석 결과 (analysisId: {analysisId})
      </Typography>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6">1. 시간대별 통계</Typography>
        <Box component="pre" sx={preStyle}>
          {JSON.stringify(hourlyStats, null, 2)}
        </Box>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6">2. 키워드 분석</Typography>
        <Box component="pre" sx={preStyle}>
          {JSON.stringify(keywordFreq, null, 2)}
        </Box>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6">3. LLM 분석 결과</Typography>
        <Box component="pre" sx={preStyle}>
          {typeof llmResult === "string"
            ? llmResult
            : JSON.stringify(llmResult, null, 2)}
        </Box>
      </Box>
    </Container>
  );
};

const preStyle = {
  backgroundColor: "#f5f5f5",
  padding: 2,
  borderRadius: 2,
  overflowX: "auto",
  whiteSpace: "pre-wrap",
};

export default Test;
