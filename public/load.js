    var socket = io();
    $("#submit").click(function() { // Where the user submits the video they want to watch
        $.getJSON("https://api.ipify.org?format=jsonp&callback=?",
            function(json) {
                socket.emit('start', $("#input").val(), json.ip, Math.round(new Date().getTime()/1000.0));
                window.location.replace("play.html#" + Math.round(new Date().getTime()/1000.0));
            });

    });