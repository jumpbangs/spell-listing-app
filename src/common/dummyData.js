export const dummySpellData = [
  {
    index: 'acid-arrow',
    name: 'Acid Arrow',
    desc: [
      'A shimmering green arrow streaks toward a target within range and bursts in a spray of acid. Make a ranged spell attack against the target. On a hit, the target takes 4d4 acid damage immediately and 2d4 acid damage at the end of its next turn. On a miss, the arrow splashes the target with acid for half as much of the initial damage and no damage at the end of its next turn.',
    ],
    higher_level: [
      'When you cast this spell using a spell slot of 3rd level or higher, the damage (both initial and later) increases by 1d4 for each slot level above 2nd.',
    ],
    range: '90 feet',
    components: ['V', 'S', 'M'],
    material: "Powdered rhubarb leaf and an adder's stomach.",
    ritual: false,
    duration: 'Instantaneous',
    concentration: false,
    casting_time: '1 action',
    level: 2,
    attack_type: 'ranged',

    damage: {
      damage_type: {
        name: 'Acid',
        url: '/api/damage-types/acid',
      },
      damage_at_slot_level: {
        2: '4d4',
        3: '5d4',
        4: '6d4',
        5: '7d4',
        6: '8d4',
        7: '9d4',
        8: '10d4',
        9: '11d4',
      },
    },

    school: {
      name: 'Evocation',
      url: '/api/magic-schools/evocation',
    },
    classes: [
      {
        name: 'Wizard',
        url: '/api/classes/wizard',
      },
    ],
    subclasses: [
      {
        name: 'Lore',
        url: '/api/subclasses/lore',
      },
      {
        name: 'Land',
        url: '/api/subclasses/land',
      },
    ],
    url: '/api/spells/acid-arrow',
  },
  {
    higher_level: [],
    index: 'acid-splash',
    name: 'Acid Splash',
    desc: [
      'You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a dexterity saving throw or take 1d6 acid damage.',
      "This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",
    ],
    range: '60 feet',
    components: ['V', 'S'],
    ritual: false,
    duration: 'Instantaneous',
    concentration: false,
    casting_time: '1 action',
    level: 0,
    damage: {
      damage_type: {
        index: 'acid',
        name: 'Acid',
        url: '/api/damage-types/acid',
      },
      damage_at_character_level: {
        1: '1d6',
        5: '2d6',
        11: '3d6',
        17: '4d6',
      },
    },
    dc: {
      dc_type: {
        index: 'dex',
        name: 'DEX',
        url: '/api/ability-scores/dex',
      },
      dc_success: 'none',
    },
    school: {
      index: 'conjuration',
      name: 'Conjuration',
      url: '/api/magic-schools/conjuration',
    },
    classes: [
      {
        index: 'sorcerer',
        name: 'Sorcerer',
        url: '/api/classes/sorcerer',
      },
      {
        index: 'wizard',
        name: 'Wizard',
        url: '/api/classes/wizard',
      },
    ],
    subclasses: [
      {
        index: 'lore',
        name: 'Lore',
        url: '/api/subclasses/lore',
      },
    ],
    url: '/api/spells/acid-splash',
  },
];
