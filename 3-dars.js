let temp = 'qor';
// 0; null, undefined === false
if (temp==='quyoshli') {
    console.log('issiq')
}
else if (temp === 'yomgir') {
    console.log('soyabon oling')
}
else if (temp === 'qor') {
    console.log('qor')
}
else if (temp === 'sovuq') {
    console.log('sovuq')
}
else{
    console.log('nomalum ob havo');
}

let temp = 12;
if (temp < 0) {
    console.log('judayam sovuq');
}
else if (temp < 10) {
    console.log('sovuq');
}
else if (temp < 15) {
    console.log('iliq');
}
else if (temp < 25) {
    console.log('issiq');
}
else {
    console.log('judayam issiq');
}

let temp = 108;
if (temp < 0) {
    console.log('juda sovuq');
}
else if (temp > 14 && temp < 25100) {
    console.log('juda issiq');
}
else if (temp > 9 && temp < 15) {
    console.log('issiq');
}
else if (temp > 0 && temp < 10) {
    console.log('iliq');
}
else {
    console.log('notugri malumot');
}

// nullish operator ?? => faqat null bilan undefined kelsa false boladi xolos boshqa xolda true qaytaradi
// or '||' yoki => faqat null,undefined,NaN false,0 larda false qaytaradi
consol.log(false ?? 1);
console.log(0 && 1);
