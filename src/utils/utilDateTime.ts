import { DateTime } from "luxon";

export const getCurrentDateTime = () => {
	return DateTime.now(); // Get the NOW DateTime and store it as string
};

export function diffDateTimes(
	currentDateTime: DateTime,
	lasFeedingDateTime: DateTime
): number {
		return Math.floor(currentDateTime.diff(lasFeedingDateTime, "minutes").minutes) || 0;
}

export function compareDateTimes(diff: number, lasFeedingDateTime: DateTime): string {
	let dispalyMessage = "";
	
	if (diff < 1) {
		return (dispalyMessage = "Just now!");
	} else if (1 <= diff && diff < 60) {
		return (dispalyMessage = `${diff} minutes ago.`);
	} else if (60 <= diff && diff < 120) {
		return (dispalyMessage = "less than 2 hours ago");
	} else if (120 <= diff && diff < 180) {
		return (dispalyMessage = "less than 3 hours ago");
	} else (
		lasFeedingDateTime.toFormat(" cccc, HH:mm")

	)
	return dispalyMessage;
}

// const start = DateTime.fromISO(date);
// 			const now = DateTime.now(); // Get the NOW DateTime and store it as string
// 			const diff = now.diff(start, "minutes");
// 			console.log(`diff: ${diff}`);

// export function setTimeSinceLastFed(diff: number):string {
// 	if (diff < 60){
// 		return ("Just now");
// 	} else if (60<= diff <= )
// 	throw new Error("Function not implemented.");
// }

// export function formatTimeDifference(minutesDiff: number) {
// 	throw new Error("Function not implemented.");
// }