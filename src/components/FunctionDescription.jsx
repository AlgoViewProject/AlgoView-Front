import { Card, CardContent, Typography, Container, Grid2 } from "@mui/material";

const descriptions = [
  { title: "유튜브 분석 기록 확인", author: "Emily Kim", description: "Description" },
  { title: "편향도 분석 제공", author: "Emily Kim", description: "Description" },
  { title: "관련 뉴스 기사 제공", author: "Emily Kim", description: "Description" }
];

const FunctionDescription = () => {
  return (
    <Container
      maxWidth={false} // 화면 가로 전체 차지
      sx={{
        backgroundColor: "#e0e0e0",
        py: 8,
        textAlign: "center",
        position: "absolute",
        top: "588px",
        left: "0", // 왼쪽 끝으로 정렬
        width: "100%", // 가로 길이 전체 사용
        height: "500px", // 전체 박스 높이 증가
        zIndex: 1000,
        display: "flex",
        flexDirection: "column", // 세로 정렬 유지
        alignItems: "center",
        justifyContent: "flex-start", // 텍스트를 상단 배치
        paddingTop: "30px", // 제목 상단 여백 추가
      }}
    >
    

      {/* 카드 컨텐츠 */}
      <Grid2 container spacing={3} justifyContent="center" sx={{ width: "90%" }}>
        {descriptions.map((item, index) => (
          <Grid2 item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: "400px", width: "300px", p: 2, borderRadius: 2, boxShadow: 1 }}>
              <CardContent>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body2" fontWeight="bold">
                  {item.author}
                </Typography>
                <Typography variant="body2" color="gray">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default FunctionDescription;
