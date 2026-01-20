import { useState } from "react";

function useInput() {
  // 커스텀 훅은 use라는 접두어만 붙혀주면 생성
  const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return [input, onChange];
}

export default useInput;
