module.exports = function toReadable (number) {
    var numString = number.toString();
    var onesHundred = +(numString.substring(1));
    var ones = ['', ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine', ' ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen'];
    var tens = ['', '', ' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety'];
    var hundred = ' hundred';
    var str = '';    

    if (number == 0) {
        return 'zero';
    }

    if (number < 20) {
      return ones[number].trim(); 
    }

    if (numString.length == 2) {
    str += tens[+(numString[0])];
    str += ones[+(numString[1])];
      return str.trim();
    }
    
    str =  ones[+(numString[0])] + hundred;
    if (onesHundred<20){
      str += ones[onesHundred];
      return str.trim(); 
    } else {
      str += tens[+(numString[1])];
      str += ones[+(numString[2])];
      return str.trim();
    }

}   
