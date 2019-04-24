// Loop through words, adjust timing of words with set timeout every time a word is displayed and allow user to adjust via variable

const START_READING = document.getElementById('start');
const READER = document.getElementById('reader');
const USER_TEXT = document.getElementById('userText');

let userText;
let words;
let currentWord;
let wordSpeed;

function readText(arr, output, speed) {
	let i = 0;
	const timer = setInterval(() => {
		if (i >= arr.length) {
			clearInterval(timer);
		} else {
			currentWord = arr[i];
			output.textContent = currentWord;
			i++;
			console.log(arr[i]);
		}
	}, speed);
}

START_READING.addEventListener('click', function() {
	userText = USER_TEXT.value;
	words = userText.split(' ');

	const READER_SPEED = parseInt(document.getElementById('wordSpeed').value) * 100;

	readText(words, READER, READER_SPEED);
});
