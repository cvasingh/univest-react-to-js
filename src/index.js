import { createRoot } from "react-dom/client";
import Footer, { Header } from "./Footer";

// Render your React component instead
const root = createRoot(document.getElementById("root"));

function AppWithCallbackAfterRender() {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}
root.render(<AppWithCallbackAfterRender />);
