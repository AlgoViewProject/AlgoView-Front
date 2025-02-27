import { Button } from "@mui/material";
import { ArrowForward, InsertDriveFile } from "@mui/icons-material";

const AttachButton = ({ onClick }) => {
    return (
        <Button
            onClick={onClick}
            variant="outlined"
            sx={{
                borderRadius: "20px",
                borderColor: "black",
                color: "black",
                padding: "10px 20px",
                fontSize: "16px",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                "&:hover": {
                    backgroundColor: "#f5f5f5",
                    borderColor: "black",
                },
            }}
        >
            첨부하기
            <InsertDriveFile fontSize="small" />
            <ArrowForward fontSize="small" />
        </Button>
    );
};

export default AttachButton;
