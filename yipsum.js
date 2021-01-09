const sourceWords = [
  // Variations on fur
  'fur',
  'furry',
  'furre',
  'furries',

  // Conventions
  'con',
  'convention',
  'anthrocon',
  'AC',
  'Further Confusion',
  'FC',
  'Midwest Fur Fest',
  'MFF',

  // Fursuiting
  'fursuit',
  'suiter',
  'headless',
  'ruining the magic',

  // Various
  'popufur',
  'feesh',
  'booper',

  // Art
  'commission',
  'stream',
  'sketch',
  'sketch stream',
  'icon',

  // Chat
  'furnet',
  'anthrochat',
  'FurryMUCK',
  'SPR',
  'taps',
  'tapestries',
  'furcadia',

  // Websites
  'furnation',
  'Yerf!',
  'VCL',
  'FA',
  'FurAffinity',
  'SoFurry',
  'Weasyl',
  'InkBunny',
  'Wikifur',

  // Species
  'sergal',
  'fox',
  'wolf',
  'husky',
  'cat',
  'ott',
  'otter',
  'sparkledog',


  // Noises
  'yap',
  'yip',
  'bark',
  'mew',
  'meow',
  'growl',
  'murr',
  'reh',
  'squeak',

  // Verbs
  'wiggle',
  'scritch',
  'pet',
  'boop',
  'whiskerflick',
  'tailswish',
  'swish',
  'wag',
];

function toUpperFirst(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function gen() {
  let words = 0;
  let finished = false;
  let result = '';

  const wordCount = parseInt($('#wordcount').val()) > 1
    ? parseInt($('#wordcount').val()) 
    : 500;
  const chapterCount = parseInt($('#chaptercount').val()) > 1
    ? parseInt($('#chaptercount').val())
    : 1;
  const paragraphsPerChapter = Math.ceil(wordCount / chapterCount / 100);

  _(chapterCount).times(chapter => {
    if (finished) {
      return;
    }

    if (chapterCount > 1) {
      result += `<h2>Chapter ${chapter + 1} &mdash; ${toUpperFirst(_(3).times(f => _.sample(sourceWords)).join (' '))}</h2>`
    }
    _(paragraphsPerChapter).times(paragraph => {
      if (finished) {
        return;
      }

      result += '<p>';
      _(Math.floor(Math.random() * 7) + 1).times(sentence => {
        if (finished) {
          return;
        }

        _(Math.floor((Math.random() * 10) / 3) + 1).times(phrase => {

          _(Math.floor(Math.random() * 10) + 1).times(word => {
            let sourceWord = _.sample(sourceWords);
            if (phrase === 0 && word === 0) {
              sourceWord = toUpperFirst(sourceWord);
            }

            result += sourceWord + ' ';
            words++;
          });

          result = result.slice(0, result.length - 1) + ', ';
        });

        result = result.slice(0, result.length - 2) + '.  ';
        if (words > wordCount) {
          finished = true;
        }
      });

      result += '</p>';
    });
  });

  $('#yipsum').html(result);
}

gen();
