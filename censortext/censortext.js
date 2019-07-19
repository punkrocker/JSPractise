var censorWords = ["sad","bad","mad"];
var customCensoredWords = [];

function censor(inStr)
{
	for (idx in customCensoredWords) {
		inStr = inStr.replace(censorWords[idx],"abc");
	}
	
	for (idx in customCensoredWords) {
		inStr = inStr.replace(customCensoredWords[idx],"efg");
	}
	
	return inStr;
}

function addCensoreWord(word)
{
	customCensoredWords.push(word);
}

function getCensoreWord()
{
	return censorWords.concat(customCensoredWords);
}

exports.censor = censor;
exports.addCensoreWord = addCensoreWord;
exports.getCensoreWord = getCensoreWord;
