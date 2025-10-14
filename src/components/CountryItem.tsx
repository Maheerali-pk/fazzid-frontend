import Image from "next/image";
import { ICountry } from "@/helpers/data";
import { useGlobalContext } from "@/contexts/GlobalContext";
import classNames from "classnames";
import { getFlagUrl } from "@/helpers/utils";

interface CountryItemProps {
	country: ICountry;
	type?: "country" | "state";
}

const CountryItem: React.FC<CountryItemProps> = ({ country, type = "country" }) => {
	const [state, dispatch] = useGlobalContext()
	const { selectedCountryId } = state
	const handleOnClick = () => {
		if (type === "state") return;
		dispatch({ setState: { selectedCountryId: country.id } })
	}

	// Use the flag URL from the country object (generated from flagsapi.com)
	const flagSrc = country.flag;

	return (
		<div key={country.name} className={classNames("flex flex-col items-center cursor-pointer ",)} onClick={handleOnClick}>
			<div className="w-16 h-16 rounded-3xl bg-[#0D99FF33] flex items-center justify-center overflow-hidden py-4 px-3.5 bg-glass2" >
				{/* Handle both SVG icons and image flags */}
				{country.isIcon ? (
					<div className="text-foreground">
						{country.icon}
					</div>
				) : flagSrc ? (
					<Image
						src={flagSrc}
						alt={`${country.name} flag`}
						width={49}
						height={49}
						unoptimized // Add this for external images
					/>
				) : (
					<p>no image</p>
				)}
			</div>
			<span className="text-foreground text-xs pt-2.5">{country.name}</span>
			<span className="text-foreground text-xs">{country.count}</span>
		</div>
	);
}

export default CountryItem;