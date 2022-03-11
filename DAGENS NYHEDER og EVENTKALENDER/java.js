function posting(input, output) {
    let element = document.getElementById(input);
    let theResult = element.value;
    element.value = "";
    comments[output].push(theResult);

    if (document.getElementById("button").onclick) {
        alert("Send kommentar?");
    } else {
        alert("huh?");
    }

    document.getElementById(output).innerHTML = "";
    for (let index = 0; index < comments[output].length; index++) {
        document.getElementById(output).innerHTML += "<p>" + comments[output][index] + "</p>";
    }
}


let comments = [];
comments["result0"] = []
comments["result1"] = []
comments["result2"] = []
comments["result3"] = []