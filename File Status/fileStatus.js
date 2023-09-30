var fs = require('fs').promises;
var fs = require('fs');
fs.lstat('./input.txt', function (err, stat) {
    if(err) throw err;
    console.log(stat)
    console.log("isDirectory",stat.isDirectory());
    
    console.log("isFIFO",stat.isFIFO());

    console.log("isFile",stat.isFile());
    console.log("isBlockDevice",stat.isBlockDevice());
    console.log("isCharacterDevice",stat.isCharacterDevice());
    console.log("isSymbolicLink",stat.isSymbolicLink());
    console.log("isSocket",stat.isSocket());
    console.log("toString",stat.toString());
});

// var fs = require('fs').promises;
// var fs = require('fs');
// var Mode = require('stat-mode');
// fs.lstat('./input.lnk', function (err, stat) {
//     if(err) throw err;
//     console.log(stat)
//     var mode = new Mode(stat);
//     console.log("isDirectory",mode.isDirectory());
    
//     console.log("isFIFO",mode.isFIFO());

//     console.log("isFile",mode.isFile());
//     console.log("isBlockDevice",mode.isBlockDevice());
//     console.log("isCharacterDevice",mode.isCharacterDevice());
//     console.log("isSymbolicLink",mode.isSymbolicLink());
//     console.log("isSocket",mode.isSocket());
//     console.log("toString",mode.toString());


//     console.log("mode.owner.read",mode.owner.read);
//     console.log("mode.owner.read",mode.owner.read);
//     console.log("mode.owner.read",mode.owner.read);

//     console.log("mode.group.read",mode.group.read);
//     console.log("mode.group.read",mode.group.read);
//     console.log("mode.group.read",mode.group.read);

//     console.log("mode.others.read",mode.others.read);
//     console.log("mode.others.read",mode.others.read);
//     console.log("mode.others.read",mode.others.read);
// });

