// MyComponent.js
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';


"use client"
import React from 'react'
import 'react-tooltip/dist/react-tooltip.css'
import './output.css';
import './input.css';
import './index.css';

export default function MainComponent() {
    return (
        <Router>
            <Routes>
                <Route path=":userId" element={<User />} />
                <Route path="/agent-test/:userId" element={<User />} />
            </Routes>
        </Router>
    )
}
function User() {
    let { userId } = useParams();

    return <h2>User ID: {userId}</h2>;
}

window.addEventListener('load', () => {
    ReactDOM.render(<MainComponent />, document.getElementById('agent'));
});
