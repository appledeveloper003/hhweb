/**
 * Security Restrictions
 * Disables context menu (right-click) and common developer tool shortcuts
 * to discourage viewing source code or inspecting elements.
 */

// Disable Right Click
document.addEventListener('contextmenu', event => event.preventDefault());

// Disable Keyboard Shortcuts
document.onkeydown = function(e) {
    // F12
    if(e.keyCode == 123) {
        return false;
    }
    // Ctrl+Shift+I (Inspector)
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    // Ctrl+Shift+J (Console)
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    // Ctrl+U (View Source)
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
    
    // macOS Specific
    // Cmd+Option+I (Inspector)
    if(e.metaKey && e.altKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    // Cmd+Option+J (Console)
    if(e.metaKey && e.altKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    // Cmd+Option+U (View Source)
    if(e.metaKey && e.altKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}
