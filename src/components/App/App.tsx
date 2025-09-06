import { Box } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import TodoList from "../TodoList/TodoList";
import NewTodoModal from "../NewTodoModal";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../stores/store";
import { hide } from "../../features/newTodoModalVisibility/newTodoModalVisibility";

export default function App() {
    const dispatch = useDispatch<AppDispatch>();
    const newTodoModalVisibility = useSelector((state: RootState) => state.newTodoModalVisibility.visibility);

    return (
        <Box component="main" sx={{ paddingX: { xs: 2, md: 3 }, paddingY: { md: 1 } }}>
            <Navbar />
            <TodoList />
            <NewTodoModal
                key={Number((Math.random() * 1000).toFixed(0))}
                visibility={newTodoModalVisibility}
                onClose={() => dispatch(hide())}
            />
        </Box>
    )
}