import { BrowserRouter, Route, Routes } from "react-router-dom"

import { AccountPage } from "./pages/Account"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AccountPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
