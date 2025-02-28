import { useState, useRef } from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";

const articles = [
  {
    id: 1,
    title: "AI가 만드는 새로운 직업 시장",
    content:
      "인공지능의 정밀 향상 덕분에 다양한 분야에 적용되면서 기존 일자리와 함께 변화가 불가피해지고 있습니다...",
    fullContent:
      "인공지능의 정밀 향상 덕분에 다양한 분야에 적용되면서 기존 일자리와 함께 변화가 불가피해지고 있습니다. 특히 데이터 분석, 소프트웨어 개발, 금융 등 여러 산업에서 AI가 필수적인 요소로 자리 잡고 있으며, AI의 발전은 새로운 직업 시장을 창출하고 있습니다. 앞으로 AI와 인간이 협업하는 방식이 더욱 다양해질 것으로 예상됩니다.",
  },
  {
    id: 2,
    title: "생성형 AI, 어디까지 왔을까?",
    content:
      "텍스트, 이미지, 영상, 음원까지 생성형 AI는 점점 영역을 넓히고 있습니다. ChatGPT와 같은 대형 AI 모델은...",
    fullContent:
      "텍스트, 이미지, 영상, 음원까지 생성형 AI는 점점 영역을 넓히고 있습니다. ChatGPT와 같은 대형 AI 모델은 사람과 자연스럽게 대화하고 문서를 생성하는 수준까지 발전했습니다. 최근에는 영상 및 음악 생성 AI까지 등장하면서 창작 활동에서도 AI의 역할이 커지고 있습니다. AI의 창의력이 어디까지 확장될 수 있을지 기대되는 시점입니다.",
  },
  {
    id: 3,
    title: "수면의 질을 높이는 최신 기술",
    content:
      "수면 부족과 수면의 질 저하는 현대인들의 가장 큰 건강 문제 중 하나로 떠오르고 있습니다...",
    fullContent:
      "수면 부족과 수면의 질 저하는 현대인들의 가장 큰 건강 문제 중 하나로 떠오르고 있습니다. 이에 따라 AI 기반 수면 모니터링 기기와 스마트 침대가 등장하며 개인의 수면 패턴을 분석하고 최적의 환경을 조성하는 기술이 발전하고 있습니다. 향후 수면 기술은 보다 맞춤형으로 개선될 가능성이 높습니다.",
  },
  {
    id: 4,
    title: "MZ세대가 사랑하는 ‘힙한 로컬 맛집’",
    content:
      "최근 20~30대 사이에서는 기존의 유명 맛집보다 개성 있는 로컬 맛집을 찾아다니는 것이 트렌드가 되고 있습니다...",
    fullContent:
      "최근 20~30대 사이에서는 기존의 유명 맛집보다 개성 있는 로컬 맛집을 찾아다니는 것이 트렌드가 되고 있습니다. 감각적인 인테리어와 독특한 메뉴를 제공하는 맛집들이 MZ세대 사이에서 인기를 끌고 있으며, SNS에서 바이럴되는 경우도 많습니다. 앞으로 로컬 맛집이 더욱 다양해질 것으로 예상됩니다.",
  },
  {
    id: 5,
    title: "향플레이스 디저트",
    content:
      "감성적인 디저트와 아트라이브러리한 비주얼의 디저트가 꾸준히 인기를 끌고 있습니다...",
    fullContent:
      "감성적인 디저트와 아트라이브러리한 비주얼의 디저트가 꾸준히 인기를 끌고 있습니다. 최근에는 '고급화된 홈카페' 트렌드와 함께 디저트 문화가 더욱 발전하고 있으며, 독창적인 플레이팅과 프리미엄 재료를 사용하는 카페가 늘어나고 있습니다. 앞으로 디저트 시장이 더욱 세분화될 전망입니다.",
  },
  {
    id: 6,
    title: "메타버스가 가져올 일상의 변화",
    content:
      "가상 현실과 증강 현실 기술이 발전하면서 메타버스가 우리 생활의 중요한 부분이 되고 있습니다...",
    fullContent:
      "가상 현실과 증강 현실 기술이 발전하면서 메타버스가 우리 생활의 중요한 부분이 되고 있습니다. 특히, 가상 오피스, 가상 쇼핑, 가상 콘서트와 같은 서비스가 증가하면서 메타버스의 경제적 가치가 커지고 있습니다. 앞으로 더 많은 기업들이 메타버스 기술을 활용할 것으로 예상됩니다.",
  },
  {
    id: 7,
    title: "전기차 충전 인프라 확장",
    content:
      "전기차 보급이 증가함에 따라 충전 인프라 확대가 중요한 과제로 떠오르고 있습니다...",
    fullContent:
      "전기차 보급이 증가함에 따라 충전 인프라 확대가 중요한 과제로 떠오르고 있습니다. 정부와 민간 기업들이 협력하여 전국적으로 초고속 충전소를 구축하고 있으며, 가정용 충전 시스템도 점점 보급되고 있습니다. 향후 친환경 모빌리티 산업의 성장이 더욱 가속화될 것으로 보입니다.",
  },
  {
    id: 8,
    title: "핀테크가 바꾸는 금융의 미래",
    content:
      "비대면 금융 서비스가 급속도로 발전하면서 핀테크 산업이 전통 금융 시장을 변화시키고 있습니다...",
    fullContent:
      "비대면 금융 서비스가 급속도로 발전하면서 핀테크 산업이 전통 금융 시장을 변화시키고 있습니다. 모바일 뱅킹, 디지털 자산 관리, 블록체인 기반 결제 시스템 등 새로운 금융 서비스가 등장하고 있으며, 향후 금융업계는 AI와 빅데이터를 활용한 맞춤형 금융 서비스로 진화할 전망입니다.",
  },
  {
    id: 9,
    title: "스마트 홈 기술의 현재와 미래",
    content:
      "스마트 홈 기기가 점점 보편화되면서 우리의 생활 방식이 변화하고 있습니다...",
    fullContent:
      "스마트 홈 기기가 점점 보편화되면서 우리의 생활 방식이 변화하고 있습니다. IoT 기술을 활용한 스마트 냉장고, AI 음성 비서, 자동화된 보안 시스템 등이 일상 속에서 점점 더 중요한 역할을 하고 있습니다. 앞으로 스마트 홈은 더욱 편리하고 효율적인 방향으로 발전할 것입니다.",
  },
  {
    id: 10,
    title: "헬스케어 산업의 혁신",
    content:
      "AI와 빅데이터가 접목된 헬스케어 기술이 의료 산업의 혁신을 주도하고 있습니다...",
    fullContent:
      "AI와 빅데이터가 접목된 헬스케어 기술이 의료 산업의 혁신을 주도하고 있습니다. 원격 진료, AI 진단 시스템, 스마트 웨어러블 기기 등의 발전으로 의료 접근성이 향상되고 있으며, 개인 맞춤형 건강 관리가 가능해지고 있습니다. 헬스케어 산업은 앞으로도 지속적인 성장이 기대됩니다.",
  },
];


