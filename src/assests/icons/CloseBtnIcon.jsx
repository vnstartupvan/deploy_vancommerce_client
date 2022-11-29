import React from 'react';

function CloseBtnIcon() {
    return (
        <svg className="button__icon icon icon--close" style={{ height: '14px', width: '14px' }}>
            <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#close"></use>
        </svg>
    )
}

export default CloseBtnIcon;