     const list= [   
        [ "Jack", 90],
        [ "Jack", 50],
        [ "Jack", 60],
        [ "John", 10],
        [ "John", 45],
        [ "Gill", 10],
        [ "Gill", 15],
        [ "Gill", 16],
        [ "Gill", 35],
    ];

    const AverageGrade = (): Object => {
        let John: number = 0;
        let jack: number = 0;
        let Gill: number = 0;

        let Jackcount: number = 0;
        let Johncount: number = 0;
        let Gillcount: number = 0;

        list.forEach((item)  => {
           if (item[0] == 'Jack') {
            jack += <number>item[1];
            Jackcount += 1;
           } 
           else if (item[0] == 'John') {
            John += <number>item[1];
            Johncount += 1;
           }
           else if (item[0] == 'Gill') {
            Gill += <number>item[1];
            Gillcount += 1;
        }});

        return new Map<string, number>([
            ['John', Math.floor(John / Johncount)],
            ['Jack', Math.floor(jack / Jackcount)],
            ['Gill', Math.floor(Gill / Gillcount)],
        ])
    };
    
    console.log(AverageGrade())