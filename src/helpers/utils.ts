export const truncateText = (text: string, maxLength: number) => {
   return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

/**
 * Generate a flag URL using the Flags API
 * @param countryCode - The ISO 3166-1 alpha-2 country code (e.g., "US", "GB")
 * @param style - The flag style: "flat", "shiny", or "square"
 * @param size - The size of the flag in pixels (e.g., 16, 24, 32, 48, 64)
 * @returns The complete URL for the flag image
 */
import { ICountry } from "./data";

export const getFlagUrl = (countryCode: string) => {
	return `https://flagsapi.com/${countryCode}/flat/64.png`;
};

// Country icons available in CountryIcons folder
const availableCountryIcons = [
	"Afghanistan", "Algeria", "Angola", "Argentina", "Australia", "Austria", "Azerbaijan",
	"Bangladesh", "Belarus", "Belgium", "Benin", "Bolivia", "Brazil", "Burkina Faso",
	"Burundi", "Cambodia", "Cameroon", "Canada", "Chad", "Chile", "China", "Colombia",
	"Cuba", "Czech Republic (Czechia)", "Côte d'Ivoire (Ivory Coast)", "Democratic Republic of the Congo",
	"Dominican Republic", "Ecuador", "Egypt", "Ethiopia", "France", "Germany", "Ghana",
	"Greece", "Guatemala", "Guinea", "Haiti", "Honduras", "Hungary", "India", "Indonesia",
	"Iran", "Iraq", "Italy", "Jordan", "Kazakhstan", "Kenya", "Madagascar", "Malawi",
	"Malaysia", "Mali", "Mexico", "Morocco", "Mozambique", "Myanmar (burma)", "Nepal",
	"Netherlands", "Niger", "Nigeria", "North Korea", "Pakistan", "Papua New Guinea",
	"Peru", "Philippines", "Poland", "Portugal", "Romania", "Russia", "Rwanda", "Saudi Arabia",
	"Senegal", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain",
	"Sri Lanka", "Sudan", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania",
	"Thailand", "Tunisia", "Turkey", "UAE", "Uganda", "United Kingdom", "Ukraine", "United States",
	"Uzbekistan", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

export const getCountryIconPath = (countryName: string) => {
	// Check if we have the icon for this country
	let formattedName = countryName;
	
	// Special case mappings
	const specialCases: {[key: string]: string} = {
		"United Kingdom": "uk n",
		"United States": "us n", 
		"France": "France n",
		"Germany": "Germany n",
		"Canada": "Canada n",
		"Papua New Guinea": "papua new guinea flag",
		"Saudi Arabia": "Saudi arabia",
		"Myanmar": "Myanmar (burma)"
	};
	
	// Apply special case formatting
	if (specialCases[countryName]) {
		formattedName = specialCases[countryName];
	}
	
	// Check if we have this country icon in our list
	if (!availableCountryIcons.includes(countryName) && !Object.keys(specialCases).includes(countryName)) {
		// If not available, return null to trigger the fallback
		return null;
	}
	
	return `/images/CountryIcons/${formattedName}.png`;
};

/**
 * Generate a state flag URL
 * @param stateCode - The two-letter state code (e.g., "CA", "TX")
 * @param countryCode - The country code (default: "US")
 * @param width - The width of the flag image (default: 80)
 * @returns The complete URL for the state flag image
 */
export const getStateFlagUrl = (
   stateCode: string,
   countryCode: string = "US",
   width: number = 80
): string => {
   // For US states, use local images
   if (countryCode === "US" && stateCode) {
      // For US, the code needs to be converted to state name - this will be handled in data.ts
      return `/images/USStates/US states/${stateCode}.png`;
   }

   // For other countries, use the local images
   if (countryCode === "CA") {
      return `/images/CanadaStates/Canada States/${stateCode}.png`;
   }

   if (countryCode === "IN") {
      return `/images/IndianStates/Indian states/${stateCode}.png`;
   }

   if (countryCode === "PK") {
      return `/images/PakistanStates/Pakistan States/${stateCode}.png`;
   }

   // Fallback for unknown states
   return `/images/flags/states/${stateCode}.png`;
};
