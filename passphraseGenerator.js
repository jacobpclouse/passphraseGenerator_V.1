/* In this generator, we generate random numbers to pick words from pre-made word banks */
/* Is there any way you could make the math section into a function and then just call that? 
Can you pull from a seperate word list file? JSON*/

bank1Noun = ['word', 'homework', 'inventive', 'spicy', 'walrus', 'terminator', 'job', 'killjoy', 'wing', 'robot'];
bank2Suffix = ['inator', 'tron', 'theoneandonly', 'athon', 'nomics', 'gate', 'cation', 'tastic', 'licious', 'gasm'];
bank3Misc = ['jimbo', 'bold', 'table', 'ear', 'camera', 'cabinet', 'mouse', 'coffeemaker', 'phone', 'tea'];


output = "";

output += bank1Noun[Math.abs(Math.floor(Math.random() * 10 - 1))];
output += bank2Suffix[Math.abs(Math.floor(Math.random() * 10 - 1))];
output += Math.abs(Math.floor(Math.random() * 10 - 1));
output += Math.abs(Math.floor(Math.random() * 10 - 1));
output += bank3Misc[Math.abs(Math.floor(Math.random() * 10 - 1))];


console.log(output);
alert(output);