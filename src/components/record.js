import { useState, RecordRTC, RecordRTCPromisesHandler, saveAs } from "./modules.js";

function RecordButtons () {
    const [stream, setStream] = useState(null);
    const [recorder, setRecorder] = useState(null);
    const [videoBlob, setVideoBlob] = useState(null);

    async function startVideo (event) {
        const stream = await navigator.mediaDevices.getDisplayMedia({
            video: true,
            audio: true
        });

        const recorder = new RecordRTCPromisesHandler(stream, {
            type: 'video'
        });

        await recorder.startRecording();

        setStream(stream);
        setRecorder(recorder);
        setVideoBlob(null);
    }

    async function stopVideo (event) {
        if (recorder) {
            await recorder.stopRecording();

            const videoBlob = await recorder.getBlob();

            stream.stop();
            
            setStream(null);
            setRecorder(null);
            setVideoBlob(videoBlob);
        }
    }

    function downloadVideo (event) {
        if (videoBlob) {
            saveAs(videoBlob, `video_${Date.now()}.mp4`);
        }
    }

    return (
        <div id="pageContainer">
            { (videoBlob) && <video id="finalVideo" src={ URL.createObjectURL(videoBlob) } controls></video> }
            <div id="flexContainer">
                <button onClick={startVideo}>Start</button>
                <button onClick={stopVideo}>Stop</button>
                <button onClick={downloadVideo}>Download</button>
            </div>
        </div>
    );
}

export {
    RecordButtons
};