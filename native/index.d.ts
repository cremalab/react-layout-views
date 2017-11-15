/// <reference types="react" />
import { PureComponent } from 'react';
import { LayoutProps, SectionProps } from '../typings/native';
export declare type LayoutProps = LayoutProps;
export declare class Layout extends PureComponent<LayoutProps> {
    static defaultProps: Partial<LayoutProps>;
    render(): JSX.Element;
}
export declare type SectionProps = SectionProps;
export declare class Section extends PureComponent<SectionProps> {
    render(): JSX.Element;
}
