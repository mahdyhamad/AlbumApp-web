import React, { Component } from "react";
import { Query, useQuery } from "@apollo/react-hooks";
import { GET_ALBUMS } from "../graphql/get_albums";

function AlbumList() {
  const { loading, error, data } = useQuery(GET_ALBUMS);
  if (error) {
    return (
      <div class="alert alert-primary" role="alert">
        Something is Worng! {error.message}
      </div>
    );
  } else if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="main-container">
        <div class="container">
          <div class="row">
            <div class="col-sm-4">
              <p class="intro-text1">amp up</p>
              <p class="intro-text2">those dbs</p>
              <p class="intro-text3">make music on the go.</p>
              <a href="#">
                <img src={require("../assists/hit it-01.png")} width="200px" />
              </a>
              <br />
              <small>
                <em>Albums: {data.allAlbums.length}</em>
              </small>
            </div>
            <div class="albums-wrap col-sm">
              {data.allAlbums.map((album) => (
                <div className="album-box shadow-sm">
                  <p class="album-title">
                    <i class="fab fa-itunes-note"></i>Title: {album.title} (
                    {album.yearReleased})
                  </p>
                  <small>Number of songs: {album.numberOfSongs}</small>
                  <small>
                    <ol>
                      {album.songs.map((song) => (
                        <li>
                          <p>{song.title}</p>
                          <p>
                            artists:
                            {song.artist.map((artist) => (
                              <spam>{artist.name},</spam>
                            ))}
                          </p>
                        </li>
                      ))}
                    </ol>
                  </small>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AlbumList;

/* <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Welcome!</strong> Note that every Album could have multiple
        songs, and every song could have multiple artists
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      {data.allAlbums.map((album) => (
        <div class="card mb-3 shadow-sm" key={album.id}>
          <div class="card-header">
            <h2 class="mb-0">
              <i class="fas fa-angle-right mr-3"></i>
              {album.title}
            </h2>

            <small class="text-muted">
              <em>
                YEAR: {album.year_released}, SONGS: {album.number_of_songs}
              </em>
            </small>
          </div>

          <div class="card-body">
            <h3 class="card-title display-4">Songs</h3>

            {album.songs.map((song) => (
              <ul class="mb-5">
                <h4 class="card-text">
                  <u>
                    <strong>Title:</strong> {song.title}
                  </u>
                </h4>
                Artists:
                {song.artist.map((art) => (
                  <span class="ml-2">{art.name},</span>
                ))}
              </ul>
            ))}
          </div>
        </div>
      ))}

      <p>
        <em>Albums: {data.allAlbums.length}</em>
      </p> */
