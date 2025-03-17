import { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, Typography, Avatar, Grid, Container, CircularProgress, Alert } from "@mui/material";

const HomepageReview = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // ✅ 백엔드에서 리뷰 데이터 가져오기
    useEffect(() => {
        axios
            .get("http://localhost:8080/reviews")
            .then((response) => {
                // 서버에서 전달된 데이터에서 큰따옴표 제거
                const formattedReviews = response.data.map((review) => ({
                    id: review.id,
                    quote: review.contents.replace(/"/g, ""), // 큰따옴표 제거
                    name: review.name.replace(/"/g, ""), // 큰따옴표 제거
                    description: "사용자 리뷰", // 별도 설명 추가 가능
                }));
                setReviews(formattedReviews);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching reviews:", error);
                setError(error.message);
                setLoading(false);
            });
    }, []);

    return (
        <Container
            sx={{
                py: 4,
                textAlign: "center",
                position: "absolute",
                top: "1100px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "100%",
                zIndex: 1000,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ py: 4 }}>
                사용 후기
            </Typography>

            {/* ✅ 로딩 상태 표시 */}
            {loading && <CircularProgress />}
            {error && <Alert severity="error">오류 발생: {error}</Alert>}

            <Grid container spacing={5} justifyContent="center">
                {reviews.map((review) => (
                    <Grid item xs={12} sm={6} md={4} key={review.id} display="flex" justifyContent="center">
                        <Card
                            sx={{
                                p: 2,
                                width: 300,
                                height: 200,
                                borderRadius: 2,
                                boxShadow: "none",
                                border: "1px solid #d3d3d3",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <CardContent>
                                <Typography variant="h6" gutterBottom textAlign="center">
                                    “{review.quote}”
                                </Typography>
                                <Grid container alignItems="center" spacing={1} justifyContent="center">
                                    <Grid item>
                                        <Avatar src="https://via.placeholder.com/40" alt={review.name} />
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="body1" fontWeight="medium">
                                            {review.name}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            {review.description}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default HomepageReview;
