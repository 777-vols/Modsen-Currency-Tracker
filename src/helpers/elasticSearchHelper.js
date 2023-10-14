function elasticSearchHelper(event, currencies, notFound, setState, searchResultComponetsMapper) {
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
      setState({
        searchResultComponets: searchResultComponetsMapper([{ fullName: notFound, shortName: '' }])
      });
    } else {
      setState({
        searchResultElements: searchResults,
        searchResultComponets: searchResultComponetsMapper(searchResults)
      });
    }
  } else {
    setState({ searchResultElements: [], searchResultComponets: [] });
  }
}

export default elasticSearchHelper;
