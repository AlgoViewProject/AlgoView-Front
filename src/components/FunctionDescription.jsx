import { Card, CardContent, Typography, Container, Grid } from "@mui/material";

const descriptions = [
  { title: "유튜브 분석 기록 확인", author: "Emily Kim", description: "Description" },
  { title: "편향도 분석 제공", author: "Emily Kim", description: "Description" },
  { title: "관련 뉴스 기사 제공", author: "Emily Kim", description: "Description" }
];

const FunctionDescription = () => {
  return (
    <Container sx={{ py: 5, backgroundColor: "#e0e0e0" }}>
      <Grid container spacing={3} justifyContent="center">
        {descriptions.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: "100%", p: 2, borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
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
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FunctionDescription;