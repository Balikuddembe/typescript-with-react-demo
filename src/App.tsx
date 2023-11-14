import axios from "axios";
import { FC, useEffect, useState } from "react";
import { AppProps, Users } from "./App.types";
import User from "./components/User";

const App: FC<AppProps> = ({ title }) => {
  const [users, setUsers] = useState<Users[]>([]);
  const [isloading, setIsLoading] = useState(false);
  const [userName, setUsername] = useState("");
  // useEffect(() => {
  //   const getUsers = async () => {
  //     try {
  //       setIsLoading(true);
  //       const { data } = await axios.get(
  //         'https://randomuser.me/api/?results=10'
  //       );
  //       console.log(data.results);
  //       setUsers(data.results);
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   getUsers();

  // }, []);

  const handleClick = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get("https://randomuser.me/api/?results=10");
      console.log(data.results);
      setUsers(data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={handleClick}>show users</button>
      <input type="text" onChange={handleChange} />
      <div>{userName}</div>
      <ul>
        {isloading && <p>Loading....</p>}
        {users.map(
          ({ login, name, email, gender, phone, picture, location }) => {
            return (
              <User
                key={login.uuid}
                name={name}
                email={email}
                gender={gender}
                phone={phone}
                picture={picture}
                location={location}
              />
            );
          }
        )}
      </ul>
    </div>
  );
};

export default App;
