document.querySelectorAll('.tick-animation').forEach(item => {
    item.addEventListener('load', event => {

        // console.log("scrolled");

        LottieInteractivity.create({
            mode: 'scroll',
            player: item,
            // actions: [
            // {
            //     visibility: [0,1],
            //     type: 'seek',
            //     frames: [0, 121],
            // }, ],
            actions: [{
                    visibility: [0, 0.2],
                    type: "stop",
                    frames: [0]
                },
                {
                    visibility: [0.2, 1],
                    type: "seek",
                    frames: [0, 121]
                }
            ],
        });
    })
  })