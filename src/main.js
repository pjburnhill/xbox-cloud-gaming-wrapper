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
const appIcon = path.join(__dirname, 'icons/win/icon.ico');

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
    //fullscreen: true,
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

// ====================================================
// App whenReady -- https://www.electronjs.org/docs/api/app#appwhenready
// ====================================================

app.whenReady().then(() => {

   app.setUserTasks([]);
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
/*
  win.on('minimize', function (event) {
    event.preventDefault();
    win.hide();
  });

   win.on('close', function (event) {
    if (!app.isQuiting) {
      event.preventDefault();
      win.hide();
    }
    return false;
  }); */

  // ==============================================
  // Tray icon -- https://www.electronjs.org/docs/api/tray
  // ==============================================

/* 
  tray = new Tray(appIcon);

  var contextMenu = Menu.buildFromTemplate([
    {
      label: 'Quit',
      click() {
        app.isQuiting = true;
        app.quit();
      }
    }
  ]);

  tray.setContextMenu(contextMenu);
  tray.setToolTip('Xbox Cloud Gaming');

  // Ignore double click events for the tray icon
  tray.setIgnoreDoubleClickEvents(true);

  // Click tray icon to show window
  tray.on('click', toggleVisibility);
 */

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

app.on(
  "window-all-closed",
  () => process.platform !== "darwin" && app.quit() // "darwin" targets macOS only.
);