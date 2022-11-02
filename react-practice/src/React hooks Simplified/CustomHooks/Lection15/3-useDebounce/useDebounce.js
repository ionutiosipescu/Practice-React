import { useEffect } from "react";
import useTimeout from "../2-useTimeout/useTimeout";

export default function useDebounce(callback, delay, dependencies) {
  const { reset, clear } = useTimeout(callback, delay);
  // de fiecare data cand se schimba ceva se face un reset la timp(1s)
  useEffect(reset, [...dependencies, reset]);
  // nu afisam aletul la prima iteratie
  useEffect(clear, []);
}
