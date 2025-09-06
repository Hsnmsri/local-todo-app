import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../stores/store";
import TodoItem from "../TodoItem/TodoItem";
import { completeTodo, uncompleteTodo } from "../../features/todo/todo";
import { Grid } from "@mui/material";

export default function TodoList() {
    const todos = useSelector((state: RootState) => state.todos);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <Grid container spacing={2}>
            {todos.map((todo) => (
                <Grid key={todo.id} size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 'auto' }} sx={{ maxWidth: '300px' }}>
                    <TodoItem
                        todoItem={todo}
                        onDone={() => dispatch(completeTodo({ id: todo.id }))}
                        onRestore={() => dispatch(uncompleteTodo({ id: todo.id }))}
                    />
                </Grid>
            ))}
        </Grid>
    );
}
