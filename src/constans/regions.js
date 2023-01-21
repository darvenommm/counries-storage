export const ALL = 'All';
export const AFRICA = 'Africa';
export const AMERICA = 'Americas';
export const ASIA = 'Asia';
export const EUROPE = 'Europe';
export const OCEANIA = 'Oceania';

export const regionsForSelect = [
  { value: ALL, label: ALL },
  { value: AFRICA, label: AFRICA },
  { value: AMERICA, label: AMERICA },
  { value: ASIA, label: ASIA },
  { value: EUROPE, label: EUROPE },
  { value: OCEANIA, label: OCEANIA },
];

export const regions = [
  AFRICA,
  AMERICA,
  ASIA,
  EUROPE,
  OCEANIA,
];

export const regionsWithToLowerCase = regions.map(
  region => region.toLowerCase()
);
