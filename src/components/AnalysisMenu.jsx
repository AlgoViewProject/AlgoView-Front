// import React from 'react';
import { Card, CardContent, Typography, List, ListItem, Divider } from "@mui/material";

const AnalysisMenu = () => {
    return (
        <Card sx={{ width: 250, p: 5, m: 5, boxShadow: 3, borderRadius: 2 }}>
            <CardContent>
                <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                    Youtube 데이터 조회
                </Typography>
                <Divider sx={{ my: 1 }} />
                <List>
                    <ListItem button>
                        <Typography variant="body1" fontWeight="bold">
                            메뉴얼
                        </Typography>
                    </ListItem>
                    <Divider sx={{ my: 1 }} />
                    <ListItem button>
                        <Typography variant="body1" fontWeight="bold">
                            파일 첨부하기
                        </Typography>
                    </ListItem>
                </List>
            </CardContent>
        </Card>
    );
};

export default AnalysisMenu;