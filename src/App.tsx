import { useState, useEffect } from "react";
import AlarmSound from "./assets/AlarmSound.mp3";
import "./App.css";
import { DisplayState } from "./helpers";
import TimeSetter from "./TimeSetter";
import Display from "./Display";

const defaultBreakTime = 5 * 60;
const defaultSessionTime = 25 * 60;
const min = 60;
const max = 60 * 60;
const interval = 60;

function App() {
  const [breakTime, setBreakTime] = useState(defaultBreakTime);
  const [sessionTime, setSessionTime] = useState(defaultSessionTime);
  const [displayState, setDisplayState] = useState<DisplayState>({
    time: sessionTime,
    timeType: "Session",
    timerRunning: false,
  });

  useEffect(() => {
    let timerID: number;
    if (!displayState.timerRunning) return;

    if (displayState.timerRunning) {
      timerID = window.setInterval(decrementDisplay, 1000);
    }

    return () => {
      window.clearInterval(timerID);
    };
  }, [displayState.timerRunning]);

  useEffect(() => {
    if (displayState.time === 0) {
      const audio = document.getElementById("beep") as HTMLAudioElement;
      audio.currentTime = 2;
      audio.play().catch((err) => console.log(err));
      setDisplayState((prev) => ({
        ...prev,
        timeType: prev.timeType === "Session" ? "Break" : "Session",
        time: prev.timeType === "Session" ? breakTime : sessionTime,
      }));
    }
  }, [displayState, breakTime, sessionTime]);

  const reset = () => {
    setBreakTime(defaultBreakTime);
    setSessionTime(defaultSessionTime);
    setDisplayState({
      time: defaultSessionTime,
      timeType: "Session",
      timerRunning: false,
    });
    const audio = document.getElementById("beep") as HTMLAudioElement;
    audio.pause();
    audio.currentTime = 0;
  };

  const startStop = () => {
    setDisplayState((prev) => ({
      ...prev,
      timerRunning: !prev.timerRunning,
    }));
  };

  const changeBreakTime = (time: number) => {
    if (displayState.timerRunning) return;
    setBreakTime(time);
  };

  const decrementDisplay = () => {
    setDisplayState((prev) => ({
      ...prev,
      time: prev.time - 1,
    }));
  };

  const changeSessionTime = (time: number) => {
    if (displayState.timerRunning) return;
    setSessionTime(time);
    setDisplayState({
      time: time,
      timeType: "Session",
      timerRunning: false,
    });
  };

  return (
    <>
      <div className="container" style={{ backgroundColor: '#a0e9ff', padding: '20px' }}>
        <div className="row">
          <h1 className='text-center p-5'>25 + 5 Clock - by Faruq</h1>
          <div className="col-md-6">
            <div className="card mb-4 shadow-sm">
              <div id="break-label" className='card-header text-center'>Lama Istirahat</div>
              <div className="card-body">
                <p className="card-text">
                  <div id="break-length">
                    <div className="d-flex justify-content-center align-items-center">
                      <div className="btn-group">
                        <TimeSetter
                          time={breakTime}
                          setTime={changeBreakTime}
                          min={min}
                          max={max}
                          interval={interval}
                          type="break"
                        />
                      </div>
                    </div>
                  </div>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-4 shadow-sm">
              <div id="session-label" className='card-header text-center'>Lama Sesi</div>
              <div className="card-body">
                <p className="card-text">
                  <div id="session-length">
                    <div className="d-flex justify-content-center align-items-center">
                      <div>
                        <TimeSetter
                          time={sessionTime}
                          setTime={changeSessionTime}
                          min={min}
                          max={max}
                          interval={interval}
                          type="session"
                        />
                      </div>
                    </div>
                  </div>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="card shadow-sm">
              <div id="timer-label" className='card-header text-center'>Sesi</div>
              <div className="card-body">
                <p className="card-text">
                  <div id="time-left">
                    <div className="d-flex justify-content-center align-items-center">
                      <div className="btn-group">
                        <Display
                          displayState={displayState}
                          reset={reset}
                          startStop={startStop}
                        />
                        <audio id="beep" src={AlarmSound} />
                      </div>
                    </div>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
