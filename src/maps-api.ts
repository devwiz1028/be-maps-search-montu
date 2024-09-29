import axios from "axios";
import { PlaceAutocompleteSearchParams } from "./types";

// https://developer.tomtom.com/search-api/documentation/search-service/fuzzy-search
export async function getPlaceAutocomplete(
  key: string,
  address: string,
  params: PlaceAutocompleteSearchParams = {}
) {
  try {
    const autocompleteResponse = await axios.get(
      `https://api.tomtom.com/search/2/search/${address}.json`,
      {
        params: {
          key,
          ...params
        }
      }
    );
    return autocompleteResponse.data.results;
  } catch (error) {
    console.error("getPlaceAutocomplete error.");
    throw new Error("Failed to fetch address suggestions from TomTom API.");
  }
}
