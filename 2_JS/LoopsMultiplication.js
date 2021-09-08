function spacing(val) {

    var spacing = ' ';
    var pad = 4 - val;
    
    while (pad-- > 0)
        spacing += '  ';
        return spacing;
}

var result = '';

for (var i = 0; i < 11; i++) {
    for (var j = 0; j < 11; j++) {
        if (i > 0 && j > 0) {
            result += spacing((i * j + '').length) + i * j;
        }
    }
    result += '\n'
}
console.log(result);