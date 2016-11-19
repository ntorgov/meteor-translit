// Write your package code here!

// Variables exported by this module can be imported by other packages and
// applications. See translit-tests.js for an example of importing.
//export const name = 'translit';

var transliterationTable = {
	'А': 'A',
	'а': 'a',
	'Б': 'B',
	'б': 'b',
	'В': 'V',
	'в': 'v',
	'Г': 'G',
	'г': 'g',
	'Ґ': 'G',
	'ґ': 'g',
	'Д': 'D',
	'д': 'd',
	'Е': 'E',
	'е': 'e',
	'Ё': 'E',
	'ё': 'e',
	'Ж': 'Zh',
	'ж': 'zh',
	'З': 'Z',
	'з': 'z',
	'И': 'I',
	'и': 'i',
	'І': 'I',
	'і': 'i',
	'Й': 'Y',
	'й': 'y',
	'К': 'K',
	'к': 'k',
	'Л': 'L',
	'л': 'l',
	'М': 'M',
	'м': 'm',
	'Н': 'N',
	'н': 'n',
	'О': 'O',
	'о': 'o',
	'П': 'P',
	'п': 'p',
	'Р': 'R',
	'р': 'r',
	'С': 'S',
	'с': 's',
	'Т': 'T',
	'т': 't',
	'У': 'U',
	'у': 'u',
	'Ф': 'F',
	'ф': 'f',
	'Х': 'h',
	'х': 'h',
	'Ц': 'c',
	'ц': 'c',
	'Ч': 'Ch',
	'ч': 'ch',
	'Ш': 'Sh',
	'ш': 'sh',
	'Щ': 'Sch',
	'щ': 'sch',
	'Ь': '',
	'ь': '',
	'Ы': 'Y',
	'ы': 'y',
	'Ъ': '',
	'ъ': '',
	'Э': 'E',
	'э': 'e',
	'Ю': 'Yu',
	'ю': 'yu',
	'Я': 'Ya',
	'я': 'ya',
	'ї': 'yi',
	'Ї': 'Yi',
	'Є': 'Ye',
	'є': 'ye',
	'?': '',
	'!': '',
	':': '',
	'"': '',
	'`': '',
	'’': '',
	'‘': '',
	'\'': '',
	'»': '',
	'«': '',
	'“': '',
	'”': '',
	',': '',
	'.': '',
	'—': '-',
	'/': '_',
	'(': '',
	')': '',
	'#': '',
	'&': ''
};

/**
 * @function translit
 * @param originalString
 */
translit = function (originalString) {

	var resultString = originalString;

	for (currentSymbol in transliterationTable) {
		//console.log(transliterationTable[currentSymbol]);
		var regexp = new RegExp('\\' + currentSymbol, 'g');
		resultString = resultString.replace(regexp, transliterationTable[currentSymbol]);
	}
	resultString = resultString.trim();
	//console.log(resultString);
	return resultString;
};

console.log(translit('Привет, Мир!'));