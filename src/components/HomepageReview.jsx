// import React from "react";
import { Card, CardContent, Typography, Avatar, Grid, Container } from "@mui/material";

const reviews = [
    { id: 1, quote: "이 경험 정말 환상적", name: "Emily Kim", description: "Description" },
    { id: 2, quote: "놀라워요", name: "김 철수", description: "Description" },
    { id: 3, quote: "신세대의 혁명", name: "김 영희", description: "Description" },
    { id: 4, quote: "나는 이 사이트를 통해 나를 찾았다", name: "Title", description: "Description" },
    { id: 5, quote: "Quote", name: "Title", description: "Description" },
    { id: 6, quote: "Quote", name: "Title", description: "Description" }
];

const HomepageReview = () => {
    return (
        <Container sx={{ 
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
            alignItems: "center"
        }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom sx={{py:4}}>
                사용 후기
            </Typography>
            
            <Grid container spacing={5} justifyContent="center">
                {reviews.map((review) => (
                    <Grid item xs={12} sm={6} md={4} key={review.id} display="flex" justifyContent="center">
                        <Card sx={{ p: 2, width: 300, height: 200, borderRadius: 2, boxShadow: "none", border: "1px solid #d3d3d3", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
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