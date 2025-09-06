import { Box } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../stores/store";
import { show } from "../../features/newTodoModalVisibility/newTodoModalVisibility";

export default function AddTodoButton() {
    const dispatch = useDispatch<AppDispatch>();

    return (
        <Box onClick={() => dispatch(show())} sx={{
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'yellow',
            borderRadius: '100vw',
            width: '32px',
            height: '32px',
            cursor: 'pointer'
        }} title="Add new todo">
            <AddIcon sx={{ color: "black" }} />
        </Box>
    )
}