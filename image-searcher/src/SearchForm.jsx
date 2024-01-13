import { useContext } from 'react'
import { AppContext } from './context'

const SearchForm = () => {
  const { setIsImageSearch, isDarkTheme } = useContext(AppContext)
  const handleSubmit = (e) => {
    e.preventDefault()
    const searchValue = e.target.elements.search.value
    if (!searchValue) return
    setIsImageSearch(searchValue)
  }
  return (
    <section className="form-section">
      <h1 className="title">ImageHub</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="office"
          className={isDarkTheme ? 'form-input search-input' : 'form-input'}
        />
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </section>
  )
}
export default SearchForm
