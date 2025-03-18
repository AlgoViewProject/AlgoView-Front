import { useState } from "react";
import { Typography, Button, Paper, List, ListItem, ListItemText } from "@mui/material";

const FileUpload = ({ onClose, onUpload }) => {
    const [files, setFiles] = useState([]);

    const handleFileChange = (event) => {
        const selectedFiles = Array.from(event.target.files).slice(0, 2); // 최대 2개 파일 선택
        setFiles(selectedFiles);
    };

    const handleUpload = () => {
        if (files.length === 2) {
            console.log("Uploading files:", files);
            onUpload(files); // 부모 컴포넌트로 파일 전달
            onClose(); // 업로드 창 닫기
        }
    };

    return (
        <Paper elevation={3} sx={{ p: 4, mt: 3, display: "inline-block", width: "400px" }}>
            <Typography variant="h6" gutterBottom>
                파일 업로드
            </Typography>
            <input type="file" multiple accept=".json,.csv" onChange={handleFileChange} />
            {files.length > 0 && (
                <List>
                    {files.map((file, index) => (
                        <ListItem key={`${file.name}-${index}`}>
                            <ListItemText primary={file.name} />
                        </ListItem>
                    ))}
                </List>
            )}
            <Button
                variant="contained"
                color="primary"
                onClick={handleUpload}
                sx={{ mt: 2 }}
                disabled={files.length !== 2} // 2개 파일 선택해야 업로드 가능
            >
                업로드
            </Button>
            <Button variant="text" color="secondary" onClick={onClose} sx={{ mt: 2, ml: 2 }}>
                닫기
            </Button>
        </Paper>
    );
};

export default FileUpload;
