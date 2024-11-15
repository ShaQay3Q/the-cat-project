"use client";

import { Household } from "@/lib/utils/getHousehold";
import CatCard from "./CatCard";
import { Cat } from "@/lib/utils/getCat";
import { useState } from "react";

// const householdId = getHouseholdById()

type Props = {
	oneHousehold: Household;
};

export function HouseholdCats({ oneHousehold }: Props) {
	const [allCats] = useState<Cat[]>([]);
	console.log(`allCats: ${allCats}`);

	const renderCat = (cat: Cat) => (
		<div>
			<CatCard oneCat={cat} />
		</div>
	);

	const allExistingCats = allCats.map(renderCat);

	return <div>{allExistingCats}</div>;
}
