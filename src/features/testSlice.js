import { Test } from "../app/assets/shared/Test";
//Select all games from 1 console
export const selectOnConsole = (name) => {
    console.log('aaa '+name);
    console.log(Test.find((Test) => Test.console == name));
    
    return Test.find((Test) => Test.console === name);
};
//Sellects all games from consols
export const selectAllTest = () => {
    return Test;
};