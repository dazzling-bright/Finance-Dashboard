import { Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Sidebar from "./components/sidebar";
import Dashboard from "./pages/dashboard";
import Expenses from "./pages/expense";
import Income from "./pages/income";

const App = () => {
  return (
    <Box display="flex">
      <Sidebar />
      <Box flex="1" p="4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/income" element={<Income />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default App;
