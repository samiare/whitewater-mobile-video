# Whitewater Player

A Javascript library for playing videos encoded with [Whitewater Encoder](https://github.com/samiare/whitewater-encoder).

[See it in action](https://samiare.github.io/whitewater-player).

## Description

Together, [Whitewater Encoder](https://github.com/samiare/whitewater-encoder) and Whitewater Player give you the ability to play inline video in mobile web browsers complete with programatic playback controls and events.

## Basic Usage

```javascript
var video = new Whitewater(canvas, source [, options]);
```


### Example

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


## Initialization Options

Option | Type | Default | Description
------ | :--: | :-----: | -----------
`loop` | `bool` | `false` | If set to `true`, the video will start over from the beginning when it reaches the end.
`autoplay` | `bool` | `false` | If set to `true`, the video will automatically play once it's assets are loaded.
`controls` | `bool`/`element` | `false` | When set to `true`, clicking/tapping on the `<canvas>` will play/pause the video. Optionally, `controls` can be set to an HTML element to be used as the play/pause control.
`speed` | `float` (between `0.0` and `1.0`) | `1.0` | Allows you to slow the video down by the given amount (`0.5` = half speed).


## Methods

Method | Description
------ | -----------
`play()` | Starts or resumes playback.
`pause()` | Pauses the video.
`playpause()` | Plays the video if it is paused and playable. Pauses the video if it is playing.
`stop()` | Stops and resets the video to frame 0.


## Full Documentation

[Check out the wiki](https://github.com/samiare/whitewater-player/wiki).

✌︎
