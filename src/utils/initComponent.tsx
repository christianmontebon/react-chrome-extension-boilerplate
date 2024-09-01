import React from "react";
import { createRoot } from "react-dom/client";
import '../assets/tailwind.css';

export function initComponent(Component: React.FC) {
    const appContainer = document.createElement('div');
    document.body.appendChild(appContainer);

    if (!appContainer) {
        throw new Error("Cannot find AppContainer");
    }

    const root = createRoot(appContainer);
    root.render(<Component />);
}