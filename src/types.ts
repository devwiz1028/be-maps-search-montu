export type PlaceAutocompleteResult = {
  placeId: string;
  freeformAddress: string;
  country: string;
  countryCode: string;
  streetNumber: string;
  municipality: string;
}

export type PlaceAutocompleteSearchParams = {
  limit?: number;
  countrySet?: "AU";
}
