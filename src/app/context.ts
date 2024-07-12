import { createContext } from "react";
import { MyContextType } from "../interfaces";

export const myContext = createContext<MyContextType | null>(null);