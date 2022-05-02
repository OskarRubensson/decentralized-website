import { Container, Form } from "react-bootstrap";

// Fetch all images from images folder
function importAll(r) {
  return r.keys().map(r);
}
const videos = importAll(require.context('../../public/videos/', false, /\.(mp4|ogg|mov)$/));

export default function Videos() {
  return (
    <div>
      <Container>
        <h1>Videos</h1>
        {videos.map((video, index) => {
          return (
            <div key={index}>
              <video src={video} controls width="100%" />
            </div>
          );
        })}
      </Container>
    </div>
  );
}  