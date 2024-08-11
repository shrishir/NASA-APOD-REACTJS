export default function Main(props) {
  const { data } = props;

  // Log the media type and URL
  console.log(data.media_type, data.url);

  return (
    <div className="mediaContainer">
      {data.media_type === "image" ? (
        <img 
          src={data.hdurl || data.url} 
          alt={data.title || 'bg-img'} 
          className="bgImage" 
          style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
          />
      ) : data.media_type === "video" ? (
        <iframe
          src={data.url}
          title={data.title}
          className="bgVideo"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      ) : (
        <p>Unsupported media type: {data.media_type}</p>
      )}
    </div>
  );
}
