import AudioPlayer from "react-h5-audio-player";

export default function Float(params) {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  function float() {
    var handle = document.querySelector(".float");
    handle.classList.toggle("active");
  }
  function music() {
    var handle1 = document.querySelector(".music");
    handle1.classList.toggle("active");
    var handle2 = document.querySelector(".player");
    handle2.classList.toggle("show");
  }

  return (
    <>
      <div className="float" onClick={float}>
        <i className="fas fa-plus" />
        <ul className="menu">
          <li className="ontop" onClick={scrollTop}>
            <i className="fas fa-arrow-up" />
          </li>
          <li className="music" onClick={music}>
            <i className="fas fa-music" />
          </li>
        </ul>
      </div>
      <div className="player">
        <AudioPlayer
          autoPlay={false}
          src="/canon2020.mp3"
          volume="0.5"
          onPlay={(e) => console.log("onPlay")}
        />
      </div>
    </>
  );
}
