import { Button } from "@mui/material";

const ShareButton = ({ title, text, url }) => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url,
        });
        console.log("콘텐츠 공유 성공!");
      } catch (error) {
        console.error("공유 취소됨 또는 오류 발생:", error);
      }
    } else {
      alert("이 브라우저에서는 공유 기능을 지원하지 않습니다.");
    }
  };

  return (
    <Button variant="contained" color="secondary" onClick={handleShare}>
      결과 공유하기
    </Button>
  );
};

export default ShareButton;
