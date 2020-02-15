let constraint1 = (isNaN(variables[6]))? true : (variables[6] >= variables[4]);
let constraint2 = (isNaN(variables[6]))? true : (variables[6] < variables[1]);
let constraint3 = (isNaN(variables[7]))? true : (variables[0] - variables[7] === 1 || variables[0] - variables[7] === -1 );
let constraint4 = (isNaN(variables[4]))? true : (variables[4] < variables[1]);

let constraint5 = (isNaN(variables[4]))? true : (variables[4] -variables[2] === 1 ||variables[4]-variables[2] === -1);
let constraint6 = (isNaN(variables[2]))? true : ((variables[1] - variables[2]) % 2 === 0);
let constraint7 = (isNaN(variables[3]))? true : (variables[1] !== variables[3]);
let constraint8 = (isNaN(variables[4]))? true : (variables[3] >= variables[4]);

let constraint9 = (isNaN(variables[3])) ? true : (variables[3] !== variables[2]);
let constraint10 = (isNaN(variables[5]))? true : (variables[5] !== variables[2]);
let constraint11 = (isNaN(variables[5]))? true : (variables[5] < variables[3] -1);
let constraint12 = (isNaN(variables[5]))? true : (variables[5] !== variables[1] -2);

let constraint13 = (isNaN(variables[4]))? true : (variables[4] !== variables[0]);
let constraint14 = (isNaN(variables[1]))? true : (variables[1] !== variables[0]);
let constraint15 = (isNaN(variables[2]))? true : (variables[2] !== variables[0]);
let constraint16 = (isNaN(variables[3]))? true : (variables[3] !== variables[0]);

let constraint17 = (isNaN(variables[5]))? true : ((variables[5] - variables[0]) % 2 === 1 || (variables[5] - variables[0]) % 2 === -1);
