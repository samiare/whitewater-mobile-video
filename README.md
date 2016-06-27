**→ [Full Documentation](https://github.com/samiare/whitewater-player/wiki)**  
**→ [Whitewater Encoder](https://github.com/samiare/whitewater-player)** (needed to prepare videos)  
**→ [Example Site](https://samiare.github.io/whitewater-player/)**


# Quick Start

1. [Download the latest build](https://github.com/samiare/whitewater-player/releases/latest)
2. Unpack `whitewater.zip` it and copy `whitewater.min.js` into your project files
3. Include `whitewater.min.js` at the end of your `<body>`:
   `<script src="path/to/whitewater.min.js"></script>`
4. Initialize an instance of `Whitewater()`.

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

Initialization options and usage details can be found in [the documentation](https://github.com/samiare/whitewater-player/wiki).