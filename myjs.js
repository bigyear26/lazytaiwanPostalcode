


function get_zip5_adrs(a_id) {

    var word=$("#a_id").val();
    var words=word.split("\n");
    var wordsLength=words.length-1;

    for (i = 0; i <= wordsLength; i++) {
        var zip5_url = "https://zip5.5432.tw/zip5json.py?adrs=" + words[i] + "&jsoncallback=?"
            $.getJSON(zip5_url,
                function (data) {
                    $("#target1").append(data.new_adrs+","+data.adrs + "\n");
                }

            );
        }
    }

function refresh() {
    window.location.reload();
}
    //刷新当前页面.
function total() {
    $("#count").text($("#a_id").val().split("\n").length)
}

