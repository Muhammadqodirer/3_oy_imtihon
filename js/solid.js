// ---------------------------------------------------
// 1-masala
// charCounter degan funksiya yoz. Ushbu funksiya argument sifatida string qabul qiladi. Berilgan string ichidan belgilarni sanab qaytarib beradi. Belgilarni alohida-alohida ajratishi kerak. Raqamlar alohida, harflarni unli va undoshi alohida, belgilar alohida hamda bo'sh joylar alohida sanalishi kerak.

// function charCounter(str) {
//   let bosh=0   //bu ozgaruvchi biz bosh joylarni wu ozgaruvchiga saqlap ketamz boshida default 0 turadi
//   let raqam=0 //bu ozgaruvchi biz raqamlardi joylarni wu ozgaruvchiga saqlap ketamz boshida default 0 turadi
//   let raqamlar='0123456789' // str ichigagi raqamlarni bor mi yoki yoqligini tekshiramz
//   let belgilar=0 //bu ozgaruvchi biz belgilarni joylarni wu ozgaruvchiga saqlap ketamz boshida default 0 turadi
//   let belgi='~!@#$%^&*()_+=-/*<>,.?' // str ichigagi belgilarni bor mi yoki yoqligini tekshiramz
//   let unli_h=0 //bu ozgaruvchi biz unli hariflardi joylarni wu ozgaruvchiga saqlap ketamz boshida default 0 turadi
//   let unlilar='aeiou' // str ichigagi unli hariflardi bor mi yoki yoqligini tekshiramz
//   let undosh_h=0  //bu ozgaruvchi biz undosh hariflardi joylarni wu ozgaruvchiga saqlap ketamz boshida default 0 turadi
//   let undoshlar='bcdfghjklmnpqrstvwxyz' // str ichigagi undosh harif lardi bor mi yoki yoqligini tekshiramz
//  let i=0 //bu while  cheksz iwlamasligi uchun
//  str = str.toLowerCase() // bu kata hariflardi kichkina hariflarga otkizish uchun
//   while (i < str.length){ //bu  owa berilgan stringni aynalib tekshirish uchun 
//     let char=str[i] // index boyicha har bitasini tekshirish uchun
//     if(unlilar.includes(str[i])){ 
//       unli_h++
//     }
//     if(undoshlar.includes(str[i])){
//       undosh_h++
//     }
//     if(raqamlar.includes(str[i])){
//       raqam++
//     }
//     if(belgi.includes(str[i])){
//       belgilar++
//     }
//     if(" ".includes(str[i])){
//       bosh++
//     }
//     i++
    
//   }
//   return `unli_h: ${unli_h} undosh_h: ${undosh_h} raqam: ${raqam} belgilar: ${belgilar} bosh: ${bosh}`// tekshirish uchun+  

// }

// const result = charCounter(
//   "assalomu alaykum, birodarim yaxshimisan? seni 3 marta daladan qidirdim, lekin hech ham topa olmadim!"
// );

// console.log(result); // example obyektidek javob qaytarishi kerak

// const example = {
//   harflar: {
//     unli: {
//       a: 2,
//       o: 5,
//       i: 4,
//     },
//     undosh: {
//       l: 4,
//       m: 3,
//     },
//   },
//   raqamlar: {
//     3: 4,
//     5: 3,
//   },
//   belgilar: {
//     "?": 3,
//     "!": 2,
//   },
//   "bo'sh joylar": 4,
// };





// ---------------------------------------------------
// 2-masala
// Shunaqangi funksiya yozingki, siz yozgan funksiya array va gender parametrlarini qabul qilsin. So'rlagan jins vakillarining o'rtacha yoshini qaytarsin.

// O'rtacha yosh = jami yoshlar / son


// function getMiddleAge(array, gender) {
//   let i=0
//   let ortacha=0
//   let count=0
//   while(i<array.length){
//     if(array[i].gender===gender){
//       ortacha+=array[i].age
//        count++;
//     }
//     i++
//   }
//    if (count === 0) return 0;
//   let avarage=ortacha/count
//  avarage= Math.floor(avarage)
//   return avarage
// }

