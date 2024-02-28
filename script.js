
function getColumn(url, columnNumber){
    var column = [];
    var table = [];
    var request = new XMLHttpRequest();  
    request.open("GET", url, false);   
    request.send(null);  
    var csvData = new Array();
    var jsonObject = request.responseText.split(/\r?\n|\r/);
    for (var i = 0; i < jsonObject.length; i++) {
      csvData.push(jsonObject[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/));
    }
    table = csvData;
    column = getCol(table, columnNumber);
    return column;
  }
  
  //returns the specified column from a 2D Array
  function getCol(matrix, col){
         var column = [];
         for(var i=1; i<matrix.length-1; i++){
            column.push(matrix[i][col]);
         }
         return column;
      }

var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/main/Language%20%26%20Literature/Most%20Spoken%20Languages%20Worldwide.csv"
var rank = getColumn(url,1);
var language = getColumn(url,2);
var speakersInMil = getColumn(url,3);
var percent = getColumn(url,4);
var langFamily = getColumn(url,5);
var branch = getColumn(url,6);

//takes a language family and returns the languages spoken in that family
function getLanguageFromFamily(family){
  var fam = [];
for(var i = 0; i < langFamily.length; i++){
  if(langFamily[i].toLowerCase().includes(family.toLowerCase())){
      fam.push(language[i]);
    }
  }
if(fam.length > 0){
return fam;
}
else{
  fam.push("This Language Family Does Not Exist")
  return fam;
}
}
// console.log(getLanguageFromFamily("Sino-Tibetan")); 