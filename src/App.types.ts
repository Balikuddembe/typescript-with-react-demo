export interface AppProps {
  title: string;
}
export interface Name {
  first: string;
  last: string;
}
export interface Login {
  uuid: string;
}
export interface Picture {
  medium: string;
  large: string;
}

export interface Location {
  state: string;
  city: string;
  country: string;
}
export interface Users {
  name: Name;
  login: Login;
  email: string;
  gender: string;
  phone: number;
  picture: Picture;
  location: Location;
}
