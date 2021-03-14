module.exports = function check(str, bracketsConfig) {
    let sample = [],
    findIndex = 0,
    sampleCounter = 0,
    strCounter = 0;

    for (let x = 0; x < bracketsConfig.length; x++) {
        sample[x] = bracketsConfig[x].join('');
    }
   
    while(sampleCounter < sample.length) {
        while (strCounter < str.length) {
            findIndex = str.indexOf(sample[sampleCounter]);
            if (findIndex !== -1){
                str = str.substring(0, findIndex) + str.substring(findIndex + sample[sampleCounter].length, str.length);
                sampleCounter = 0;
            } else {
                strCounter = str.length;
            }
        }
        sampleCounter++;
        strCounter = 0;
    }
    return (!str);
}
