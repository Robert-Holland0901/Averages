"use strict";
const list = [
    ["Jack", 90],
    ["Jack", 50],
    ["Jack", 60],
    ["John", 10],
    ["John", 45],
    ["Gill", 10],
    ["Gill", 15],
    ["Gill", 16],
    ["Gill", 35],
];
const AverageGrade = () => {
    let John = 0;
    let jack = 0;
    let Gill = 0;
    let Jackcount = 0;
    let Johncount = 0;
    let Gillcount = 0;
    list.forEach((item) => {
        if (item[0] == 'Jack') {
            jack += item[1];
            Jackcount += 1;
        }
        else if (item[0] == 'John') {
            John += item[1];
            Johncount += 1;
        }
        else if (item[0] == 'Gill') {
            Gill += item[1];
            Gillcount += 1;
        }
    });
    return new Map([
        ['John', Math.floor(John / Johncount)],
        ['Jack', Math.floor(jack / Jackcount)],
        ['Gill', Math.floor(Gill / Gillcount)],
    ]);
};
console.log(AverageGrade());
