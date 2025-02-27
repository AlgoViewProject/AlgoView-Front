import { useState } from 'react';
import { Typography, Button,  Paper, List, ListItem, ListItemText } from "@mui/material";

const FileUpload = ({ onClose }) => {
    const [files, setFiles] = useState([]);

    const handleFileChange = (event) => {
        const selectedFiles = Array.from(event.target.files).slice(0, 3); // 최대 3개 파일 업로드 가능
        setFiles(selectedFiles);
    };

    const handleUpload = () => {
        if (files.length > 0) {
            console.log("Uploading files:", files);
            // 파일 업로드 로직 추가
        }
    };

    return (
        <Paper elevation={3} sx={{ p: 4, mt: 3, display: "inline-block", width: "400px" }}>
            <Typography variant="h6" gutterBottom>
                파일 업로드
            </Typography>
            <input type="file" multiple onChange={handleFileChange} />
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
                disabled={files.length === 0}
            >
                업로드
            </Button>
            <Button
                variant="text"
                color="secondary"
                onClick={onClose}
                sx={{ mt: 2, ml: 2 }}
            >
                닫기
            </Button>
        </Paper>
    );
};

export default FileUpload;