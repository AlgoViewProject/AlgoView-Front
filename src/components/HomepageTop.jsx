import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import magnifierYoutube from "../assets/magnifierYoutube.png";

const HomepageTop = () => {
  return (
    <Box sx={{ backgroundColor: "#f5f5f5", py: 8, textAlign: "center", position: "relative" }}>
      <Container maxWidth="md">
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          알고 <span style={{ color: "#000" }}>VIEW</span>
        </Typography>
        <Typography variant="subtitle1" color="gray" gutterBottom>
          YOUTUBE 기록을 분석하여 자신의 취향과 성향을 알아보세요!
        </Typography>
        <Button variant="contained" color="primary" size="large" sx={{ mt: 2 }}>
          분석하기
        </Button>
      </Container>
      <Box
        component="img"
        src={magnifierYoutube}
        alt="Magnifier YouTube"
        sx={{
          position: "absolute",
          right: { xs: "5%", md: "10%" },
          top: "20%",
          width: { xs: "150px", md: "300px" },
          zIndex: -1,
        }}
      />
    </Box>
  );
};

export default HomepageTop