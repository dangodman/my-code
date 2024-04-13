import { useState,useEffect } from "react";
export function useLocal(key, value) {
  const [msg, setMsg] = useState(value);
  useEffect(() => {
    window.localStorage.setItem(key,msg)
    console.log(msg)
  },[msg])
  return [msg, setMsg];
}
