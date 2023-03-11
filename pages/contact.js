import React, { Component } from "react";
import $ from "jquery";

export default class contact extends Component {
  componentDidMount() {
    var submitted = true;
    $("#gform").on("submit", function (e) {
      $("#gform *").fadeOut(1000);
      $("#gform").prepend(
        '<p style="color:yellow;">Thank you for contacting!</p>'
      );
    });
  }
  render() {
    return (
      <>
        <div class="contact">
          <h1>Contact Me</h1>
          <p>
            Whether you want to enquire or start a new project, just Contact me
          </p>
          <form
            name="gform"
            id="gform"
            enctype="text/plain"
            action="https://docs.google.com/forms/d/e/1FAIpQLSc6-yyd_NqFzILyV0siV2fwFXUMEtJ4OxYwQed5MrgGlh2RwA/formResponse?"
            target="hidden_iframe"
            onsubmit="submitted=true;"
          >
            <label for="entry.1507413414">Name : </label>
            <input
              type="text"
              name="entry.1507413414"
              id="entry.1507413414"
              required
            />
            <label for="entry.2010504488">Email : </label>
            <input
              type="email"
              name="entry.2010504488"
              id="entry.2010504488"
              required
            />
            <label for="">Message : </label>
            <textarea
              name="entry.732095473"
              id="entry.732095473"
              cols="30"
              rows="10"
              required
            ></textarea>
            <br />
            <input class="submit1" type="submit" value="Submit" />
          </form>

          <iframe
            name="hidden_iframe"
            id="hidden_iframe"
            style={{ display: "none" }}
            onload="if(submitted) {}"
          ></iframe>
        </div>
      </>
    );
  }
}
