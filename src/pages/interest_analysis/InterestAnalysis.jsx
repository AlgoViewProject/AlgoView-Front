import { useState } from "react";
import { Typography, Box, Button, Alert } from "@mui/material";
import { NavigateNext } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
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
    const [jsonFile, setJsonFile] = useState(null);
    const [csvFile, setCsvFile] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");
    const [uploadOpen, setUploadOpen] = useState(false);
    const navigate = useNavigate();

    // 파일 업로드 처리
    const handleFileUpload = (files) => {
        if (files.length !== 2) {
            setErrorMessage("JSON과 CSV 파일을 모두 선택해야 합니다.");
            return;
        }

        let json = null;
        let csv = null;

        files.forEach((file) => {
            const fileType = file.name.split(".").pop().toLowerCase();
            if (fileType === "json") json = file;
            if (fileType === "csv") csv = file;
        });

        if (!json || !csv) {
            setErrorMessage("JSON과 CSV 파일을 각각 하나씩 선택해야 합니다.");
            return;
        }

        setJsonFile(json);
        setCsvFile(csv);
        setErrorMessage(""); // 오류 메시지 초기화
        setUploadOpen(false); // 업로드 창 닫기
    };

    // 업로드된 파일을 서버로 전송
    const handleSubmit = async () => {
        if (!jsonFile || !csvFile) {
            setErrorMessage("JSON과 CSV 파일을 모두 업로드해야 합니다.");
            return;
        }

        const formData = new FormData();
        formData.append("historyFile", jsonFile);
        formData.append("subscriptionsFile", csvFile);

        try {
            const response = await axios.post("http://localhost:8080/api/upload", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            navigate("/interest-analysis/loading");
        } catch (error) {
            setErrorMessage("파일 업로드 중 오류가 발생했습니다.");
        }
    };

    return (
        <Box display="flex" p={4} mt={10}>
            {/* Left Content */}
            <Box flex={1} textAlign="left">
                <Typography variant="h4" fontWeight="bold" gutterBottom mt={5}>
                    1. Youtube 데이터 조회
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

                {/* 오류 메시지 표시 */}
                {errorMessage && <Alert severity="error" sx={{ mt: 2 }}>{errorMessage}</Alert>}

                {/* 파일 업로드 버튼 */}
                <Box textAlign="center" mt={3}>
                    <AttachButton onClick={() => setUploadOpen(true)} label="파일 업로드" />
                    {jsonFile && csvFile && (
                        <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                            업로드된 파일: {jsonFile.name}, {csvFile.name}
                        </Typography>
                    )}
                </Box>
                {uploadOpen && <FileUpload onClose={() => setUploadOpen(false)} onUpload={handleFileUpload} />}

                {/* "다음" 버튼 */}
                <Box textAlign="center" mt={3}>
                    <Button variant="contained" onClick={handleSubmit} disabled={!jsonFile || !csvFile}>
                        다음
                        <NavigateNext fontSize="small" />
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default InterestAnalysis;
