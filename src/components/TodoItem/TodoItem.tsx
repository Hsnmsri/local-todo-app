import { Box, Button, Paper, Typography } from "@mui/material";
import type Todo from "../../models/Todo.model";

export default function TodoItem({ todoItem, onDone, onRestore }: { todoItem: Todo, onDone: (id: string) => void, onRestore: (id: string) => void }) {
    return (
        <Paper sx={{ p: 2, backgroundColor: todoItem.color }}>
            <Typography variant="h5" sx={{ textDecoration: todoItem.completedAt != null ? 'line-through' : 'none' }}>
                {todoItem.text}
            </Typography>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                minHeight: 'fit-content',
                maxHeight: '150px',
            }}>
                <Typography variant="body2" color="gray" sx={{
                    paddingRight: '10px',
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                }}>{(new Date(todoItem.createdAt)).toDateString()}</Typography>
                {todoItem.completedAt == null &&
                    <Button variant="contained" onClick={() => { onDone(todoItem.id) }}>
                        Done
                    </Button>
                }
                {todoItem.completedAt != null &&
                    <Button variant="outlined" onClick={() => { onRestore(todoItem.id) }}>
                        Restore
                    </Button>
                }
            </Box>
        </Paper>
    )
}