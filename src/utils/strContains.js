const strContains = (cardTitle, searchValue) => {
    return cardTitle.toLowerCase().includes(searchValue.toLowerCase())
  }

export default strContains