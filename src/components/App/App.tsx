import { useState, useEffect } from "react"
import { GamePanel } from "../GamePanel/GamePanel"
import { LoginForm } from "../LoginForm/LoginForm"
import { AuthContext } from "../Context"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"

export const App: React.FC = () => {
  const [userName, setUserName] = useState<string | null>(null)
  useEffect(() => {
    setUserName(localStorage.getItem("auth"))
  }, [])

  return (
    <AuthContext.Provider
      value={{
        userName: userName,
        setUserName: setUserName,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/game" element={<GamePanel />} />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route
            path="/login"
            element={<LoginForm onSubmit={() => setUserName("")} />}
          />
          <Route
            path="*"
            element={
              <div>
                {" "}
                <h2>404 Page not found</h2>{" "}
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}
