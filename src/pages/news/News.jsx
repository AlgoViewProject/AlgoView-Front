import { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Box,
} from "@mui/material";

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [uniqueKeywords, setUniqueKeywords] = useState([]); // 🔹 중복 제거된 키워드 저장
  const [visibleCount, setVisibleCount] = useState(5); // 🔹 초기 5개만 표시

  // ✅ 백엔드에서 뉴스 데이터 가져오기
  useEffect(() => {
    axios
      .get("http://localhost:8080/news/list")
      .then((response) => {
        setNews(response.data);
        setLoading(false);

        // 🔹 키워드 배열 생성 및 중복 제거
        const keywords = response.data.map((article) => article.keyword);
        const uniqueKeywordsArray = [...new Set(keywords)]; // 중복 제거
        setUniqueKeywords(uniqueKeywordsArray);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // 🔹 "더보기" 버튼 클릭 시 5개씩 추가 로드
  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 5);
  };

  if (loading)
    return (
      <Container maxWidth="md" sx={{ mt: 8, textAlign: "center" }}>
        <Typography variant="h6">뉴스를 불러오는 중...</Typography>
      </Container>
    );

  if (error)
    return (
      <Container maxWidth="md" sx={{ mt: 8 }}>
        <Typography variant="h6" color="error">
          오류 발생: {error}
        </Typography>
      </Container>
    );

  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      {/* 🔹 제목을 중앙 정렬 + 여백 조정 */}
      <Typography variant="h5" align="center" gutterBottom sx={{ fontWeight: "bold", mb: 2 }}>
        관련기사
      </Typography>

      {/* 🔹 키워드 위치 조정 (제목과 뉴스 카드 사이) */}
      <Typography variant="subtitle1" align="center" sx={{ mb: 4, color: "gray" }}>
        {uniqueKeywords.length > 0 ? uniqueKeywords.join(", ") : "키워드 없음"}
      </Typography>

      {/* 🔹 뉴스 리스트 위치 조정 */}
      <Grid container spacing={2} sx={{ display: "flex", justifyContent: "center" }}>
        {news.slice(0, visibleCount).map((article, index) => (
          <Grid item xs={12} key={index} sx={{ display: "flex", justifyContent: "center" }}>
            <Card
              sx={{
                borderRadius: 2,
                boxShadow: 3,
                padding: 2,
                maxWidth: "800px", // 🔹 카드의 가로폭 줄이기
                width: "100%",
                transition: "0.2s",
                "&:hover": { boxShadow: 6 },
              }}
            >
              <CardContent>
                {/* 🔹 뉴스 제목 */}
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {article.title}
                </Typography>
                {/* 🔹 뉴스 요약 */}
                <Typography variant="body2" sx={{ mt: 1, color: "gray" }}>
                  {article.description}
                </Typography>
                {/* 🔹 버튼을 오른쪽 하단에 배치하기 위한 컨테이너 */}
                <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
                  <Button
                    variant="outlined"
                    color="primary"
                    href={article.link}
                    target="_blank"
                  >
                    더보기
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* 🔹 "더보기" 버튼을 중앙에 배치 */}
      {visibleCount < news.length && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Button variant="contained" color="primary" onClick={handleLoadMore}>
            더보기
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default News;
