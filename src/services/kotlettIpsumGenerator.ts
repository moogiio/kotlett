const words = [
    'kotlett', 'fläskkarré', 'revbensspjäll', 'entrecôte', 'oxfilé', 'fläskfilé',
    'korv', 'falukorv', 'grillkorv', 'prinskorv', 'isterband', 'medwurst',
    'köttfärs', 'bacon', 'skinka', 'lufttorkad skinka', 'rökt skinka',
    'fläskkött', 'nötkött', 'kalvkött', 'lamm', 'älgkött', 'renkött',
    'fläsklägg', 'rökt sidfläsk', 'kassler', 'schnitzel', 'biff', 'hamburgare',
    'grillad', 'stekt', 'kokt', 'rökt', 'marinerad', 'kryddad',
    'saftig', 'mör', 'smakrik', 'välstekt', 'läcker', 'gyllenbrun',
    'senap', 'pepparrot', 'pressad gurka', 'rödkål', 'gräddsås', 'bearnaisesås',
    'potatismos', 'rostad lök', 'vitlök', 'timjan', 'rosmarin', 'peppar',
    'havet salt', 'kryddsmör', 'grillkrydda', 'soja', 'honung', 'BBQ-sås',
    'panna', 'ugn', 'grill', 'stekpanna', 'gryta', 'långkok',
    'medelstekt', 'välstekt', 'blodig', 'rosa', 'genomstekt', 'lättstekt',
    'strimlad', 'tärnad', 'skivad', 'hackad', 'delad', 'fileerad',
    'frasig', 'krispig', 'gyllene', 'smarrig', 'mustigt', 'fylligt',
    'rostbiff', 'köttbullar', 'frikadeller', 'pyttipanna', 'wallenbergare', 'falukorv',
    'fläskpannkaka', 'blodpudding', 'leverpastej', 'sylta', 'rullsylta', 'pressylta',
    'flintastek', 'skinkstek', 'picnicbog', 'högrev', 'innanlår', 'fransyska', 'ytterlår',
    'clubstek', 'T-benstek', 'bringa', 'kind', 'bog', 'rulle', 'rostas', 'biffstock',
    'ankarstock','panerad', 'dubbelpanerad', 'bräserad', 'långbakad', 'rimmad', 'gravad',
    'wokat', 'helstekt', 'bankad', 'lättgravad', 'halstrad','knaprig', 'karamelliserad',
    'välhängd', 'smörstekt', 'lågtempad', 'benfri', 'med ben', 'svål', 'fettkant', 'marmorerad',
    'brunsås', 'skysås', 'svampsås', 'kantarellsås', 'rödvinssås', 'pepparsås', 'choronsås',
    'äppelmos', 'lingonsylt', 'svartvinbärsgelé', 'rönnbärsgelé', 'picklad rödlök',
    'saltgurka', 'inlagd gurka', 'hasselbackspotatis', 'klyftpotatis', 'potatisgratäng',
    'stompad potatis', 'rotfruktsgratäng', 'råstekt potatis', 'pommes frites',
];

const starters = [
    'Kotlett ipsum dolor amet',
    'Kotlett mör saftig grillad',
    'Kotlett väldoftande stekt',
    'Kotlett gyllenbrun krispig',
    'Kotlett mustigt kryddad',
    'Kotlett läcker marinerad',
    'Kotlett smakrik genomstekt',
    'Kotlett med svål och sälta',
    'Kotlett panerad i rikligt smör',
    'Kotlett direkt från charken',
    'Kotlett nystekt och rykande',
    'Kotlett dränkt i gräddsås',
    'Kotlett med frasig yta',
    'Kotlett, husmanskostens hjälte',
    'Kotlett saltad och pepprad',
    'Kotlett serverad med kärlek',
    'Kotlett direkt från pannan',
    'Kotlett med en klick smör',
    'Kotlett, sås och potatis',
    'Kotlett till vardag och fest'
];

function getRandomWord(): string {
    return words[Math.floor(Math.random() * words.length)];
}

function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function generateSentence(isFirst: boolean = false): string {
    const wordCount = Math.floor(Math.random() * 8) + 8; // 8-15 words
    const sentence: string[] = [];

    if (isFirst) {
        sentence.push(starters[Math.floor(Math.random() * starters.length)]);
    } else {
        sentence.push(capitalize(getRandomWord()));
    }

    for (let i = 0; i < wordCount - (isFirst ? starters[0].split(' ').length : 1); i++) {
        sentence.push(getRandomWord());
    }

    return sentence.join(' ') + '.';
}

function generateParagraph(sentenceCount: number, isFirstParagraph: boolean = false): string {
    const sentences: string[] = [];
    for (let i = 0; i < sentenceCount; i++) {
        sentences.push(generateSentence(isFirstParagraph && i === 0));
    }
    return sentences.join(' ');
}

export function generateKotlettIpsum(paragraphCount: number, sentencesPerParagraph: number): string {
    const paragraphs: string[] = [];
    for (let i = 0; i < paragraphCount; i++) {
        paragraphs.push(generateParagraph(sentencesPerParagraph, i === 0));
    }
    return paragraphs.join('\n\n');
}

export interface KotlettIpsumOptions {
    paragraphs?: number;
    sentences?: number;
}

export function generateKotlettIpsumWithOptions(options: KotlettIpsumOptions = {}): string {
    const paragraphCount = options.paragraphs ?? 3;
    const sentencesPerParagraph = options.sentences ?? 5;

    // Validate input
    const validParagraphs = Math.max(1, Math.min(10, paragraphCount));
    const validSentences = Math.max(3, Math.min(10, sentencesPerParagraph));

    return generateKotlettIpsum(validParagraphs, validSentences);
}
