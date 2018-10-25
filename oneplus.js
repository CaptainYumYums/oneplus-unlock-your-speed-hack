const socket = require("socket.io-client")("wss://socket-unlock.oneplus.com", {
    transports: ['websocket'],
    upgrade: false
});

console.log("Connecting");

socket.on('connect', async () => {
    // Authenticate user on socket
    socket.emit('authenticate user',
                {username: "CaptainYumYums", token: "8adaeafcc97aef2c431354b7f5c7c3f0b706f5ca7a36aa32975ef92a",…}
count: 781
csrf: "HmAf65hdl1I4ZZcEpHyexGXoYvxqMDp8Xq6bAl2QzhS09o0D7i2f8PUASY5e6h7c"
locale: "en-gb"
squad: ""
token: "8adaeafcc97aef2c431354b7f5c7c3f0b706f5ca7a36aa32975ef92a"
username: "CaptainYumYums"
      
            count: '0',
            username: "anandamritraj",
            token: "YOUR_TOKEN",
            squad: "",
            locale: "en-gb",
            csrf: "YOUR_CSRF_TOKEN"

        },
        (error, data) => {
            if (error) {
                console.log(
                    'Could not authenticate user on socket connection. Error was:',
                    error,
                    data
                );
            }
            else {
                console.log("Authenticated!");
                run();
            }

        }
    );
});

emmited = 0;
/**
 * Run an infinte JS Loop
 */
async function run() {
    while (true) {
        await sleep(RandomBetween(20, 100));
        EmitTap();
        emmited += 1;
        if (emmited % 100 === 0) {
            console.log("emited: " + emmited);
        }
    }
}

/**
 * 
 * @param {time} ms 
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**{username: "CaptainYumYums", token: "8adaeafcc97aef2c431354b7f5c7c3f0b706f5ca7a36aa32975ef92a",…}
count: 781
csrf: "HmAf65hdl1I4ZZcEpHyexGXoYvxqMDp8Xq6bAl2QzhS09o0D7i2f8PUASY5e6h7c"
locale: "en-gb"
squad: ""
token: "8adaeafcc97aef2c431354b7f5c7c3f0b706f5ca7a36aa32975ef92a"
username: "CaptainYumYums"
 * Emit a tap using socket.io
 */
function EmitTap() {
    socket.emit(
        'tap_logs',
        {
            username: "anandamritraj",
            timestamp: Date.now(),
            touchX: RandomBetween(30, 970),
            touchY: RandomBetween(50, 1700)
        },
        error => {
            if (error) {
                console.error(error);
            }
        }
    );
}

/**
 * @return {number}
 */
function RandomBetween(min, max) // min and max included
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}
