function buildMap(wordList) {

    var result = {};

    var count = wordList.length;

    for (var i = 0; i < count; ++i) {

        var map = result;

        var word = wordList[i];

        for (var j = 0; j < word.length; ++j) {

            var ch = word.charAt(j);

            if (typeof(map[ch]) != "undefined") {

                map = map[ch];

                if (map["empty"]) {

                    break;

                }

            }

            else {

                if (map["empty"]) { 

                    delete map["empty"]; 

                }

                map[ch] = {"empty":true};

                map = map[ch];

            }

        }

    }

    return result;

}

          

function check(map, content) {

    var result = [];

    var count = content.length;

    var stack = [];

    var point = map;

    for (var i = 0; i < count; ++i) {

        var ch = content.charAt(i);

        var item = point[ch];

        if (typeof(item) == "undefined") {

            i = i - stack.length;

            stack = [];

            point = map;

        }

        else if (item["empty"]) {

            stack.push(ch);

            result.push(stack.join(""));

            stack = [];

            point = map;

        }

        else {      

            stack.push(ch);

            point = item;

        }

    }

    return result;

}

          

var test3 = function (sensitive_words,content) {

    var map = buildMap(sensitive_words.sort());         

    var begin = new Date();

    var words = check(map, content);

    console.log((new Date())-begin);

    console.log(words);

}

