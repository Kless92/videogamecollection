import { Test } from "../app/assets/shared/Test";
//Select all games from 1 console
export const selectOnConsole = (name, id) => {
    console.log('______________________________________')
    const a = [];
    for (let i=0; i < selectAllTest().length; i++){
        console.log('aaa '+name+',  '+i);
        //console.log((Test.find((a)=> a).console));
        //console.log(Test.find((a)=>a).id);
        //console.log(Test.find((a)=> a).console === name);
        console.log(Test.find((a)=>a.id === i));
        console.log(Test.find((a)=>a.id === i).console);
        console.log(Test.find((a)=>a.id === i).console === name);
        const b = (Test.find((a)=>a.id === i).console === name);
        if (b==true){
            a.push(Test.find((a)=>a.id === i));
            console.log('TRUE')
            console.log(a);
        }
        else
            console.log('FALSE')
    }
    console.log(a);


    return a;
};
//Sellects all games from consols
export const selectAllTest = () => {
    return Test;
};