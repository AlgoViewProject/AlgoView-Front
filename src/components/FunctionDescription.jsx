import { Card, CardContent, Typography, Container, Grid2 } from "@mui/material";
import youtubePic from "../assets/youtube_analysis.png";
import biasPic from "../assets/bias_analysis.png";
import newsPic from "../assets/news_analysis.png";


// 이미지 URL과 함께 descriptions 배열 업데이트
const descriptions = [
  { 
    title: "유튜브 분석 기록 확인",  
    image: youtubePic
  },
  { 
    title: "편향도 분석 제공", 
    image: biasPic
  },
  { 
    title: "관련 뉴스 기사 제공",  
    image: newsPic
  }
];

const FunctionDescription = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundColor: "#e0e0e0",
        py: 8,
        textAlign: "center",
        position: "absolute",
        top: "588px",
        left: "0",
        width: "100%",
        height: "500px",
        zIndex: 1000,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: "30px",
      }}
    >
      <Grid2 container spacing={3} justifyContent="center" sx={{ width: "90%" }}>
        {descriptions.map((item, index) => (
          <Grid2 item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: "400px", width: "300px", p: 2, borderRadius: 2, boxShadow: 1 }}>
              <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  {item.title}
                </Typography>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  style={{ width: '100%', height: '330px', objectFit: 'cover', borderRadius: 8, marginBottom: '16px' }} 
                />
                
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default FunctionDescription;
