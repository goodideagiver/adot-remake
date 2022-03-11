const ageSpan = document.getElementById('age');

const getAge = () => {
	const date = new Date();
	const currentYear = date.getFullYear();
	const currentMonth = date.getMonth() + 1;
	const currentDay = date.getUTCDate();
	const yearDiff = currentYear - 1999;
	if (currentMonth >= 3) {
		if (currentMonth === 3 && currentDay < 2) {
			return yearDiff - 1;
		}
		return yearDiff;
	} else {
		return yearDiff - 1;
	}
};

ageSpan.innerText = getAge();
