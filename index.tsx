/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors*
 * SPDX-License-Identifier: GPL-3.0-or-later
 */
function definePlugin(plugin: any): any {
    return plugin;
}

// Function to find the camera
function findCameraButton(): HTMLElement | null {
    const button = Array.from(document.querySelectorAll("button")).find(
        (el) =>
            el
                .getAttribute("aria-label")
                ?.toLowerCase()
                .includes("turn on camera") ||
            el
                .getAttribute("aria-label")
                ?.toLowerCase()
                .includes("turn off camera") ||
            el
                .getAttribute("aria-label")
                ?.toLowerCase()
                .includes("włącz kamerę") ||
            el
                .getAttribute("aria-label")
                ?.toLowerCase()
                .includes("wyłącz kamerę")
    ) as HTMLElement | null;

    if (!button) {
        console.error("Camera button not found.");
        return null;
    }

    return button;
}

// Function to toggle the camera on/off
function toggleCamera(): void {
    const cameraButton = findCameraButton();

    if (!cameraButton) {
        console.error("Camera button was not found.");
        return;
    }

    cameraButton.click();
}

export default definePlugin({
    name: "ToggleCameraPlugin",
    description:
        "A plugin to toggle the camera on and off using a CTRL+SHIFT+K shortcut.",
    authors: [{ name: "Morki", id: 594920262764331009n }],

    start() {
        // Registering Ctrl + Shift + K shortcut
        document.addEventListener("keydown", (event: KeyboardEvent) => {
            if (event.ctrlKey && event.shiftKey && event.key === "K") {
                toggleCamera();
            }
        });
    },

    stop() {
        console.log("Plugin has been deactivated.");
    },
});
