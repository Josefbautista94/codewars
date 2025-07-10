function getCharacters(obj, key, val) {
    var foundCharacters = [];

    if (!obj.characters.some(character => key in character)) {
        return foundCharacters;
    }

    // Convert the search value to lowercase for case-insensitive comparison
    var lowerCaseVal = val.toLowerCase();

    foundCharacters = obj.characters.filter(character => {
        var characterValue = character[key];
        return characterValue && characterValue.toLowerCase() === lowerCaseVal;
    });

    return foundCharacters;
}
