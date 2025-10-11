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
export const getFlagUrl = (countryCode: string, style: 'flat' | 'shiny' | 'square' = 'flat', size: number = 5): string => {
   return `https://flagsapi.com/${countryCode}/${style}/${size}.png`;
};

/**
 * Generate a US state flag URL
 * @param stateCode - The two-letter state code (e.g., "CA", "TX")
 * @param width - The width of the flag image (default: 80)
 * @returns The complete URL for the state flag image
 */
export const getStateFlagUrl = (stateCode: string, width: number = 80): string => {
   return `https://flagcdn.com/w${width}/us-${stateCode.toLowerCase()}.png`;
};
