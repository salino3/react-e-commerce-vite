import { createContext } from "react";
import { MyState } from "./interfaces";

export const GlobalData = createContext<MyState>({} as MyState);