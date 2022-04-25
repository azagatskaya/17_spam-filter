'use strict';

const btn = document.querySelector('.new-msg__btn');
btn.addEventListener('click', sendMsg);

function sendMsg() {
	printMsg(checkSpam());
}

function checkSpam() {
	const spamExamples = [/viagra/ig, /xxx/ig];
	let filteredMsg = '';
	let resultText = getUserMsg();
	for (let spamWord of spamExamples) {
		filteredMsg = resultText.replace(spamWord, '***');
		resultText = filteredMsg;
	}
	return filteredMsg;
}

function getUserMsg() {
	return document.querySelector('.new-msg__text').value;
}

function printMsg(filteredMsg) {
	getOutgoingBox().innerText += (filteredMsg + '\n');
}

function getOutgoingBox() {
	return document.querySelector('.message--outgoing');
}