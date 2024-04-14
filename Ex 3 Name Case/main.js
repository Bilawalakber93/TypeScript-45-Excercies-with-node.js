var personName = " Bilawal AKber";
//Lower_Case
console.log(personName.toLowerCase());
//Upper_Case
console.log(personName.toUpperCase());
//title_Case
console.log(personName.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
