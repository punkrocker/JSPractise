var censorWords = ["sad","bad","mad"];
var customCensoredWords = [];

function censor(inStr)
{
	for (idx in censorWords) {
		inStr = inStr.replace(censorWords[idx],"***");
	}
	
	for (idx in customCensoredWords) {
		inStr = inStr.replace(customCensoredWords[idx],"***");
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
