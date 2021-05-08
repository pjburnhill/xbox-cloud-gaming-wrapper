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

## Build

```sh
npm install

# run app
npm start

# Windows - create installer to ./out
npm run make

# OSX - create installer to ./out -- Untested!
npm run make-mac

# On Windows, the app is installed to
%AppData%\Local\xbox_cloud_gaming_wrapper\
```

## Issues

* Not tested on Mac/Linux
* No desktop shortcut installed at the moment
