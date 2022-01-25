import * as React from 'react';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';
import { getComponent } from '@stackbit/components/dist/components-registry';
import { mapStylesToClassNames as mapStyles } from '@stackbit/components/dist/utils/map-styles-to-class-names';

export default function Section(props) {
    const cssId = props.cssId || 0;
    const colors = props.colors || 'color-a';
    const sectionStyles = props.sectionStyles || '';
    const sectionBorderWidth = sectionStyles.borderWidth || 0;
    console.log(props)
    return (
        <div
            id={cssId}
            className={classNames(
                'sb-component',
                'sb-component-section',
                'sb-component-cta-section',
                colors,
                'flex',
                'flex-col',
                'justify-center',
                'relative',
                sectionStyles.height ? mapMinHeightStyles(sectionStyles.height) : null,
                sectionStyles.margin,
                sectionStyles.padding,
                sectionStyles.borderColor,
                sectionStyles.borderRadius ? mapStyles({ borderRadius: sectionStyles.borderRadius }) : null,
                sectionStyles.borderStyle ? mapStyles({ borderStyle: sectionStyles.borderStyle }) : null
            )}
            style={{
                borderWidth: `${sectionBorderWidth}px`
            }}
        >
            <div
                className={classNames(
                    'flex',
                    'relative',
                    'w-full',
                    sectionStyles.justifyContent ? mapStyles({ justifyContent: sectionStyles.justifyContent }) : null
                )}
            >
                <div className={classNames('w-full', sectionStyles.width ? mapMaxWidthStyles(sectionStyles.width) : null)}>
                    <div
                        className={classNames(
                            'flex',
                            '-mx-4',
                            sectionStyles.flexDirection ? mapFlexDirectionStyles(sectionStyles.flexDirection) : null,
                            sectionStyles.alignItems ? mapStyles({ alignItems: sectionStyles.alignItems }) : null
                        )}
                    >
                        Hallo
                    </div>
                    {props.component}
                </div>
            </div>
        </div>
    );
}

function mapMinHeightStyles(height) {
    switch (height) {
        case 'auto':
            return 'min-h-0';
        case 'screen':
            return 'min-h-screen';
    }
    return null;
}

function mapMaxWidthStyles(width) {
    switch (width) {
        case 'narrow':
            return 'max-w-screen-md';
        case 'wide':
            return 'max-w-screen-xl';
        case 'full':
            return 'max-w-full';
    }
    return null;
}

function mapFlexDirectionStyles(flexDirection) {
    switch (flexDirection) {
        case 'row':
            return ['flex-col', 'lg:flex-row', 'lg:justify-between'];
        case 'col':
            return ['flex-col'];
    }
    return null;
}
