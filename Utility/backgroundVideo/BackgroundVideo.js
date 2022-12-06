import styles from "../../styles/BackgroundVideo.module.css"
function BackgrounVideoPlayer() {
    return (<div style={{ width: "100%", height: "100vh" , zIndex:"-100" }}>
        <video id="videoBG" src="/bg2.mp4" poster="/vercel.svg" style={{ height: "100vh", width: "100vw", objectFit: "cover" }} autoPlay muted loop />
    </div>)
}

export default BackgrounVideoPlayer;