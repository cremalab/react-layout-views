/// <reference types="react" />
import { PureComponent } from 'react';
import { LayoutProps, SectionProps } from '../typings/native';
export declare class Layout extends PureComponent<LayoutProps> {
    static defaultProps: Partial<LayoutProps>;
    render(): JSX.Element;
}
export declare class Section extends PureComponent<SectionProps> {
    render(): JSX.Element;
}
