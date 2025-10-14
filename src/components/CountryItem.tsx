import Image from "next/image";
import { ICountry } from "@/helpers/data";
import { useGlobalContext } from "@/contexts/GlobalContext";
import classNames from "classnames";
import { getFlagUrl, getCountryIconPath } from "@/helpers/utils";

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

	
	// Try to get local country icon from our public folder
	const localIconPath = getCountryIconPath(country.name);
	// Fallback to the API flag URL if local icon isn't available

	const flagSrc = country.flag;

	return (
		<div key={country.name} className={classNames("flex flex-col items-center cursor-pointer ",)} onClick={handleOnClick}>
			<div className="w-16 h-16 rounded-3xl bg-[#0D99FF33] flex items-center justify-center overflow-hidden py-4 px-3.5 bg-glass2" >
				{/* Handle both SVG icons and image flags */}
				{country.isIcon ? (
					<div className="text-foreground">
						{country.icon}
					</div>
				) : localIconPath ? (
					<Image
						src={localIconPath}
						alt={`${country.name} flag`}
						width={49}
						height={49}
						onError={(e) => {
							// Fallback to the API flag if local image fails to load
							if (flagSrc) {
								(e.target as HTMLImageElement).src = flagSrc;
							}
						}}
					/>
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