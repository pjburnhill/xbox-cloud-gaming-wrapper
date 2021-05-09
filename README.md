# Xbox Cloud Gaming wrapper
Electron wrapper for Xbox Cloud Gaming (xbox.com/play)

----

## About

Simple native Electron wrapper for [xbox.com/play](xbox.com/play)

## Features

* Alt-Enter - Toggle fullscreen
* Escape - Minimize

## Why?

* Less memory usage than vanilla Chrome
* No extensions or other junk
* Future optimisation via Chromium tweaking
* Because..

## Build & Make

```sh
npm install

# run app
npm start

# Windows - package and create installer to ./out
npm run make

# OSX - package and create zip to ./out -- Untested!
npm run make-mac
```

## Install

After ``make`` run the installer in ``./out`` folder

On Windows, the app is installed to ``%LocalAppData%\xbox_cloud_gaming_wrapper\`` and desktop shortcut is added

Uninstalled via usual windows app uninstall process

## Todo

* Not tested on Mac/Linux
* Find ways to optimise chromium for game streaming (flags etc)
* Auto updater
* Some UI fixes (logos etc)
