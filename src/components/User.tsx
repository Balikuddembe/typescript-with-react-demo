import { FC } from "react";
import { Picture, Name, Location } from "../App.types";

interface UserProps {
  name: Name;
  email: string;
  gender: string;
  phone: number;
  picture: Picture;
  location: Location;
}
const User: FC<UserProps> = ({
  name,
  email,
  gender,
  phone,
  picture,
  location,
}) => {
  return (
    <li>
      <div>
        Name: {name.first} {name.last}
      </div>
      <div>Email: {email}</div>
      <div>Gender: {gender}</div>
      <div>Phone: {phone}</div>
      <div>
        <img src={picture.large} />
      </div>
      <div>
        Location: {location.city} {location.state} {location.country}
      </div>
    </li>
  );
};

export default User;
