// import App from "./containers/app";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, NotFound,Profile,Settings } from "./pages";

// export default App

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path='profile' element={<Profile />} />
                <Route path='settings' element={<Settings />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

// const App = Routing;

export default App