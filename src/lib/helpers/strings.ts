export const getPublicationDate = (date: Date) => {
	const day = date.getDate();
	const monthIndex = date.getMonth();
	const monthIndexToMonth = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	const year = date.getFullYear();
	return `${monthIndexToMonth[monthIndex]} ${day}, ${year}`;
};
