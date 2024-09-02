import { ThemeProvider } from "@mui/material";
import CalendarView from "./calendar/CalendarView";
import { theme } from "./theme";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<CalendarView />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
