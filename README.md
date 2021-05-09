# Xbox Cloud Gaming wrapper

Simple native Electron wrapper for Xbox Cloud Gaming [xbox.com/play](xbox.com/play)

## Features

* Windows / Mac / Linux(?)
* Alt-Enter - Toggle fullscreen
* Escape - Minimize

## Why?

* Launches full-screen by default, great for "minumum interaction" setups
* Less memory usage than vanilla Chrome
* No extensions or other junk
* Future optimisation via Chromium tweaking
* Run from thumb drive etc
* Because..

## Requirements

* Build - [https://nodejs.org/en/](Node.js)

## Build & Make

```sh
npm install

# run app
npm start

# Windows - package and create installer to ./out
npm run make

# OSX - package and create zip to ./out
npm run make-mac
```

## Install

After ``make`` run the installer in ``./out`` folder

On Windows, the app is installed to ``%LocalAppData%\xbox_cloud_gaming_wrapper\`` and a shortcut is added to desktop

Uninstalled via usual Windows app uninstall process (Settings > Apps)

## Todo

* Not tested on Linux
* Find ways to optimize Chromium for game streaming (flags etc)
* Some UI fixes (logos, app name, etc)
* Auto updater
* App signing
* Releases
