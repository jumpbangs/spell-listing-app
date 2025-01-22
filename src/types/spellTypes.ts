export interface SpellTypes {
  index: string;
  name: string;
  level: number;
  url: string;
  desc: string[];
  higher_level: string[];
  range: string;
  components: string[];
  material: string;
  ritual: boolean;
  duration: string;
  concentration: boolean;
  casting_time: boolean;
  attack_type: string;
  damage: DamageTypes;
  school: {
    name: string;
    url: string;
  };
  classes: [{ name: string; url: string }];
}

interface DamageTypes {
  damage_type: {
    name: string;
    url: string;
  };
  damage_at_slot_level: {
    [key: number]: string;
  };
}