const Recommendation = () => {
  const [expandedArticle, setExpandedArticle] = useState(null);
  const [visibleArticles, setVisibleArticles] = useState(5); // 처음엔 5개만 표시
  const loadMoreRef = useRef(null); // 더보기 클릭 시 이동할 위치 참조

  const handleCardClick = (id) => {
    setExpandedArticle(expandedArticle === id ? null : id);
  };

  const handleLoadMore = () => {
    setVisibleArticles(articles.length); // 모든 기사 표시

    // 더보기 클릭 시 부드럽게 아래로 스크롤 이동
    setTimeout(() => {
      loadMoreRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 200);
  };

  return (
    <Box
      sx={{
        width: "80%",
        maxWidth: "800px",
        position: "absolute",
        top: "65%", // 기존보다 내려서 제목과 키워드가 잘 보이도록 조정
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
      }}
    >
      {/* 제목 & 키워드 */}
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
        관련기사
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" sx={{ mb: 4 }}>
        키워드1, 키워드2
      </Typography>

      {/* 기사 리스트 (처음엔 5개만 표시, 더보기 클릭 시 모든 기사 표시) */}
      {articles.slice(0, visibleArticles).map((article) => (
        <Card
          key={article.id}
          onClick={() => handleCardClick(article.id)}
          sx={{
            mt: 2,
            p: 2,
            boxShadow: 2,
            textAlign: "left",
            cursor: "pointer",
            transition: "max-height 0.5s ease-in-out",
            maxHeight: expandedArticle === article.id ? "500px" : "100px",
            overflow: "hidden",
          }}
        >
          <CardContent>
            <Typography variant="h6" fontWeight="bold">
              {article.title}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {expandedArticle === article.id ? article.fullContent : article.content}
            </Typography>
          </CardContent>
        </Card>
      ))}

      {/* 더보기 버튼 (5개씩 로드, 모든 기사가 로드되면 숨김) */}
      {visibleArticles < articles.length && (
        <Box display="flex" justifyContent="center" mt={5} ref={loadMoreRef}>
          <Button variant="contained" onClick={handleLoadMore}>
            더보기
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Recommendation;
