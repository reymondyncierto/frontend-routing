import { useContext } from "react";
import { UserContext } from "../useContext";

export const Display = () => {
  const user = useContext(UserContext); // use the useContext hook to get the value from the context
  return (
    <div>
      <h1>Display</h1>
      <p>Dear {user}!</p>
    </div>
  );
}