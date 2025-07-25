import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
// import RestaurantDetails from "./pages/RestaurantDetails";

function App() {
    return (
        <BrowserRouter>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    // width: "80%",
                }}
            >
                <GlobalStyles />
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/restaurant/:id" element={<Details />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
