//import React from 'react';

/*export default function Avatar (){
    return (
        <img
            className="avatar"
            src="https://i.imgur.com/7vQD0fPs.jpg"
            alt="Gregorio Y. Zara"
        />
    )
}*/

/*export default function Avatar (): JSX.Element {
    const avatar = new URL('https://i.imgur.com/7vQD0fPs.jpg');
    const description = 'Gregorio Y. Zara';
    return (
        <img
            className="avatar"
            src={avatar.toString()}
            alt={description}
        />
    );
}*/

/** Refactorización del código de la función avatar */
/*interface AvatarProps {
    src: string;
    alt: string;
    className: string;
}

export default function AvatarWrapper(): JSX.Element {
    const avatarInfo: AvatarProps = {
        src: 'https://i.imgur.com/7vQD0fPs.jpg',
        alt: 'Gregorio Y. Zara',
        className: 'avatar',
    };

    return (
        <img
            className={avatarInfo.className}
            src={avatarInfo.src}
            alt={avatarInfo.alt}
        />
    );
}*/