

function clr(){
    document.getElementById("target1").innerHTML="";
}

function refresh() {
    window.location.reload();
}
function count() {
    $("#count").text($("#a_id").val().split("\n").length)
}


function gao() {
    // var word=$("#a_id").val();
    // var words=word.split("\n");
    // var wordsLength=words.length-1;
    // alert(words[1]);
    // var secc=$("#secc").val();
    // alert(secc)
}


function get_zip5_adrs(a_id) {

    var secc=$("#secc").val();
    var word=$("#a_id").val();
    var words=word.split("\n");
    var wordsLength=words.length-1;
    for (var i = 0; i <= wordsLength; i++) {
        (function(i) { // protects i in an immediately called function
            $.getJSON("https://zip5.5432.tw/zip5json.py?adrs=" + words[i] + "&jsoncallback=?",
                function (data){
                    function run() {
                        $("#target1").append(data.adrs+","+data.new_adrs+ "\n");
                    };
                    setTimeout(run,1000+secc*1500*i);
                });
        })(i);
    }


}function get_zip5_adrsSplit(a_id) {

    var secc=$("#secc").val();
    var word=$("#a_id").val();
    var words=word.split("\n");
    var wordsLength=words.length-1;
    for (var i = 0; i <= wordsLength; i++) {
        (function(i) { // protects i in an immediately called function
            $.getJSON("https://zip5.5432.tw/zip5json.py?adrs=" + words[i] + "&jsoncallback=?",
                function (data){
                    function run() {
                        var str=data.new_adrs.slice(5);
                        $("#target1").append(data.adrs+","+data.zipcode+","+str+ "\n");
                    };
                    setTimeout(run,1000+secc*1500*i);
                });
        })(i);
    }


}


function get_zip5_adrs01(a_id) {

    var secc=$("#secc").val();
    var word=$("#a_id").val();
    var words=word.split("\n");
    var wordsLength=words.length-1;
    for (var i = 0; i <= wordsLength; i++) {
        (function(i) { // protects i in an immediately called function
            $.getJSON("https://zip5.5432.tw/zip5json.py?adrs=" + words[i] + "&jsoncallback=?",
                function (data){
                    function run() {
                        $("#target1").append(data.adrs+","+data.zipcode + "\n");
                    };
                    setTimeout(run,1000+secc*1500*i);
                });
        })(i);
    }


}


function get_zip5_adrsSplitAd(a_id) {

    var secc=$("#secc").val();
    var word=$("#a_id").val();
    var words=word.split("\n");
    var wordsLength=words.length-1;
    for (var i = 0; i <= wordsLength; i++) {
        (function(i) { // protects i in an immediately called function
            $.getJSON("https://zip5.5432.tw/zip5json.py?adrs=" + words[i] + "&jsoncallback=?",
                function (data){
                    function run() {
                        var str=data.new_adrs.slice(5);
                        $("#target1").append(str+ "\n");
                    };
                    setTimeout(run,1000+secc*1500*i);
                });
        })(i);
    }


}


// 第二功能


var i;
var split;

function trans() {
    i = 0;
    $("#target").val("");
    var content = $("#source").val();
    split = content.split("\n");
    delayedLoop();
}

function delayedLoop() {
    addressToLatLng(split[i]);
    if (++i == split.length) {
        return;
    }
    window.setTimeout(delayedLoop, 1000);
}


function trans1() {
    i = 0;
    $("#target1").val("");
    var content = $("#source").val();
    split = content.split("\n");
    delayedLoop1();
}

function delayedLoop1() {
    addressToLatLng1(split[i]);
    if (++i == split.length) {
        return;
    }
    window.setTimeout(delayedLoop1, 1000);
}





function addressToLatLng(addr) {
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({
        "address": addr
    }, function (results, status) {
        if ($("#c").attr('checked'))
        {
            addr = addr + ",";
        }
        else {
            addr = "";
        }
        if (status == google.maps.GeocoderStatus.OK) {
            var content = $("#target03").val();
            $("#target03").val(content + addr + results[0].geometry.location.lng() + "\n");
        } else {
            var content = $("#target03").val();
            $("#target03").val(content + addr + "查無經度" + "\n");
        }
    });
}
function addressToLatLng1(addr) {
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({
        "address": addr
    }, function (results, status) {
        if ($("#c").attr('checked'))
        {
            addr = addr + ",";
        }
        else {
            addr = "";
        }
        if (status == google.maps.GeocoderStatus.OK) {
            var content = $("#target04").val();
            $("#target04").val(content + addr + results[0].geometry.location.lat() + "\n");
        } else {
            var content = $("#target04").val();
            $("#target04").val(content + addr + "查無緯度" + "\n");
        }
    });
}