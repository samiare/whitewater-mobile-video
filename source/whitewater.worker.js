
                    workerIsIncluded = true;

                    onmessage = function(e) {
                        var frames = e.data;
                        var videoData = [];

                        for (var i = 0; i < frames.length; i++) {
                            var frame = frames[i];
                            var frameData = [];

                            if (frame !== "") {
                                var map = frame.match(/.{1,5}/g);
                                var mapLength = map.length;

                                for (var j = 0; j < mapLength; j++) {
                                    var position = toBase10(map[j].substr(0, 3));
                                    var consecutive = toBase10(map[j].substr(3, 2));

                                    frameData.push([position, consecutive]);
                                }
                            }

                            videoData.push(frameData);
                        }

                        postMessage(videoData);
                    };

                    function toBase10(val) {
                        var order = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
                        var num = 0, r;
                        while (val.length) {
                            r = order.indexOf(val.charAt(0));
                            val = val.substr(1);
                            num *= 64;
                            num += r;
                        }
                        return num;
                    }
