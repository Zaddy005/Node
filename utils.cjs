function generateRandomNumber(){
    return Math.floor( Math.random() * 100 ) + 1;
}

function celciusToFarenheit(num){
    return (( num * 9 ) / 5 ) + 32;
}

module.exports = {
    generateRandomNumber,
    celciusToFarenheit,
};