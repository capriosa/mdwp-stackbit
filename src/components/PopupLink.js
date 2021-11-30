import * as React from 'react';
import classNames from 'classnames';
import Link from '@stackbit/components/dist/utils/link';
import ArrowLeft from '@stackbit/components/distsvgs/arrow-left';
import ArrowRight from '@stackbit/components/distsvgs/arrow-right';
import Cart from '@stackbit/components/distsvgs/cart';
import Facebook from '@stackbit/components/distsvgs/facebook';
import GitHub from '@stackbit/components/distsvgs/github';
import Instagram from '@stackbit/components/distsvgs/instagram';
import LinkedIn from '@stackbit/components/distsvgs/linkedin';
import Twitter from '@stackbit/components/distsvgs/twitter';

const iconMap = {
    arrowLeft: ArrowLeft,
    arrowRight: ArrowRight,
    cart: Cart,
    facebook: Facebook,
    github: GitHub,
    instagram: Instagram,
    linkedin: LinkedIn,
    twitter: Twitter
};

export default function PopupLink(props) {
    const { type, label, altText, url, showIcon } = props;
    const icon = props.icon || 'arrowLeft';
    const iconPosition = props.iconPosition || 'right';
    const IconComponent = iconMap[icon];
    const annotationPrefix = props['data-sb-field-path'] || '';
    const annotations = [
        `${annotationPrefix}`,
        `${annotationPrefix}.url#@href`,
        `${annotationPrefix}.altText#@aria-label`,
        `${annotationPrefix}.elementId#@id`,
        `${annotationPrefix}.label#span[1]`,
        `${annotationPrefix}.icon#svg[1]`
    ];
    const defaultStyle = type === 'Link' ? 'link' : 'secondary';
    const style = props.style || defaultStyle;
    const cssClasses = props.className || null;
    const cssId = props.elementId || null;

    return (
        <Link
            href={url}
            aria-label={altText}
            id={cssId}
            className={classNames('sb-component', 'sb-component-block', style === 'link' ? 'sb-component-link' : 'sb-component-button', cssClasses, {
                'sb-component-button-primary': style === 'primary',
                'sb-component-button-secondary': style === 'secondary'
            })}
            data-sb-field-path={annotations.join(' ').trim()}
        >
            {label && <span>{label}</span>}
            {showIcon && IconComponent && (
                <IconComponent
                    className={classNames('fill-current h-5 w-5', {
                        'order-first': iconPosition === 'left',
                        'mr-1.5': label && iconPosition === 'left',
                        'ml-1.5': label && iconPosition === 'right'
                    })}
                />
            )}
        </Link>
    );
}
