import React from 'react';
import classNames from 'classnames';

import './Badge.scss';

const Badge = ({ color, onClick, className }) => (
    <i onClick={onClick}
        className={classNames('badge', {[`badge badge--${color} ${className}`]: color}, className)}
    />
);

export default Badge;