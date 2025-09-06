import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import type { RootState } from "../../stores/store";
import AddTodoButton from "../AddTodoButton/AddTodoButton";

export default function Navbar() {
    const navTitle = useSelector((state: RootState) => state.appTitle.text);

    return (
        <Box position="sticky" top={0} left={0}
            sx={{ paddingRight:2,paddingY: 3, display: 'flex', alignItems: 'center', justifyContent: { xs: 'space-between', md: 'start' } }}>
            <Typography variant="h1" sx={{ fontSize: "30px", fontWeight: 400 }}>
                {navTitle}
            </Typography>
            <Box sx={{ marginLeft: { xs: '20px' } }}>
                <AddTodoButton />
            </Box>
        </Box>
    )
}