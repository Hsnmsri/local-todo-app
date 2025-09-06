import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#90caf9",
        },
        secondary: {
            main: "#f48fb1",
        },
        background: {
            default: "#121212",
            paper: "#1e1e1e",
        },
        text: {
            primary: "#ffffff",
            secondary: "#b0bec5",
        },
        error: {
            main: "#ef5350",
        },
        success: {
            main: "#66bb6a",
        },
    },
    shape: {
        borderRadius: 12, // rounded corners
    },
    typography: {
        fontFamily: '"Vazirmatn", "Roboto", "Arial", sans-serif',
        button: {
            textTransform: 'none'
        }
    }
});