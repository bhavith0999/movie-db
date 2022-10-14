import { render } from '@testing-library/vue'
import MoviePage from '../../views/Movie'

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({
    data: {
        "id": "tt0111161",
        "rank": "1",
        "title": "The Shawshank Redemption",
        "fullTitle": "The Shawshank Redemption (1994)",
        "year": "1994",
        "image": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.6716_AL_.jpg",
        "crew": "Frank Darabont (dir.), Tim Robbins, Morgan Freeman",
        "imDbRating": "9.2",
        "imDbRatingCount": "2649783"
    }
  }))
}))

describe('MoviePage.vue', () => {
  it('render MoviePage with movies ', () => {
    const container = render(MoviePage);
    expect(container).toBeDefined()
  })
})