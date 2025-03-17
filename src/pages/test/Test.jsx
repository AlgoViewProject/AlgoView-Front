import { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Grid,
  TextField,
  Button,
  CircularProgress,
  Alert,
} from "@mui/material";

const Test = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [name, setName] = useState("");
  const [contents, setContents] = useState("");

  // ✅ 백엔드에서 리뷰 데이터 가져오기
  useEffect(() => {
    axios
      .get("http://localhost:8080/reviews")
      .then((response) => {
        setReviews(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // ✅ 리뷰 작성 핸들러
  const handleSubmit = () => {
    if (!name.trim() || !contents.trim()) {
      alert("이름과 내용을 입력해주세요.");
      return;
    }

    const formData = new URLSearchParams();
    formData.append("name", `"${name}"`); // x-www-form-urlencoded에 맞춰 따옴표 포함
    formData.append("contents", `"${contents}"`);

    axios
      .post("http://localhost:8080/reviews", formData, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
      .then(() => {
        const newReview = {
          name: `"${name}"`, // DB와 일치하도록 처리
          contents: `"${contents}"`,
        };
        setReviews([newReview, ...reviews]); // 새 리뷰 추가
        setName(""); // 입력 필드 초기화
        setContents("");
      })
      .catch((error) => {
        console.error("Error posting review:", error);
      });
  };

  if (loading)
    return (
      <Container maxWidth="md" sx={{ mt: 8, textAlign: "center" }}>
        <CircularProgress />
      </Container>
    );
  if (error)
    return (
      <Container maxWidth="md" sx={{ mt: 8 }}>
        <Alert severity="error">오류 발생: {error}</Alert>
      </Container>
    );

  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
        리뷰 작성
      </Typography>

      {/* ✅ 리뷰 입력 폼 */}
      <TextField
        fullWidth
        label="이름"
        variant="outlined"
        margin="normal"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        fullWidth
        label="내용을 입력해주세요"
        variant="outlined"
        multiline
        rows={4}
        margin="normal"
        value={contents}
        onChange={(e) => setContents(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 3 }} // ✅ 버튼과 입력 필드 사이 여백 증가
        onClick={handleSubmit}
      >
        작성하기
      </Button>

      {/* ✅ 리뷰 리스트 */}
      <Typography variant="h6" sx={{ mt: 6 }}>
        리뷰 목록
      </Typography>
      <Grid container spacing={3} sx={{ mt: 3 }}>
        {reviews.map((review, index) => (
          <Grid item xs={12} key={index}>
            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
              <CardContent>
                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    <Avatar sx={{ bgcolor: "grey.500" }}>
                      {review.name.charAt(1)} {/* 따옴표 제거 */}
                    </Avatar>
                  </Grid>
                  <Grid item xs>
                    <Typography variant="h6">
                      {review.name.replace(/"/g, "")} {/* 따옴표 제거 */}
                    </Typography>
                  </Grid>
                </Grid>
                <Typography variant="body2" sx={{ mt: 2 }}>
                  {review.contents.replace(/"/g, "")} {/* 따옴표 제거 */}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Test;
