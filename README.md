# Whitewater Player

Whitewater is a solution to some of the limitations of mobile HTML5 video, including lack of inline playback and hit-or-miss implementation of HTML5 Video's Javascript API. It consists of two parts.

1. **Whitewater Encoder**
   
   A command line tool that encodes videos into a bundle of files that can be read by the player to recrate video in an HTML `<canvas>` tag.

2. **Whitewater Player**
   
   A Javascript library that offers and API for playing Whitewater videos.

[See it in action](https://samiare.github.io/whitewater-player).


## Initializing Videos

**Interface**

```javascript
var video = new Whitewater(canvas, source [, options]);
```

**Initialization Options**

Option | Type | Default | Description
------ | :--: | :-----: | -----------
`loop` | `bool` | `false` | If set to `true`, the video will start over from the beginning when it reaches the end.
`autoplay` | `bool` | `false` | If set to `true`, the video will automatically play once it's assets are loaded.
`controls` | `bool`/`element` | `false` | When set to `true`, clicking/tapping on the `<canvas>` will play/pause the video. Optionally, `controls` can be set to an HTML element to be used as the play/pause control.
`speed` | `float` (between `0.0` and `1.0`) | `1.0` | Allows you to slow the video down by the given amount (`0.5` = half speed).

**Example:**

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

[More examples](https://github.com/samiare/whitewater-player/wiki/Usage#examples).


## Controlling Playback

These methods work on both the object returned by `new Whitewater()` and the `<canvas>` element that Whitewater is initialize dwith.

Method | Description
------ | -----------
`play()` | Starts or resumes playback.
`pause()` | Pauses the video.
`playpause()` | Plays the video if it is paused and playable. Pauses the video if it is playing.
`stop()` | Stops and resets the video to frame 0.


## More

* Detailed documentation is available at the [Whitewater Player Wiki](https://github.com/samiare/whitewater-player/wiki)
* Download the [latest build](https://github.com/samiare/whitewater-player/releases/latest)
* Visit [Whitewater Encoder](https://github.com/samiare/whitewater-encoder) for instructions on encoding videos
* Check out some [examples](https://samiare.github.io/whitewater-player/)
