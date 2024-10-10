import { API } from "./api";

export const properties = async () => {
  const url = `/api/properties`;
  return API.get(url);
};

export const financialsById = async (propertyId) => {
  const url = `/api/financials/${propertyId}`;
  return API.get(url);
};
