import type { Meta, StoryObj } from '@storybook/react';

import {AuiButton} from "./aui-button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: '通用/Button',
    component: AuiButton,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        theme: {
            control: 'select',
            options: ['light', 'dark', 'success', 'error', 'danger', 'allow'],
        },
        children: {
            control: 'text'
        },
        type: {
            control: 'inline-radio',
            options: ['button', 'submit'],
        },
        onClick: {
            action: 'clicked',
        },
    },
} satisfies Meta<typeof AuiButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args



export const Light: Story = {
    args: {
        theme: 'light',
        children: "Button",
    },
};

export const Dark: Story = {
    args: {
        theme: 'dark',
        children: "Button",
    },
};

//
// export const Large: Story = {
//     args: {
//         size: 'large',
//         label: 'Button',
//     },
// };
//
// export const Small: Story = {
//     args: {
//         size: 'small',
//         label: 'Button',
//     },
// };
