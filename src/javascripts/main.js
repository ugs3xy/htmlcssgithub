
function getMax(x, y, z)
{
    return Math.max(x, y, z);
}

function getMin (x, y, z)
{
    return Math.min(x, y, z);
}

function getMean (x, y ,z)
{
    return ((x+y+z)/3);
}

function compare(word1, word2)
{
    if (word1==word2){
        return 0;
    }
    if (word1 > word2){
        return 1;
    }
    if (word1 < word2){
        return -1;
    }
}


function getCharPerLine(str, indent) {
    let result = '';
    let spaces = 0;
    for (let char of str) {
        if (char !== ' ') {
            result += ' '.repeat(spaces) + char + '\n';
            if (indent) {
                spaces++;
            }
        }
    }
    return result;
}
    


function arrow(size) {
    let result = '';
    for (let i = 1; i <= size; i++) {
        for (let j = 1; j <= i; j++) {
            result += '*';
        }
        result += '\n';
    }
    for (let i = size - 1; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
            result += '*';
        }
        result += '\n';
    }
    return result;
}



console.log(getMax(10,5,1));
console.log(getMin(3,100,23));
console.log(getMean(5,5,5));
console.log(compare("oka", "okhaita"));
console.log(getCharPerLine("HelloWorld!", true));
console.log(arrow(3));



