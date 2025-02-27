import { useState } from "react";
import { Typography, Box, Button } from "@mui/material";
import { NavigateNext } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import AnalysisMenu from "../../components/AnalysisMenu";
import FileUpload from "../../components/FileUpload";
import AttachButton from "../../components/AttatchButton";

// 이미지 개별 import
import procedure1 from "../../assets/menual/procedure_1.png";
import procedure3 from "../../assets/menual/procedure_3.png";
import procedure5 from "../../assets/menual/procedure_5.png";
import procedure7 from "../../assets/menual/procedure_7.png";
import procedure8 from "../../assets/menual/procedure_8.png";

// 이미지 & 설명 리스트
const steps = [
    { src: procedure1, text: "1. Google Takeout에 접속하여 시청기록을 다운받아 주세요." },
    { src: procedure3, text: "2. 69개 중 69개 선택되어 있는데, 모두 선택 해제 후, Youtube 및 Youtube Music만 체크해주세요." },
    { src: procedure5, text: "3. 여러 형식 버튼 클릭 후, 가장 아래 HTML 형식을 JSON 형식으로 변환 후 확인해주세요." },
    { src: procedure7, text: "4. 모든 Youtube 데이터 포함 버튼 클릭 후, 시청 기록만 선택해주세요." },
    { src: procedure8, text: "5. 10분 정도 후, 이메일로 전송된 파일에서 시청기록 JSON 파일을 다운로드하세요." }
];

const InterestAnalysis = () => {
    const [uploadOpen, setUploadOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <Box display="flex" p={4} mt={10}>
            {/* Left Content */}
            <Box flex={1} textAlign="left">
                <Typography variant="h4" fontWeight="bold" gutterBottom mt={5}>
                    1. Youtube 데이터 조회
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" sx={{ p: 2, mt: 2 }} gutterBottom>
                    자신의 Youtube 기록을 불러오세요.
                </Typography>

                <Typography variant="body1" color="textSecondary" sx={{ p: 2 }} gutterBottom>
                    시청 기록
                </Typography>

                {/* 이미지 & 설명 리스트 렌더링 */}
                {steps.map((step, index) => (
                    <Box key={index} sx={{ p: 2, textAlign: "left" }}>
                        <Typography variant="body1" color="textPrimary" gutterBottom sx={{ fontSize: "18px" }}>
                            {step.text}
                        </Typography>
                        <img src={step.src} alt={`절차 ${index + 1}`} style={{ width: "100%", maxWidth: "1000px" }} />
                    </Box>
                ))}

                {/* "첨부하기" 버튼 */}
                <Box textAlign="center" mt={3}>
                    <AttachButton onClick={() => setUploadOpen(!uploadOpen)} />
                </Box>

                {/* 파일 업로드 컴포넌트 */}
                {uploadOpen && <FileUpload onClose={() => setUploadOpen(false)} />}

                {/* "다음" 버튼 */}
                <Box textAlign="center" mt={3}>
                    <Button
                        variant="contained"
                        onClick={() => navigate("/interest-analysis/loading")}
                        sx={{
                            borderRadius: "20px",
                            backgroundColor: "#5C9ECF", // 원본 버튼 색상 적용
                            color: "white",
                            fontSize: "16px",
                            fontWeight: "bold",
                            padding: "10px 20px",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            "&:hover": {
                                backgroundColor: "#4A89C7",
                            },
                        }}
                    >
                        다음
                        <NavigateNext fontSize="small" />
                    </Button>
                </Box>
            </Box>

            {/* Fixed Right Menu */}
            <Box sx={{ position: "fixed", right: 20, top: 100 }}>
                <AnalysisMenu />
            </Box>
        </Box>
    );
};

export default InterestAnalysis;
