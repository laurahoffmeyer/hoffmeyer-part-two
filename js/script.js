let rain = null;
rain = prompt ("How much rain fell? [inches]");
while (rain === null || rain === "") {
    rain = prompt ("How much rain fell? [inches]");
}
console.log(rain);

let rainNum = parseInt(rain, 10);

console.log(rainNum);

let s = ("*");

let sRepeater = s.repeat(rainNum);

console.log(sRepeater);

let yeild = 50;

if (rain >= 20) {
    yeild *= .9;
  } else if (rain < 10) {
    yeild *= .8;
  } else (yeild = 50)

  console.log(yeild);


let fertilizer = null;
fertilizer = prompt ("Have you used fertilizer? [yes or no]");
while (fertilizer === null || fertilizer === "") {
    fertilizer = prompt ("Have you used fertilizer? [yes or no]");
}
console.log(fertilizer);
  
if (fertilizer === "yes") {
    fertilizer_type = prompt ("What type of fertilizer? [premium or regular]");
} else if (fertilizer === "no") {
    fertilizer_type = null;
}

if (fertilizer_type === "regular") {
    yeild *= 1.1;
} else if (fertilizer_type === "premium") {
    yeild *= 1.15;
} else if (fertilizer_type === null) {
    yeild *= 1;
}

console.log("Your yeild should be " + yeild.toFixed(2) + " bushels per acre");
