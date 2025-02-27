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
        height: "350px", // 전체 박스 높이 증가
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
        <Typography variant="h6" color="gray" gutterBottom >
          YOUTUBE 기록을 분석하여 자신의 취향과 성향을 알아보세요!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ mt: 4, px: 13 }} // 버튼도 아래로 이동
          onClick={() => navigate("/interest-analysis")} // 버튼 클릭 시 페이지 이동
        >
          분석하기
        </Button>
      </Container>

      {/* 돋보기 이미지 */}
      <Box
        component="img"
        src={magnifierYoutube}
        alt="Magnifier YouTube"
        sx={{
          position: "absolute",
          left: "70%",
          top: "30%", // 이미지 위치 조정
          width: "550px",
          zIndex: -1,
        }}
      />
    </Box>
  );
};

export default HomepageTop;
