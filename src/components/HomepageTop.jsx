import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import magnifierYoutube from "../assets/magnifierYoutube.png";

const HomepageTop = () => {
  const navigate = useNavigate(); // 페이지 이동을 위한 useNavigate

  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        py: 8,
        textAlign: "center",
        position: "absolute",
        top: "110px",
        left: "50%",
        transform: "translateX(-50%)",
        height: "350px",
        width: "100%",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="md" sx={{ mt: -5 }}>
        <Typography variant="h2" fontWeight="bold" gutterBottom>
          알고 <span style={{ color: "#000" }}>VIEW</span>
        </Typography>
        <Typography variant="h6" color="gray" gutterBottom>
          YOUTUBE 기록을 분석하여 자신의 취향과 성향을 알아보세요!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ mt: 4, px: 13 }}
          onClick={() => navigate("/interest-analysis")}
        >
          분석하기
        </Button>
      </Container>

      {/* 오른쪽 하단 고정 (조금 더 아래로 내림) */}
      <Box
        component="img"
        src={magnifierYoutube}
        alt="Magnifier YouTube"
        sx={{
          position: "absolute",
          right: 0,
          bottom: "-20px",
          width: "550px", // 크기 유지
          zIndex: -1,

          // 반응형 조정 (작은 화면에서는 간격 유지)
          "@media (max-width: 900px)": {
            right: "3%",
            bottom: "-10px",
          },
          "@media (max-width: 600px)": {
            right: "5%",
            bottom: "-5px",
          },
        }}
      />
    </Box>
  );
};

export default HomepageTop;
