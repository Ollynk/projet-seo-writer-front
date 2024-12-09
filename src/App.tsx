import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LanguageSelector from "./components/common/LanguageSelector";

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-[#1E1B24] text-white w-full">
                <LanguageSelector />
                <HomePage />
            </div>
        </Router>
    );
}

export default App;
