import { useState } from "react";
import { Typography, Box, Button, Alert } from "@mui/material";
import { NavigateNext } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
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
    const [jsonFile, setJsonFile] = useState(null);
    const [csvFile, setCsvFile] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");
    const [jsonUploadOpen, setJsonUploadOpen] = useState(false);
    const [csvUploadOpen, setCsvUploadOpen] = useState(false);
    const navigate = useNavigate();

    // JSON 파일 업로드 처리
    const handleJsonUpload = (file) => {
        console.log("JSON 파일 선택됨:", file);
        if (file) {
            const fileType = file.name.split(".").pop().toLowerCase();
            if (fileType === "json") {
                setJsonFile(file);
                setErrorMessage(""); // 오류 메시지 초기화
                setJsonUploadOpen(false); // 파일 업로드 창 닫기
            } else {
                setErrorMessage("JSON 파일만 업로드할 수 있습니다.");
            }
        }
    };

    // CSV 파일 업로드 처리
    const handleCsvUpload = (file) => {
        console.log("CSV 파일 선택됨:", file);
        if (file) {
            const fileType = file.name.split(".").pop().toLowerCase();
            if (fileType === "csv") {
                setCsvFile(file);
                setErrorMessage(""); // 오류 메시지 초기화
                setCsvUploadOpen(false); // 파일 업로드 창 닫기
            } else {
                setErrorMessage("CSV 파일만 업로드할 수 있습니다.");
            }
        }
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

        console.log("서버로 전송할 JSON 파일:", jsonFile.name);
        console.log("서버로 전송할 CSV 파일:", csvFile.name);

        try {
            const response = await axios.post("http://localhost:8080/api/upload", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            console.log("업로드 성공:", response.data);
            navigate("/interest-analysis/loading");
        } catch (error) {
            console.error("업로드 실패:", error);
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

                {/* 오류 메시지 표시 */}
                {errorMessage && <Alert severity="error" sx={{ mt: 2 }}>{errorMessage}</Alert>}

                {/* JSON 파일 업로드 버튼 */}
                <Box textAlign="center" mt={3}>
                    <AttachButton onClick={() => setJsonUploadOpen(true)} label="JSON 파일 업로드" />
                </Box>
                {jsonUploadOpen && <FileUpload onClose={() => setJsonUploadOpen(false)} onUpload={handleJsonUpload} />}

                {/* CSV 파일 업로드 버튼 */}
                <Box textAlign="center" mt={3}>
                    <AttachButton onClick={() => setCsvUploadOpen(true)} label="CSV 파일 업로드" />
                </Box>
                {csvUploadOpen && <FileUpload onClose={() => setCsvUploadOpen(false)} onUpload={handleCsvUpload} />}

                {/* "다음" 버튼 */}
                <Box textAlign="center" mt={3}>
                    <Button
                        variant="contained"
                        onClick={handleSubmit}
                        disabled={!jsonFile || !csvFile} // JSON과 CSV 파일이 모두 업로드되어야 활성화
                        sx={{
                            borderRadius: "20px",
                            backgroundColor: jsonFile && csvFile ? "#5C9ECF" : "#B0C4DE",
                            color: "white",
                            fontSize: "16px",
                            fontWeight: "bold",
                            padding: "10px 20px",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            "&:hover": {
                                backgroundColor: jsonFile && csvFile ? "#4A89C7" : "#B0C4DE",
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
