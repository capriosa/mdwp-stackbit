import * as React from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import Slide from 'react-reveal/Slide';
import { CallTracker } from 'assert';

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
        <Slide top>
        <img
            src={url}
            layout="fill"
        />
        </Slide>
    );
}
