import React, { FC, useEffect, useState } from "react";
import "./App.css";

type ThenArg<T> = T extends Promise<infer U> ? U : T;

const query = <T extends { [k: string]: any }>(params: T) =>
  Object.keys(params)
    .map(k => encodeURIComponent(k) + "=" + encodeURIComponent(params[k]))
    .join("&");

const fetchUsers = (params: Paths.ListUsers.QueryParameters) =>
  fetch("/users?" + query(params))
    .then(r => r.json())
    .then(v => v.results as Paths.ListUsers.Responses.$200[]);

const App: FC = () => {
  type Users = ThenArg<ReturnType<typeof fetchUsers>>;
  const [users, setUsers] = useState<Users>([]);

  useEffect(() => {
    fetchUsers({ page: 1 }).then(setUsers);
  }, [users]);

  return (
    <div className="App">
      {users.map(user => (
        <div key={user.email}>
          {user.username} {user.email}
        </div>
      ))}
    </div>
  );
};

export default App;
