import { useState } from "react";

function useButtonLogin() {
  const [needLogin, setNeedLogin] = useState();
  function handleButton() {
    const token = localStorage.getItem("token");
    if (token === null) {
      setNeedLogin(0);
      console.log(needLogin);
    } else {
      setNeedLogin(1);
      console.log(needLogin);
    }
  }

  return [needLogin, handleButton];
}

export default useButtonLogin;
