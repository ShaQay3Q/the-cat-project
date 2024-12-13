const formatDateISO = (date: Date) => {
	// Convert the date to ISO string
	const isoString = date.toISOString();
	// Split at the "T" character to get the date part
	const formattedDate = isoString.split("T")[0];
	return formattedDate;
};

export default formatDateISO;
