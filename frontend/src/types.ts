// TODO
export interface Country {
  id: string;
  code: string;
  name: string;
  emoji: string;
  continent: {
    id: string;
    name: string;
  };
}

export interface Continent {
  id: string;
  name: string;
}