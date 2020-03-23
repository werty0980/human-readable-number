
  module.exports = function toReadable(number) {
    const t1 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const t2 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const t3 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let result = '';
    if (number == 0) {
    result += 'zero';
    } else {
    let mult = Math.floor(number / 100);
    if (mult > 0) {
    result += t1[mult - 1] + ' hundred ';
    number -= mult * 100;
    }
    if (number > 19) {
    mult = Math.floor(number / 10);
    result += t3[mult - 2];
    mult = number % 10;
    if (mult > 0) {
    result += ' ' + t1[mult - 1];
    }
    } else if (number > 9) {
    result += t2[number - 10];
    } else if (number > 0) {
    result += t1[number - 1];
    }
    }
    return result.trim();
    }