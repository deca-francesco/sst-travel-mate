import { BrowserRouter, Route, Routes } from "react-router-dom"
import TravelsPage from "./pages/TravelsPage"
import SingleTravel from "./pages/SingleTravel"


function App() {



  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TravelsPage />} />
          <Route path="/:id" element={<SingleTravel />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
