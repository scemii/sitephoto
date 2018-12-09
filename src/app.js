import React from "react";
import * as contentful from "contentful";
import ModalImage from "react-modal-image";

const client = contentful.createClient({
  space: "uwmxdtwvcb8n",
  accessToken:
    "df07ec00060dad219101320ac34f14b77a164b15c202b2f630277cf8239811cb"
});

class Blog extends React.Component {
  state = {
    photos: []
  };

  componentDidMount() {
    this.fetchPosts().then(this.setPhotos);
  }

  fetchPosts = () => client.getEntries();

  setPhotos = response => {
    this.setState({
      photos: response.items
    });
  };

  render() {
    return (
    <div>
        <div className="HeroGroup">
        </div>
        {this.state.photos.map(({ fields }) => (
          <div className="App">
            {fields.photo.map(photo => (
              <div className="AppImage">
                <ModalImage
                  small={photo.fields.file.url}
                  large={photo.fields.file.url}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}
export default Blog;
