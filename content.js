chrome.runtime.onMessage.addListener((message) => {

    // console.log('message.task', message.task);

    switch(message.task) {
        case 'pause_play':
            doPausePlay();
            break;

        case 'rewind':
            doRewind();
            break;

        case 'forward':
            doForward();
            break;
    }
});

function doPausePlay() {
    const video = getVideo();
    if (!video) return;

    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function doRewind() {
    const video = getVideo();
    if (!video) return;

    video.currentTime -= 5;
}

function doForward() {
    const video = getVideo();
    if (!video) return;

    // console.log('forward');

    video.currentTime += 5;
}

function getVideo() {
    return document.evaluate('//video', document).iterateNext();
}