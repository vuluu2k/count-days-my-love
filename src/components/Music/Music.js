import React, { useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai';
import { BiSkipPrevious, BiSkipNext } from 'react-icons/bi';

import styles from './Music.module.scss';

const clsx = classNames.bind(styles);

function Music() {
  const audioRef = useRef(null);
  const [isPlay, setIsPlay] = useState();
  const [percent, setPercent] = useState(0);

  const playAudio = () => {
    setIsPlay(true);
    audioRef.current.play();
  };

  const pauseAudio = () => {
    setIsPlay(false);
    audioRef.current.pause();
  };

  return (
    <div className={clsx('wrapper')}>
      <div className={clsx('actions')}>
        <BiSkipPrevious />
        {(isPlay && <AiFillPauseCircle onClick={pauseAudio} />) || <AiFillPlayCircle onClick={playAudio} />}
        <BiSkipNext />
      </div>

      <input
        id="progress"
        className={clsx('progress')}
        type="range"
        value={percent}
        step="1"
        min="0"
        max="100"
        onChange={(event) => {
          setPercent(event.target.value);
          audioRef.current.currentTime = (audioRef.current.duration / 100) * event.target.value;
        }}
      />

      <audio
        ref={audioRef}
        src="https://data.chiasenhac.com/down2/2275/4/2274673-edff7b33/128/Quyet%20Yeu%20-%20Chiem%20Van%20Dinh.mp3"
        autoPlay
        onTimeUpdate={(event) => {
          setPercent((audioRef.current.currentTime / audioRef.current.duration) * 100);
        }}
      ></audio>
    </div>
  );
}

export default Music;
