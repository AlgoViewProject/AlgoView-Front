// import React from "react";
import { Box, Typography, Card } from "@mui/material";

const InterestAnalysisResult = () => {
  return (
    <Box sx={{ width: "80%", margin: "auto", textAlign: "center", mt: 5 }}>
      {/* 제목 */}
      <Typography variant="h4" gutterBottom>
        3. 나의 Youtube 취향은?
      </Typography>
      <Typography variant="subtitle1" color="textSecondary">
        Youtube 시청기록 분석 결과
      </Typography>

      {/* 키워드 클라우드 */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" align="left">
          주요 키워드
        </Typography>
        <Card sx={{ mt: 2, p: 2, display: "flex", justifyContent: "center" }}>
          <img
            src="/mnt/data/image1.png" // 키워드 클라우드 이미지 경로 설정
            alt="키워드 클라우드"
            style={{ width: "100%", maxWidth: "600px" }}
          />
        </Card>
      </Box>

      {/* 시청 시간별 시청 동영상 그래프 */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h6" align="left">
          시청 시간별 시청 동영상
        </Typography>
        <Card sx={{ mt: 2, p: 2, display: "flex", justifyContent: "center" }}>
          <img
            src="/mnt/data/image2.png" // 시청 시간별 그래프 이미지 경로 설정
            alt="시청 시간별 그래프"
            style={{ width: "100%", maxWidth: "600px" }}
          />
        </Card>
      </Box>

      {/* 종합 결과 */}
      <Box sx={{ mt: 6, textAlign: "left" }}>
        <Typography variant="h6">종합 결과</Typography>
        <Card sx={{ mt: 2, p: 3 }}>
          <Typography variant="body1">
            내 유튜브의 주요 키워드는 어쩌구 저쩌구 어쩌구 입니다. 평소에 ~~~~~에 관심이 많은
            시군요. 평소 8시에는 주로 ~~~~~를 보고, ~~~~~를 보내요. 반면 12시에는 ~~~~~를 많이
            보는 걸 보니 어쩌구 저쩌구에 관심이 많아 보여요. 만약 관련 정보에 더 관심이 있다면
            ~~~~나 ~~~~~
          </Typography>
        </Card>
      </Box>
    </Box>
  );
};

export default InterestAnalysisResult;
