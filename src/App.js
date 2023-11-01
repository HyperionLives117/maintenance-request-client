import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Container} from '@mui/material';
import {Requests} from "./pages/Requests";
import {NoContent} from "./pages/NoContent";
import {UpdateRequest} from "./pages/UpdateRequest";
import {Add} from "./pages/Add";
function App() {

  return (
    <Container maxWidth="md">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Requests />} />
          <Route path="/update/:id" element={<UpdateRequest />} />
          <Route path="/add" element={<Add />} />
          <Route path="*" element={<NoContent />} />
        </Routes>
      </BrowserRouter>
     
    </Container>
  );
}

export default App;
