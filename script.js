
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




// takes a languages branch, and returns the languages that it has
function getBranchLanguages(branches){
var match = [];
for(var i = 0; i < branch.length; i++) {
  if(branch[i].toLowerCase().includes(branches.toLowerCase())) {
match.push(language[i]);
}
if(match.length > 0){
return match;
}
else{
  match.push("This Branch Does Not Exist")
    }
  }
}
// console.log(getBranchLanguages("Romance"))




//Takes language as a parameter and returns the number of speakers in millions
function getSpeakersFromLanguage(languages){
  var lang = "that language does not exist";
for(var i = 0; i < language.length; i++){
  if(language[i].toLowerCase().includes(languages.toLowerCase())){
      lang = (speakersInMil[i]);
    }
  }
return lang; 
}
// console.log(getSpeakersFromLanguage("English")); 




// takes a languages , and returns the rank it has based on how many people speak it
function getLanguageRank(ranks) {
  var match2 = "This Language Does Not Exist"; 
  for(var i = 0; i < language.length; i++) { // searchs through the languages list
      if (language[i].toLowerCase().includes(ranks.toLowerCase())) { //checks what rank your language is
          match2 = rank[i]; // sets the match equal to the rank of your language
      }
  }
  return match2 // returns the match
}
// console.log(getLanguageRank("English"))




// takes the speakers in millions as a parameter, and returns what percentage of the world they are
function getPercentageWorld(percentage) {
  var match3 = 0;
  for (var i = 0; i < speakersInMil.length; i++) {
      if (speakersInMil[i].toLowerCase().includes(percentage.toLowerCase())) {
          match3 = percent[i];
      }
  }
  if(match3.length > 0){
  return match3;
  }
  else{
    match3.push("This Amount Does Not Exist")
}
}
console.log(getPercentageWorld("918"))
