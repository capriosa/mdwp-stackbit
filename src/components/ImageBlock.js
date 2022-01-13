import * as React from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import Fade from 'react-reveal/Fade';

export default function ImageBlock(props) {
    const { url, altText } = props;
    if (!url) {
        return null;
    }
    const cssClasses = props.className || null;
    const cssId = props.elementId || null;
    const styles = props.styles?.self || {};
    const imageOpacity = styles.opacity || styles.opacity === 0 ? styles.opacity : 100;

    return (
        <Fade top>
        <Image
            id={cssId}
            className={classNames('sb-component', 'sb-component-block', 'sb-component-image-block', cssClasses)}
            src={url}
            alt="Bild"
            data-sb-field-path=".url#@src .altText#@alt .elementId#@id"
            layout="fill"
        />
        </Fade>
    );
}
