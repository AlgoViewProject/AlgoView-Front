import { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Avatar,
  Grid,
} from "@mui/material";

const initialReviews = [
  {
    name: "Sally Kim",
    title: "이 경험 정말 환상적",
    content:
      "유튜브에서 아무 생각 없이 영상을 보고 봤는데, 이 사이트를 사용해보니 내가 특정 주제나 콘텐츠 크리에이터를 자주 시청한다는 걸 깨달았어요. 특히, 관심 있는 분야가 변화하는 과정을 한눈에 볼 수 있어서 재미있었어요. 이제는 단순히 영상을 보는 게 아니라, 나에게 유용한 콘텐츠를 더 적극적으로 찾아보게 되었습니다.",
  },
  {
    name: "김철수",
    title: "놀라워요",
    content:
      "이 사이트를 사용하면서 기존의 유튜브 알고리즘과는 다르게, 내가 정말 좋아할 만한 콘텐츠를 추천받을 수 있어서 좋았어요. 단순히 인기 영상이 아니라, 내 취향을 기반으로 분석된 추천 영상이라 신선한 콘텐츠를 많이 발견할 수 있었습니다. 덕분에 유튜브를 더 알차게 활용하게 되었고, 쓸모없는 영상 시청도 줄어들었어요.",
  },
  {
    name: "김영희",
    title: "나는 이 사이트를 통해 나를 찾았다",
    content:
      "평소 유튜브를 습관적으로 보고 했는데, 막상 내가 어떤 영상을 많이 보는지 제대로 인지하지 못했어요. 그런데 이 사이트를 통해 나의 시청 기록을 분석해보니 특정 카테고리에 치우쳐 있다는 걸 알게 되었습니다. 덕분에 더 균형 잡힌 콘텐츠를 소비하려는 노력을 하게 되었고, 유튜브를 보다 효율적으로 활용할 수 있게 되었어요.",
  },
];

const Review = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const userName = "user";

  const handleSubmit = () => {
    if (title && content) {
      const newReview = { name: userName, title, content };
      setReviews([newReview, ...reviews]);
      setTitle("");
      setContent("");
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        후기
      </Typography>
      <Typography variant="body1" gutterBottom>
        당신의 한마디가 더 나은 발전의 원동력이 됩니다!
      </Typography>
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
      <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleSubmit}>
        작성하기
      </Button>

      <Grid container spacing={2} sx={{ mt: 4 }}>
        {reviews.map((review, index) => (
          <Grid item xs={12} key={index}>
            <Card>
              <CardContent>
                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    <Avatar>{review.name.charAt(0)}</Avatar>
                  </Grid>
                  <Grid item xs>
                    <Typography variant="h6">{review.title}</Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                      {review.name}
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

export default Review;
