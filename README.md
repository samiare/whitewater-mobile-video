# Whitewater Player

Whitewater is a solution to some of the limitations of mobile HTML5 video, including lack of inline playback and hit-or-miss implementation of HTML5 Video's Javascript API. It consists of two parts.

1. **Whitewater Encoder**
   
   A command line tool that encodes videos into a bundle of files that can be read by the player to recrate video in an HTML `<canvas>` tag.

2. **Whitewater Player**
   
   A Javascript library that offers and API for playing Whitewater videos.

[See it in action](https://samiare.github.io/whitewater-player).


## Initializing Videos

```javascript
var video = new Whitewater(canvas, source [, options]);
```

Full documentation — including methods, events and attributes — can be found in [the wiki](https://github.com/samiare/whitewater-player/wiki).

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

## More

* Detailed documentation is available at the [Whitewater Player Wiki](https://github.com/samiare/whitewater-player/wiki)
* Download the [latest build](https://github.com/samiare/whitewater-player/releases/latest)
* Visit [Whitewater Encoder](https://github.com/samiare/whitewater-encoder) for instructions on encoding videos
* [See some examples in action](https://samiare.github.io/whitewater-player/)
