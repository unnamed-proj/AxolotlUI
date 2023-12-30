/// <reference types="react" />
import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ children, className, theme, ...props }: import("./aui-button").AuiButtonProps) => import("react").JSX.Element;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        theme: {
            control: string;
            options: string[];
        };
        children: {
            control: string;
        };
        type: {
            control: string;
            options: string[];
        };
        onClick: {
            action: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Light: Story;
export declare const Dark: Story;
