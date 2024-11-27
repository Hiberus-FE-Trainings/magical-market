import { createTheme } from "@mui/material";

const magicalMarketTheme = createTheme({
  palette: {
    primary: {
      main: "#5a3e36", // Rich brown for an antique, magical feel
    },
    secondary: {
      main: "#9a784e", // Gold accents to evoke treasure and magic
    },
    background: {
      default: "#1c1b2f", // Dark, mysterious background
      paper: "#2b2a3e", // Slightly lighter for cards and containers
    },
    text: {
      primary: "#f5e8d0", // Cream-colored text for readability and theme consistency
      secondary: "#c0a57b", // Subtle, magical text accents
    },
    action: {
      hover: "#735d45", // Subtle magical glow for hover effects
    },
  },
  typography: {
    fontFamily: "Pirata One, serif", // Elegant, magical typeface
    h1: {
      fontSize: "3rem",
      color: "#ffcb42", // Golden glow for headings
      textShadow: "0 0 10px rgba(255, 203, 66, 0.8)",
    },
    h2: {
      fontSize: "2.5rem",
      color: "#f5e8d0",
    },
    body1: {
      fontSize: "1rem",
      color: "#c0a57b",
    },
    button: {
      textTransform: "none", // Naturalistic feel
      fontWeight: "bold",
      color: "#1c1b2f",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#9a784e",
          color: "#1c1b2f",
          "&:hover": {
            backgroundColor: "#735d45", // Magical hover effect
          },
          borderRadius: "20px", // Rounded edges for charm
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: "linear-gradient(145deg, #2b2a3e, #1c1b2f)", // Mystical gradient
          boxShadow: "0 4px 20px rgba(0,0,0,0.7)",
          color: "#f5e8d0",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#5a3e36", // Rich brown for navbar
          boxShadow: "0 4px 20px rgba(0,0,0,0.7)",
        },
      },
    },
  },
});

export default magicalMarketTheme;
