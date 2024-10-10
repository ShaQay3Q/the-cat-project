import { DateTime } from "luxon";

export const getCurrentDateTime = () => {
	return DateTime.now(); // Get the NOW DateTime and store it as string
};

export function compareDateTimes(
	currentDateTime: DateTime,
	lasFeedingDateTime: DateTime
): number {
	const diff =
		currentDateTime.diff(lasFeedingDateTime, "minutes").toObject().minutes || 0;

	// const minutesDiff = compareDateTimes(now, lastFedDateTime);
	// const formattedDiff = formatTimeDifference(minutesDiff);
	// setTimeSinceLastFed(formattedDiff);
	// if (currentDateTime.daysInYear === lasFeedingDateTime.daysInYear) {
	// 	return 0
	// }
	return diff;
}

// export function setTimeSinceLastFed(diff: number):string {
// 	if (diff < 60){
// 		return ("Just now");
// 	} else if (60<= diff <= )
// 	throw new Error("Function not implemented.");
// }

// export function formatTimeDifference(minutesDiff: number) {
// 	throw new Error("Function not implemented.");
// }
