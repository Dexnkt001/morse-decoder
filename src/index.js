const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    var arr = new Array;
    var new_arr = new Array;
    var k =0;
    var result = new Array;
    var r =0;
    for (var i = 0; i<expr.length; i++){
      arr = expr.substr(i,10).split('');
      for(var j = 0; j<10;j++){
        if(arr[j]==0){
          continue;
        }
        else if (arr[j] == 1){
          for (var l = j; l<arr.length; l+=2){
            if(arr[l+1] == 0){
              new_arr[k]='.';
              k++;
            }
            else{
                new_arr[k]='-';
              k++;
            }
            j=l+1;
          }
          result[r]=new_arr.join('');
            r++;
            new_arr=[];
        }
        else if(arr[j]=='*'){
          result[r]=' ';
          r++;
          j+=9;
        }
        i = i + j;
      }
    }
    var str='';
for (var t = 0; t< result.length; t++){
    if(result[t] != " "){
  str = str + MORSE_TABLE[result[t]];
    }
    else str = str+" ";
}
return str;
}

module.exports = {
     decode

}
