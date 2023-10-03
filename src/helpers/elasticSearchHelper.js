function elasticSearchHelper(event, currencies, notFound, setState) {
  if (event.target.value !== '') {
    const searchResults = Object.values(currencies).filter((currency) => {
      const inputValue = event.target.value.toLowerCase();
      if (
        currency.shortName.toLowerCase().includes(inputValue) ||
        currency.fullName.toLowerCase().includes(inputValue)
      )
        return currency;
      return null;
    });
    if (searchResults.length === 0) {
      setState({ searchResultElements: [{ fullName: '', shortName: notFound }] });
    } else {
      setState({ searchResultElements: searchResults });
    }
  } else {
    setState({ searchResultElements: [] });
  }
}

export default elasticSearchHelper;
