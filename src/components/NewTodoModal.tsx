import { Box, Modal } from "@mui/material";
import NewTodoForm from "./NewTodoForm";

export default function NewTodoModal({ onClose, visibility }: { onClose: () => void, visibility: boolean }) {
    return (
        <Modal
            open={visibility}
            onClose={onClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: 'center'
            }}
        >
            <Box sx={{
                position: 'absolute',
                bgcolor: 'background.paper',
                boxShadow: 24,
                paddingX: "30px",
                paddingY: "40px",
                borderRadius: "7px",
                maxWidth: {
                    xs: "90vw",
                    md: "450px"
                }
            }}>
                <NewTodoForm key={Number((Math.random() * 1000).toFixed(0))} onClose={onClose} />
            </Box>
        </Modal>
    )
}