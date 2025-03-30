import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // React Router의 내비게이션 훅 추가
import { Box, CircularProgress, Typography, Button } from "@mui/material";

const messages = [
  "파일을 여는 중...",
  "결과를 작성하는 중...",
  "결과를 시각화하는 중...",
];

const InterestAnalysisLoading = () => {
  const [visibleMessages, setVisibleMessages] = useState([]);
  const navigate = useNavigate(); // useNavigate 훅 사용

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setVisibleMessages((prev) => {
        if (index < messages.length) {
          return [...prev, messages[index++]];
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 3000);

    // 8초 후에 자동 이동
    const timeout = setTimeout(() => {
      navigate("/interest-analysis/result");
    }, 8000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [navigate]);

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
        transform: "translate(-50%, -50%)",
      }}
    >
      <Typography variant="h4" gutterBottom>
        잠시만요. 금방 분석해드릴게요!
      </Typography>
      <CircularProgress size={300} thickness={4} />
      <Box mt={3}>
        {visibleMessages.map((msg, index) => (
          <Typography key={index} variant="h6" color="textSecondary">
            {msg}
          </Typography>
        ))}
      </Box>
      <Button
        variant="contained"
        sx={{ mt: 4, fontSize: "1.2rem", padding: "12px 24px" }}
        onClick={() => navigate(-1)} // 이전 페이지로 이동
      >
        이전
      </Button>
    </Box>
  );
};

export default InterestAnalysisLoading;


