import React, { Component } from "react";
import "./App.css";
import Tesseract from "tesseract.js";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uploads: [],
      documents: false,
      loading: false,
    };
  }
  handleChange = (event) => {
    if (event.target.files[0]) {
      var uploads = [];
      for (var key in event.target.files) {
        if (!event.target.files.hasOwnProperty(key)) continue;
        let upload = event.target.files[key];
        uploads.push(URL.createObjectURL(upload));
      }
      this.setState({
        uploads: uploads,
      });
    } else {
      this.setState({
        uploads: [],
      });
    }
  };

  generateText = () => {
    let uploads = this.state.uploads;
    for (var i = 0; i < uploads.length; i++) {
      Tesseract.recognize(uploads[i], "eng", { logger: (m) => console.log(m) })
        .then(({ data: { text } }) => {
          this.setState({ loading: false, documents: text });
          //    console.log(text, 'result');
        })
        .catch((err) => {
          console.log(err);
        });
    }
    //   for(var i = 0; i < uploads.length; i++) {
    //     Tesseract.recognize(uploads[i], {
    //       lang: 'eng'
    //     })
    //     .catch(err => {
    //       console.error(err)
    //     })
    //     .then(result => {
    //       // Get Confidence score
    // //      let confidence = result.confidence

    //       // Get full output
    //       let text = result.text

    //       // Get codes
    //       let pattern = /\b\w{10,10}\b/g
    //       let patterns = result.text.match(pattern);

    //       // Update state
    //       this.setState({
    //         patterns: this.state.patterns.concat(patterns),
    //         documents: this.state.documents.concat({
    //           pattern: patterns,
    //           text: text,
    // //          confidence: confidence
    //         })
    //     })
    //   })
    // }
  };
  copyCodeToClipboard = () => {
    const el = this.textArea;
    el.select();
    document.execCommand("copy");
  };
  render() {
    return (
      <div className="app">
        <header className="header">
          <h1>Image to Text</h1>
        </header>
        {/* File uploader */}
        <section className="hero">
          <label className="fileUploaderContainer">
            Click here to upload documents
            <input
              type="file"
              id="fileUploader"
              onChange={this.handleChange}
              multiple
            />
          </label>

          <div>
            {this.state.uploads.map((value, index) => {
              return <img key={index} src={value} width="100px" />;
            })}
          </div>

          <Button
            onClick={() => {
              this.setState({ loading: true });
              this.generateText();
            }}
            variant="contained"
            color="primary"
            style={{ width: "100%" }}
          >
            Generate
          </Button>
        </section>
        {/* Results */}
        {this.state.loading && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "2rem",
            }}
          >
            <CircularProgress color="secondary" />
          </div>
        )}
        {this.state.documents && (
          <div
            style={{
              margin: "3rem 15vw",
              background: "white",
              padding: "1rem",
              borderRadius: "12px",
            }}
          >
            <Button
              onClick={() => this.copyCodeToClipboard()}
              variant="contained"
              color="primary"
            >
              Copy to Clipboard
            </Button>

            <textarea
              style={{ width: "100%", minHeight: "50vh", marginTop: "1rem" }}
              ref={(textarea) => (this.textArea = textarea)}
              value={this.state.documents}
            />
          </div>
        )}{" "}
      </div>
    );
  }
}

export default App;
