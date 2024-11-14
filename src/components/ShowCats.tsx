import { Household } from "@/lib/utils/getHousehold";
import CatCard from "./CatCard";
import { Cat } from "@/lib/utils/getCat";

// const householdId = getHouseholdById()

type OneCat = {
	oneCat: Cat;
	oneHousehold: Household;
};

export function RenderCatCards({ oneCat, oneHousehold }: OneCat) {
	function renderCard() {
		const l = oneHousehold?.cats.length || 0;
		if (l) return [];
		for (let i = 0; i < l; i++) {
			return <CatCard oneCat={oneCat} />;
		}
	}

	const householdCats = oneHousehold?.cats.map(renderCard);

	return householdCats;
}
