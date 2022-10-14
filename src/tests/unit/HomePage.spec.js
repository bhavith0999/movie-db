import { render } from '@testing-library/vue'
import HomePage from '../../views/Home'

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({
    data: {
      items: [
        {
          "id": "tt0111161",
          "rank": "1",
          "title": "The Shawshank Redemption",
          "fullTitle": "The Shawshank Redemption (1994)",
          "year": "1994",
          "image": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.6716_AL_.jpg",
          "crew": "Frank Darabont (dir.), Tim Robbins, Morgan Freeman",
          "imDbRating": "9.2",
          "imDbRatingCount": "2649783"
        },
        {
          "id": "tt0068646",
          "rank": "2",
          "title": "The Godfather",
          "fullTitle": "The Godfather (1972)",
          "year": "1972",
          "image": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.7015_AL_.jpg",
          "crew": "Francis Ford Coppola (dir.), Marlon Brando, Al Pacino",
          "imDbRating": "9.2",
          "imDbRatingCount": "1836794"
        },
        {
          "id": "tt0468569",
          "rank": "3",
          "title": "The Dark Knight",
          "fullTitle": "The Dark Knight (2008)",
          "year": "2008",
          "image": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_Ratio0.6716_AL_.jpg",
          "crew": "Christopher Nolan (dir.), Christian Bale, Heath Ledger",
          "imDbRating": "9.0",
          "imDbRatingCount": "2621811"
        },
        {
          "id": "tt0071562",
          "rank": "4",
          "title": "The Godfather Part II",
          "fullTitle": "The Godfather Part II (1974)",
          "year": "1974",
          "image": "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.7015_AL_.jpg",
          "crew": "Francis Ford Coppola (dir.), Al Pacino, Robert De Niro",
          "imDbRating": "9.0",
          "imDbRatingCount": "1258690"
        }
      ]
    }
  }))
}))

describe('HomePage.vue', () => {
  it('render HomePage with movies ', () => {
    const { getAllByTestId, getByText } = render(HomePage);
    expect(getByText(/Coming Soon/)).toBeDefined();
  })
})