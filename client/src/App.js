import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "scenes/homePage";
import LoginPage from "scenes/loginPage";
import ProfilePage from "scenes/profilePage";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import { ThemeProvider } from "@emotion/react";




function App() {
  const mode = useSelector((state) => state.mode); // grabs the mode from the store in state/index.js
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]); // creates a theme based on the mode
  return (
  <div className="App">
    <BrowserRouter>
    <ThemeProvider theme={theme}>
    <CssBaseline />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile/:userId" element={<ProfilePage />} />
      </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </div>
  );
}

export default App;
