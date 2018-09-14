### :warning: IMPORTANT UPDATE :warning:

This project (and the corresponding [encoder](https://github.com/samiare/whitewater-encoder)) are **no longer maintained**.

This was an enormously fun project to create, but I never had adequate time for updates and it was made almost immediately obsolete by the adoption of auto-play HTML5 video in most mobile web browsers soon after it's initial release.

# [Whitewater Mobile Video](http://samiare.github.io/whitewater-mobile-video/)

A new encoding system for playing inline videos on the mobile web.

1. **Whitewater Player**
   
   A Javascript library for playing videos prepared by encoder (standard video files will not work). It offer a flexible API with playback methods, data about the current video and events.
   
2. **Whitewater Encoder**
   
   A command line tool and Python module that encodes videos into a bundle of files that can be read by the player to recrate video in an HTML `<canvas>` tag.
   
   **→ [View on GitHub](https://github.com/samiare/whitewater-encoder)**


# Features and Limitations

## 😀

- **Can** play, pause and stop video on mobile
- **Can** slow down video
- **Can** expose DOM events for developer use
- **Can** encode videos with various compression settings
- **Can** be used as a Python module in your own programs

## 😞

- **Cannot** seek to arbitrary points within a video
- **Cannot** play in reverse
- **Cannot** play audio


# Quick Start

## Manual Download

1. [Download the latest build](https://github.com/samiare/whitewater-mobile-video/releases/latest)
2. Unpack `whitewater.zip` it and copy `whitewater.min.js` into your project files
3. Include `whitewater.min.js` at the end of your `<body>`:
   `<script src="path/to/whitewater.min.js"></script>`
4. Initialize an instance of `Whitewater()`.

>Note: To play videos, they must first be encoded with [Whitewater Encoder](https://github.com/samiare/whitewater-encoder).


## Initializing Videos

```javascript
var video = new Whitewater(canvas, source [, options]);
```

**Example**

```html
<canvas id="video"></canvas>

<script>
    var canvas = document.getElementById('video');
    var source = 'path/to/video/';
    var options = {
        autoplay: true,
        loop: true,
        controls: true
    }
    var video = new Whitewater(canvas, source, options);
</script>
```

→ Initialization options and usage details can be found in the **[Player Documentation](https://github.com/samiare/whitewater-mobile-video/wiki)**.
