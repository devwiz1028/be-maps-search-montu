import { getPlaceAutocomplete } from "./maps-api";
import { PlaceAutocompleteResult } from "./types";

export async function getAutoCompleteDetails(
  address: string
): Promise<PlaceAutocompleteResult[]> {
  const apiKey: string | undefined = process.env.TOMTOM_API_KEY;
  if (!apiKey) {
    throw new Error(
      "API key is not defined. Please set the TOMTOM_API_KEY environment variable."
    );
  }

  try {
    const response = await getPlaceAutocomplete(apiKey, address, {
      limit: 100,
      countrySet: "AU"
    });

    return response.map(({
      id,
      address: {
        freeformAddress,
        country,
        countryCode,
        streetNumber,
        municipality
      }
    }: any) => ({
      placeId: id,
      freeformAddress,
      country,
      countryCode,
      streetNumber,
      municipality
    }));
  } catch (error) {
    console.error("getAutoCompleteDetails error.");
    throw new Error("Failed to fetch address suggestions from TomTom API.");
  }
}
