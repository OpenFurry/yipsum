var sourceWords = [
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

$(document).ready(function() {
  result = '';
  _(5).times(function(paragraph) {
    result += '<p>';
    _(7).times(function(sentence) {
      _(Math.floor((Math.random() * 10) / 3) + 1).times(function(phrase) {
        _(Math.floor(Math.random() * 10) + 1).times(function(word) {
          sourceWord = _.sample(sourceWords);
          if (phrase === 0 && word === 0) {
            sourceWord = sourceWord.charAt(0).toUpperCase() + sourceWord.slice(1);
          }
          result += sourceWord + ' ';
        });
        result = result.slice(0, result.length - 1) + ', ';
      });
      result = result.slice(0, result.length - 2) + '.  ';
    });
    result += '</p>';
  });

  $('#yipsum').html(result);
});
