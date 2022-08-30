

var size = 8;

for(var i  = 0; i < size; i++){
    var chessLine = "";
    for(var j = 0; j < size / 2; j++){
        if(i % 2 == 0){
            chessLine += "# ";
        } else {
            chessLine += " #";
        }
    }
    console.log(chessLine);
}