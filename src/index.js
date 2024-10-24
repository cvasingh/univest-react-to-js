import { createRoot } from "react-dom/client";
import Footer from "./Footer";

// Render your React component instead
const root = createRoot(document.getElementById("root"));

function AppWithCallbackAfterRender() {
  return <Footer />;
}
root.render(<AppWithCallbackAfterRender />);
