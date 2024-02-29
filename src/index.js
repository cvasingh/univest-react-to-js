
import { createRoot } from 'react-dom/client';
import MainComponent from './study-permit';


// Render your React component instead
const root = createRoot(document.getElementById('gcms-timelines'));

function AppWithCallbackAfterRender() {

    return <MainComponent />
}
root.render(<AppWithCallbackAfterRender />);