// const students = [
//   { name: "Fotima", gender: "female", id: 1, age: 45 },
//   { name: "Aziz", gender: "male", id: 4, age: 32 },
//   { name: "Zuhra", gender: "female", id: 2, age: 23 },
//   { name: "Malika", gender: "female", id: 3, age: 78 },
//   { name: "Mavlon", gender: "male", id: 7, age: 43 },
//   { name: "Adiba", gender: "female", id: 54, age: 26 },
// ];

// const result = getMiddleAge(students, "female");
// console.log(result); // 37.5 => 37 yosh


// 3-masala

// function charCounter(str) {
//   let bosh=0   //bu ozgaruvchi biz bosh joylarni wu ozgaruvchiga saqlap ketamz boshida default 0 turadi
//   let raqam=0 //bu ozgaruvchi biz raqamlardi joylarni wu ozgaruvchiga saqlap ketamz boshida default 0 turadi
//   let raqamlar='0123456789' // str ichigagi raqamlarni bor mi yoki yoqligini tekshiramz
//   let belgilar=0 //bu ozgaruvchi biz belgilarni joylarni wu ozgaruvchiga saqlap ketamz boshida default 0 turadi
//   let belgi='~!@#$%^&*()_+=-/*<>,.?' // str ichigagi belgilarni bor mi yoki yoqligini tekshiramz
//   let unli_h=0 //bu ozgaruvchi biz unli hariflardi joylarni wu ozgaruvchiga saqlap ketamz boshida default 0 turadi
//   let unlilar='aeiou' // str ichigagi unli hariflardi bor mi yoki yoqligini tekshiramz
//   let undosh_h=0  //bu ozgaruvchi biz undosh hariflardi joylarni wu ozgaruvchiga saqlap ketamz boshida default 0 turadi
//   let undoshlar='bcdfghjklmnpqrstvwxyz' // str ichigagi undosh harif lardi bor mi yoki yoqligini tekshiramz
//  let i=0 //bu while  cheksz iwlamasligi uchun
//  str = str.toLowerCase() // bu kata hariflardi kichkina hariflarga otkizish uchun
//   while (i < str.length){ //bu  owa berilgan stringni aynalib tekshirish uchun 
//     let char=str[i] // index boyicha har bitasini tekshirish uchun
//     if(unlilar.includes(str[i])){ 
//       unli_h++
//     }
//     if(undoshlar.includes(str[i])){
//       undosh_h++
//     }
//     if(raqamlar.includes(str[i])){
//       raqam++
//     }
//     if(belgi.includes(str[i])){
//       belgilar++
//     }
//     if(" ".includes(str[i])){
//       bosh++
//     }
//     i++
    
//   }


// function getMiddleAge(array, gender) { // Funksiya 2 ta parametr qabul qiladi:
  
//   let i = 0;  // Sikl uchun boshlang'ich indeks
//   let ortacha = 0; // Umumiy yosh yig'indisi uchun o'zgaruvchi
//   let count = 0; // Mos jinsdagi odamlar sonini sanaydi

//   while(i < array.length){// Arraydagi barcha elementlarni tekshiradi
//     if(array[i].gender === gender){ // Agar joriy talabaning jinsi kerakli genderga teng bo‘lsa
//       ortacha += array[i].age; // Uning yoshini ortacha o‘zgaruvchiga qo‘shadi
//       count++;  // Mos kelganlar sonini bitta oshiradi
//     }
//     i++;   // Indeksni keyingi elementga o‘tkazadi
//   }

//   if (count === 0) return 0; // Agar hech qanday mos odam bo'lmasa, 0 qaytariladi

//   let avarage = ortacha / count; // O‘rtacha yosh = jami yosh / odamlar soni
//   avarage = Math.floor(avarage); // O‘rtacha yoshni pastga qarab yaxlitlaydi (butun son qiladi)
  
//   return avarage;  // Hisoblangan o‘rtacha yoshni qaytaradi
// }


// 4-masala

// 4-masala
// Ushbu oyda qiynalgan mavzularingiz ro'yhatini to'liq yozing.

// 1 HOF, CALLBACK NIMA EKANLIGINI TUSHUNMADIM
// 2 WHILE VA DO WHILE NI YAHWI TUSHUNMADIM
// 3 FUNKSIYALARNI 70% TUWUNDM 30% TUWUNMADM
