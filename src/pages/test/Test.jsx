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
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // ✅ 현재 로그인된 사용자 ID (임시, 실제 로그인된 사용자 정보로 대체 필요)
  const userId = 1;

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
    if (!title.trim() || !content.trim()) {
      alert("제목과 내용을 입력해주세요.");
      return;
    }

    const newReview = {
      title,
      content,
      user: { id: userId }, // ✅ user 객체에 id만 포함
    };

    axios
      .post("http://localhost:8080/reviews", newReview)
      .then((response) => {
        setReviews([response.data, ...reviews]); // 새 리뷰 추가
        setTitle(""); // 입력 필드 초기화
        setContent("");
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
        label="제목"
        variant="outlined"
        margin="normal"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        fullWidth
        label="내용을 입력해주세요"
        variant="outlined"
        multiline
        rows={4}
        margin="normal"
        value={content}
        onChange={(e) => setContent(e.target.value)}
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
                      {review.user?.id ? `U${review.user.id}` : "?"}
                    </Avatar>
                  </Grid>
                  <Grid item xs>
                    <Typography variant="h6">{review.title}</Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                      사용자 ID: {review.user?.id || "알 수 없음"}
                    </Typography>
                  </Grid>
                </Grid>
                <Typography variant="body2" sx={{ mt: 2 }}>
                  {review.content}
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
