import React from 'react';
import classNames from 'classnames/bind';

import styles from './Avatar.module.scss';

const clsx = classNames.bind(styles);

function Avatar({ url }) {
  return url ? <img className={clsx("image")} src={url} alt={url} /> : <div className={clsx('wrapper')}>Avatar</div>;
}

export default Avatar;
