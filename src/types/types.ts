export type Airport = {
  name: string;
  city: string;
  country: string;
  _geoloc: {
    lat: string;
    lon: string;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

export type Application = {
  route: string;
  displayName: string;
  shortDescription: string;
};

export type ApplicationsJSON = Category[];

export interface App {
  route: string;
  displayName: string;
  shortDescription: string;
}

export interface Category {
  name: string;
  backgroundColor: string;
  color: string;
  path: string;
  apps: App[];
}
