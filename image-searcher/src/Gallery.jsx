import { useFetchImages } from './reactQueryCustomHooks'
import image from './assets/image-loading.svg'

const Gallery = () => {
  const { data, isLoading, isError } = useFetchImages()

  if (isLoading) {
    return (
      <section className="fetching">
        <h4 className="loading"></h4>
      </section>
    )
  }
  if (isError) {
    return (
      <section className="fetching">
        <h4 className="error">An error occured...</h4>
      </section>
    )
  }
  if (data.length < 1) {
    return (
      <section className="fetching">
        <img src={image} alt="no image found" className="no-image" />
        <h4>No result found</h4>
      </section>
    )
  }

  return (
    <div className="image-container">
      {data.map((item) => {
        const source = item.urls.regular
        return <img src={source} alt="image" className="image" key={item.id} />
      })}
    </div>
  )
}
export default Gallery
