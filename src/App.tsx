import { useEffect, useState } from "react";

import Users from "./components/Users";

import api from "./services/api";

interface IUsers {
  name: string;
  email: string;
}

function App() {
  const [users, setUsers] = useState<IUsers[]>([]);

  useEffect(() => {
    api.get<IUsers[]>("/users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <div>
      {users.map((user) => (<Users key={user.email} user={user}/>))}
    </div>
  );
}

export default App;
