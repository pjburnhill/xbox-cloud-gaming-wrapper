// Squirrel startup init (Desktop icon etc)
if (require('electron-squirrel-startup')) return;

const {
  app,
  globalShortcut,
  Menu,
  Tray,
  BrowserWindow,
  session
} = require('electron')
const path = require('path')

let win; // container for BrowserWindow
let tray = null;
const appIcon = path.join(__dirname, '../assets/icon.ico');
const gotTheLock = app.requestSingleInstanceLock();

// ===========================================
// Helper functions
// ===========================================

function toggleVisibility() {
  if (win.isVisible()) {
    win.hide();
  } else {
    win.show();
  }
}

function toggleFullscreen() {
  if (win.isFullScreen()) {
    win.setFullScreen(false);
  } else {
    win.setFullScreen(true);
  }
}

// =========================================
// Init BrowserWindow -- https://www.electronjs.org/docs/api/browser-window
// =========================================

function createWindow() {
  win = new BrowserWindow({
    width: 1280,
    height: 720,
    backgroundColor: '#fff',
    center: true,
    fullscreen: true,
    title: 'Xbox Cloud Gaming',
    icon: appIcon,
    disableAutoHideCursor: true,
    autoHideMenuBar: true,
    titleBarStyle: 'hidden',
    spellcheck: false,
    webPreferences: {
      //preload: path.join(__dirname, 'preload.js')
    }
  });

  win.removeMenu();
  win.webContents.userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36";
  win.loadURL('https://www.xbox.com/play');

}

// =========================================
// Only single instance allowed -- https://www.electronjs.org/docs/api/app#apprequestsingleinstancelock
//==========================================

if (!gotTheLock) {
  app.quit()
} else {
  app.on('second-instance', (event, commandLine, workingDirectory) => {
    // Someone tried to run a second instance, we should focus our window.
    if (win) {
      if (win.isMinimized()) win.restore()
      win.focus()
    }
  })

  // ====================================================
  // App whenReady -- https://www.electronjs.org/docs/api/app#appwhenready
  // ====================================================

  app.whenReady().then(() => {

    createWindow();


    // ==============================================
    // Events -- https://www.electronjs.org/docs/api/app#events
    // ==============================================

    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
      }
    });

    win.on('page-title-updated', (evt) => {
      evt.preventDefault();
    });

    // ==================================================
    // Keyboard shortcuts -- https://www.electronjs.org/docs/tutorial/keyboard-shortcuts
    // ==================================================

    globalShortcut.register('Alt+Enter', () => {
      toggleFullscreen();
    })

    globalShortcut.register('Escape', () => {
      win.minimize();
    })



  }); // End app initialised
}
app.on(
  "window-all-closed",
  () => process.platform !== "darwin" && app.quit() // "darwin" targets macOS only.
);