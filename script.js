function firstWord(s) {
  // your code here
	let reg=/\s/;
	let arr=s.split(reg);
	return arr[0];
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
