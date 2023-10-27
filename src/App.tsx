import { useState } from 'react'
import './App.css'

let breakIncButton = document.getElementById("break-increment");
let breakDecButton = document.getElementById("break-decrement");
let sessionIncButton = document.getElementById("session-increment");
let sessionDexButton = document.getElementById("session-decrement");
let startStopButton = document.getElementById("start_stop");
let resetButton = document.getElementById("reset")

let breakLength = document.getElementById("break-length");
let sessionLength = document.getElementById("session-length");
let timeLeft = document.getElementById("time-left");

function breakInc() {
  var breakDecButton = document.getElementById('break-increment');
  var currentText = parseInt(breakIncButton.innerText);
  var incrementedValue = currentText + 1;
  breakIncButton.innerText = incrementedValue;
}



const defaultBreakTime = 5 * 60;
const defaultSessionTime = 25 * 60;
const min = 60;
const max = 60 * 60;
const interval = 60;

function App() {

  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className='text-center p-5'>25 + 5 Clock - by Faruq</h1>
          <div className="col-md-6">
            <div className="card mb-4 shadow-sm">
              <div id="break-label" className='card-header'>Lama Istirahat</div>
              <div className="card-body">
                <p className="card-text">
                  <div id="break-length">5</div>
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" id="break-increment" className="btn btn-sm btn-outline-secondary">+</button>
                    <button type="button" id="break-decrement" className="btn btn-sm btn-outline-secondary">-</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-4 shadow-sm">
              <div id="session-label" className='card-header'>Lama Sesi</div>
              <div className="card-body">
                <p className="card-text">
                  <div id="session-length">25</div>
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" id="session-increment" className="btn btn-sm btn-outline-secondary">+</button>
                    <button type="button" id="session-decrement" className="btn btn-sm btn-outline-secondary">-</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="card shadow-sm">
              <div id="timer-label" className='card-header'>Sesi</div>
              <div className="card-body">
                <p className="card-text">
                  <div id="time-left">60:00</div>
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" id="start_stop" className="btn btn-sm btn-outline-secondary">Start/Stop</button>
                    <button type="button" id="reset" className="btn btn-sm btn-outline-secondary">Reset</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
