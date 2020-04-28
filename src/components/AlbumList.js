import React, { Component } from "react";

class AlbumList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoading: false,
      Albums: [],
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/albums")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoading: true,
            Albums: result,
          });
          console.log(result);
        },
        (error) => {
          this.setState({
            isLoading: false,
            error,
          });
          console.log(error);
        }
      );
  }

  render() {
    const { error, isLoading, Albums } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoading) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Welcome!</strong> Note that every Album could have multiple songs, and every song could have multiple artists

            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          {Albums.map((album) => (
          
          <div class="card mb-3 shadow-sm" key={album.id}>
            <div class="card-header">
              <h2 class="mb-0"><i class="fas fa-angle-right mr-3"></i>{album.title}</h2>
              <small class="text-muted"><em>YEAR: {album.year_released}, SONGS: {album.number_of_songs}</em></small>
            </div>
            <div class="card-body">
              <h3 class="card-title display-4">Songs</h3>
              {album.songs.map((song) =>(
                <ul class="mb-5">
                  <h4 class="card-text"><u><strong>Title:</strong> {song.title}</u></h4>
                  Artists:
                  {song.artist.map((art) =>(
                    <span class="ml-2">{art.name},</span>
                  ))}
                  
                </ul>
              ))}
            </div>
          </div>
            
          ))}
          <p><em>Albums: {Albums.length}</em></p>
        </div>
      );
    }
  }
}

export default AlbumList;
