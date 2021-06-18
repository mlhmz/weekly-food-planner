function arrayToString(array) {
    let string = "";
    // Ingredients to SQL Format
    for (let i = 0; i < array.length; i++) {
        if (i === array.length - 1) {
            string += array[i];
        } else {
            string += array[i] + ",";
        }
        
    }

    return string;
}

exports.arrayToString = arrayToString;