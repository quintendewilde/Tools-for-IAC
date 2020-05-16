var osc = require("osc");


var udpPort = new osc.UDPPort({
    // This is the port we're listening on.
    localAddress: "192.168.1.23",
    localPort: 4560,

    // This is where sclang is listening for OSC messages.
    remoteAddress: "192.168.1.23",
    remotePort: 4560,
    metadata: true
});


// Open the socket.
udpPort.open();

// Every second, send an OSC message to SuperCollider
setInterval(function() {
 
    var msg = {
        address: "/osc/trigger/prophet",
        args: [
            {
                type: "f",
                value: Math.random()
            },
            {
                type: "f",
                value: Math.random()
            }
        ]
    };

    console.log("Sending message", msg.address, msg.args, "to", udpPort.options.remoteAddress + ":" + udpPort.options.remotePort);
    udpPort.send(msg);
}, 5000);
