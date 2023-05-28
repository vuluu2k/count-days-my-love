import './App.scss';
import Lottie from 'react-lottie';

import animationLove from '@/assets/animations/mylove.json';
import Music from '@/components/Music';
import Avatar from '@/components/Avatar';
import ImageLeft from '@/assets/images/vuluu.jpg';
import ImageRight from '@/assets/images/bichboo.jpg';

function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationLove,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="App">
      <h1 className="title">My Love Count Days</h1>

      <div className="wrapper-avatar">
        <Avatar url={ImageLeft} />
        <Lottie options={defaultOptions} height={400} width={400} />
        <Avatar url={ImageRight} />
      </div>

      <div className="wrapper-music">
        <Music />
      </div>
    </div>
  );
}

export default App;
