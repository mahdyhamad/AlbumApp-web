import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        <div class="container section-before">
          <h1>get production with musicdb</h1>
          <p class="per-2">pick your prefered instrument</p>
          <p class="per-3">
            pick the instrument you need to compose your piece
          </p>
          <a class="start-link" href="#start">
            <p>start composing</p>
          </a>
        </div>
        <footer class="site-footer">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-3">
                <p class="text-justify">
                  <a href="">
                    <img
                      src={require("../assists/logo white-01.png")}
                      width="120px"
                    />
                  </a>
                </p>
              </div>

              <div class="col-xs-6 col-md-3">
                <ul class="footer-links">
                  <li>
                    <a href="#people">PEOPLE</a>
                  </li>
                  <li>
                    <a href="#sign_in">SIGN IN</a>
                  </li>
                  <li>
                    <a href="#music">MUSIC</a>
                  </li>
                </ul>
              </div>
            </div>
            <br />
            <br />
          </div>
          <div class="container">
            <div class="row">
              <div class="col-md-12 col-sm-12 col-xs-12 last">
                <ul className="footer-links-last">
                  <li>
                    <a href="#">legal</a>
                  </li>
                  <li>
                    <a href="#">privacy center</a>
                  </li>
                  <li>
                    <a href="#">coockies</a>
                  </li>
                  <li>
                    <a href="#">about ads</a>
                  </li>
                </ul>
                <p class="rights">©2019musicdb</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
