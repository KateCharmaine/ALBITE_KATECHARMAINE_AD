var n = 5;
var string = "";

for (var i = 1; i <= n; i++) {
  for (var j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);