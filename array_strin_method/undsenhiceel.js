const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Array hamgiin ehnii utgiig hewlej gargah: ", arr[0]);
console.log(
  "Array hamgiin ehnii utgiig hewlej gargah .at ashoglan: ",
  arr.at(0)
);

const array1 = ["a", "b"];
const array2 = ["l", "k"];
const array5 = array1.concat(array2);
const array6 = array1 + array2;
console.log("Array nuudiig 1 array  bolgoh, .concat ashiglan:", array5);
console.log("Array nuudiig 1 array  bolgoh + ashglan:", array6);

const array7 = [1, 5, 6, 7];
console.log(array7.includes(5));
let xaixUtga = 6;
console.log("Tanii tursun sar:", xaixUtga);
console.log("Tanii tursun sar bgaa eseh", array7.includes(xaixUtga));

const animals = ["chono", "nugas", "buhun", "temee", "nugas", "Exbplauinhun"];
console.log("Heddeh index deer bn we: ", animals.indexOf("buhun"));
console.log("Heddeh index deer bn we: ", animals.indexOf("nohoi"));
console.log(
  "2-r indexees hoish heddeh index deer bn we: ",
  animals.indexOf("nugas", 2)
);

const jiguurten = ["Elee", "Heree", "Galuu"];
console.log(jiguurten.join());
console.log(jiguurten.join("_"));
console.log(jiguurten.join("-"));

console.log(jiguurten.pop());
console.log(jiguurten);
console.log(jiguurten.pop());
console.log(jiguurten);

const amitan = ["galuu", "uher", "honi"];
console.log("Nemj amitan oruulsan index haragdaj bn:", amitan.push("ymaa"));
console.log("Nemj amitan oruulsan amitni ner haragdaj bn:", amitan);
const nemeh = "ylaa";
console.log("Nemj amitan oruulsan index haragdaj bn:", amitan.push(nemeh));
console.log("Nemj amitan oruulsan amitnii ner haragdaj bn:", amitan);

const nums = [1, 2, 3, 4, 5];
console.log("Hamgiin ehnii indexiig awaw:", nums.shift());
console.log("Hamgiin ehnii indexiig awsii daraa:", nums);
console.log("Index urt bolgow", nums.unshift(99, 88));
console.log("Index nemsen too haragdaj bn hagiin urd", nums);

const nums1 = [7, 2, 5, 8, 9, 0];
console.log(nums1);
console.log("sort", nums1.sort());
console.log("reverse", nums1.reverse());

const letters = ["beer", "xaip", "soow"];
console.log(letters);
console.log("sort", letters.sort());
console.log("reverse", letters.reverse());

const tarr = ["bat", "dorj", "purev", "davaa", "tomor"];
console.log(tarr);
console.log("Ehnii 2 hurtelh indexiig tasdaj awaw:", tarr.slice(2));
console.log("1-2 indexiig tasdaj awaw:", tarr.slice(1, 3));
console.log("Hoinoosoo 3 index tasdah tasdaj awaw:", tarr.slice(-3));
tarr.splice(1, 0, "Bayma");
console.log("1 deh index deer utga nemeh", tarr);

const str = "Arvan tavan targan tarvaga";
console.log(str.split(" "));
