import React, { useState } from "react";
import { Box, TextField, Button, InputLabel, IconButton, Tooltip, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import PaletteIcon from "@mui/icons-material/Palette";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../stores/store";
import { addTodo } from "../features/todo/todo";

export default function NewTodoForm({ onClose }: { onClose: () => void }) {
    const dispatch = useDispatch<AppDispatch>();

    const [text, setText] = useState<string>("");
    const [color, setColor] = useState<string | null>(null);
    const [showColorPicker, setShowColorPicker] = useState(false);

    const handleSubmit = (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        const trimmed = text.trim();
        if (!trimmed) return;

        dispatch(addTodo({ text: trimmed, color }));

        // clear form
        setText("");
        setColor(null);
        setShowColorPicker(false);
        onClose();
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
                alignItems: "center",
                width: "100%",
            }}
        >
            <TextField
                label="Todo"
                value={text}
                onChange={(e) => setText(e.target.value)}
                fullWidth
                size="small"
                variant="outlined"
                autoComplete="off"
            />

            <Box sx={{ display: "flex", alignItems: "center", width: '100%', paddingY: '8px' }}>
                <Tooltip title="Choose color">
                    <IconButton
                        onClick={() => setShowColorPicker((s) => !s)}
                        size="small"
                        aria-label="toggle color picker"
                    >
                        <PaletteIcon />
                    </IconButton>
                </Tooltip>

                {/* color preview / reset */}
                <Box
                    sx={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        border: "1px solid rgba(0,0,0,0.2)",
                        bgcolor: color ?? "transparent",
                    }}
                />
                {showColorPicker && (
                    <Box sx={{ position: "relative" }}>
                        <InputLabel sx={{ display: "none" }}>color</InputLabel>
                        <input
                            aria-label="todo-color"
                            type="color"
                            value={color ?? "#000000"}
                            onChange={(e) => setColor(e.target.value)}
                            style={{
                                width: 40,
                                height: 36,
                                border: "none",
                                background: "transparent",
                                cursor: "pointer",
                            }}
                        />
                        <Button
                            size="small"
                            onClick={() => setColor(null)}
                            sx={{ ml: 1 }}
                        >
                            Clear
                        </Button>
                    </Box>
                )}
            </Box>

            <Box sx={{
                width: "100%",
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Button
                    onClick={() => onClose()}
                    type='button'
                    variant="contained"
                    size="small"
                    sx={{
                        backgroundColor: 'darkred',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Typography component='span' sx={{ 'fontSize': '0.9rem', marginTop: '3px', paddingX: '3px' }}>
                        Cancel
                    </Typography>
                </Button>
                <Button
                    type="submit"
                    variant="contained"
                    size="small"
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    disabled={text.trim() === ""}
                >
                    <AddIcon />
                    <Typography component='span' sx={{ 'fontSize': '0.9rem', marginTop: '3px', paddingX: '3px' }}>
                        Add
                    </Typography>
                </Button>
            </Box>
        </Box>
    );
}
