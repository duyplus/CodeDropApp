export const updateSearchParams = (newParams: any) => {
  const currentParams = new URLSearchParams(window.location.search);
  for (const [key, value] of Object.entries(newParams)) {
    currentParams.set(key, JSON.stringify(value));
  }

  const newSearch = `?${currentParams.toString()}`;
  window.history.replaceState(
    {},
    "",
    `${window.location.pathname}${newSearch}`
  );
};

export const getSearchParams = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const params: Record<string, any> = {};

  for (const [key, value] of searchParams.entries()) {
    try {
      // Attempt to parse the value as JSON
      params[key] = JSON.parse(value);
    } catch (error) {
      // If parsing fails, store the raw value
      params[key] = value;
    }
  }

  return params;
};
