import * as React from 'react';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';
import axios from 'axios';
import { getComponent } from '@stackbit/components/dist/components-registry';
import { mapStylesToClassNames as mapStyles } from '@stackbit/components/dist/utils/map-styles-to-class-names';


export default function Eventbrite(props) {
const cssId = props.elementId || null;
    const colors = props.colors || 'colors-a';
    const sectionStyles = props.styles?.self || {};
    const sectionBorderWidth = sectionStyles.borderWidth ? sectionStyles.borderWidth : 0;
    const key = 'EDMO3BWIFXRUIQSDP7IZ';
    const id = '169603411369';
    const url = 'https://www.eventbriteapi.com/v3/events/' + id + '/?token=' + key + '&expand=venue';
    const [description,setDescription] = React.useState(null);
    const [logo,setLogo] = React.useState(null);
    const [date,setDate] = React.useState(null);
    const [link,setURL] = React.useState(null);
    
    const desc_url = 'https://www.eventbriteapi.com/v3/events/' + id + '/description/?token=' + key + '&expand=venue'

    // NEW ??? https://www.eventbriteapi.com/v3/users/me/?token=EDMO3BWIFXRUIQSDP7IZ

    axios.get(desc_url).then(res => {
      const response = res.data;
      const event = response.description;
      this.setState({
        event,
      })
    })

    axios.get(url)
      .then(res => {

    const response = res.data;
    setLogo(response.logo.original.url);
    setDescription(response.description.html);
    setURL(response.url);
      });
      
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
            <h1>{description}</h1> 
            <a href={link}>Anmelden</a>
            <img src={logo} />  
            </div>
    )

}

function ctaBackgroundImage(image) {
    const imageUrl = image.url;
    if (!imageUrl) {
        return null;
    }
    const imageStyles = image.styles?.self || {};
    const imageOpacity = imageStyles.opacity || imageStyles.opacity === 0 ? imageStyles.opacity : 100;
    return (
        <div
            className="bg-cover bg-center block absolute inset-0"
            style={{
                backgroundImage: `url('${imageUrl}')`,
                opacity: imageOpacity * 0.01
            }}
        />
    );
}

function ctaBody(props) {
    if (!props.title && !props.text) {
        return null;
    }
    const styles = props.styles || {};
    return (
        <div className="my-3 px-4 w-full lg:flex-grow">
            {props.title && (
                <h2 className={classNames(styles.title ? mapStyles(styles.title) : null)} data-sb-field-path=".title">
                    {props.title}
                </h2>
            )}
            {props.text && (
                <Markdown
                    options={{ forceBlock: true, forceWrapper: true }}
                    className={classNames('sb-markdown', 'sm:text-lg', styles.text ? mapStyles(styles.text) : null, { 'mt-4': props.title })}
                    data-sb-field-path=".text"
                >
                    {props.text}
                </Markdown>
            )}
        </div>
    );
}

function ctaActions(props) {
    const actions = props.actions || [];
    if (actions.length === 0) {
        return null;
    }
    const styles = props.styles || {};
    const Action = getComponent('Action');
    return (
        <div className={classNames('my-3', 'px-4', 'w-full', styles.self?.flexDirection === 'row' ? 'lg:w-auto' : null)}>
            <div
                className={classNames('flex', 'flex-wrap', 'items-center', '-mx-2', 'lg:flex-nowrap', styles.actions ? mapStyles(styles.actions) : null)}
                data-sb-field-path=".actions"
            >
                {actions.map((action, index) => (
                    <Action key={index} {...action} className="mb-3 mx-2 lg:whitespace-nowrap" data-sb-field-path={`.${index}`} />
                ))}
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
