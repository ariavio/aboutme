function tryy(){
    document.write("successfully!");



    var email = document.getElementById("email").value;
    var names = document.getElementById("name").value;
    var company = document.getElementById("company").value;
    var address = document.getElementById("address").value;
    var link = document.getElementById("link").value;
    var massage = document.getElementById("massage").value;
    document.write("successfully!!!!!!!!!!!");
    const fs = require("fs");
    fs.appendFileSync("f.txt", "World");

    fs.appendFile('f.txt', email, function(){});
    fs.appendFile('f.txt', name, function(){});
    fs.appendFile('f.txt', company, function(){});
    fs.appendFile('f.txt', address, function(){});
    document.write("successfully!!!!!!!!!!!");

};