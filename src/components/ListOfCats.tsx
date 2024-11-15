"use client";

import CatCard from "./CatCard";
import { Cat } from "@/lib/utils/getCat";

type Props = {
	cats: Cat[];
};
export function ListOfCats({ cats }: Props) {
	if (cats.length !== 0) {
		const allCats = cats.map((cat: Cat) => (
			<CatCard
				key={cat?.id}
				oneCat={cat}
			/>
		));

		return allCats;
	}
}
