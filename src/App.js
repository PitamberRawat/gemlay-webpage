import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MiddleSection from "./Components/MiddleSection";
import Navigation from "./Components/Navigation";
import Topbar from "./Components/Topbar";
import { FixedIcon, Img } from "./styledComponents/TopbarStyledComponent";
function App() {
  return (
    <>
      <Topbar />
      <Header />
      <Navigation />
      <div style={{ minHeight: "100vh" }}>
        <MiddleSection />
      </div>

      <Footer />

      <footer
        style={{
          padding: "15px 20px",
          textAlign: "center",
          borderTop: "1px solid rgb(231, 231, 231)",
          background:
            "linear-gradient(rgb(1, 36, 51) 0%, rgb(0, 122, 100) 100%)",
          color: "rgb(255, 255, 255)",
          fontSize: "12px",
          fontWeight: "500",
          lineHeight: "normal",
        }}
      >
        Copyright © Gemlay 2024
      </footer>

      <FixedIcon>
        <Img
          width="50"
          height="50"
          src="https://image.crisp.chat/avatar/website/d8a1a423-c25c-443b-be17-6b67fc8e9bda/120/?1715104326085"
        ></Img>
      </FixedIcon>
    </>
  );
}

export default App;
