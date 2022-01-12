import * as React from 'react';

import EventbriteLayout from './index';

export default {
    title: 'Layouts/EventbriteLayout',
    component: EventbriteLayout,
    parameters: {
        StackbitFrontmatter: {
            root: 'page'
        },
        StackbitModels: {
            root: 'page'
        }
    }
};

const Template = (args) => <EventbriteLayout {...args} />;


