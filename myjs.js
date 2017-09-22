

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