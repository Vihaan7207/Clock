const update = () => {
	let date = new Date();
	let dateObj = {
		year: date.getFullYear(),
		month: date.getMonth(),
		day: date.getDate(),
		hour: date.getHours(),
		minute: date.getMinutes(),
		second: date.getSeconds()
	};
	if(dateObj.hour > 12){
		dateObj.hour -= 12;
	}
	if(dateObj.minute < 10){
		dateObj.minute = "0" + dateObj.minute;
	}
	if(dateObj.second < 10){
		dateObj.second = "0" + dateObj.second;
	}
	document.getElementById('time').innerHTML = `${dateObj.hour}:${dateObj.minute}:${dateObj.second} EST`;
}
setInterval(update, 100);
