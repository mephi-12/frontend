import { subscript } from "./symbols";

export const renderBackpack = (backpack: string[], letter: string) =>
    backpack.map((value, idx) => (
        <p key={idx}>{letter}{subscript(idx)} = {value}</p>
    ))
