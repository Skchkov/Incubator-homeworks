import React, { ChangeEvent } from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
  name: string;
  setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void;
  addUser: () => void;
  error: string | null;
  totalUsers: number;
};

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
  { name, setNameCallback, addUser, error, totalUsers } // деструктуризация пропсов
) => {
  const inputClass = s.error; // need to fix with (?:)

  return (
    <div className={s.cntr}>
      <input value={name} onChange={setNameCallback} className={s.inp} />
      <span>{error}</span>
      <button onClick={addUser} className={s.btn}>
        ADD
      </button>
      <span className={s.nmb}>{totalUsers}</span>
    </div>
  );
};

export default Greeting;
