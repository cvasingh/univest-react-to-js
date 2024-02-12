
import { createRoot } from 'react-dom/client';
import MainComponent from './gcms';
import { useEffect } from 'react';


// Render your React component instead
const root = createRoot(document.getElementById('gcms-timelines'));

function AppWithCallbackAfterRender() {
    useEffect(() => {
        console.log('rendered');
    });

    return <MainComponent />
}
root.render(<AppWithCallbackAfterRender />);