import gql from "graphql-tag";

export const GET_ALBUMS = gql`
  {
    allAlbums {
      id
      title
      yearReleased
      numberOfSongs
      songs {
        id
        title
        artist {
          id
          name
        }
      }
    }
  }
`;
