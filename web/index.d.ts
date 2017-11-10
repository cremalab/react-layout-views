/// <reference types="react" />
import React, { PureComponent } from 'react';
import { StyledComponentClass } from 'styled-components';
import { LayoutProps, SectionProps } from '../typings/web';
export declare class Layout extends PureComponent<LayoutProps> {
    static defaultProps: Partial<LayoutProps>;
    render(): JSX.Element;
}
export declare class Section extends PureComponent<SectionProps> {
    render(): JSX.Element;
}
export declare const SectionWrapper: StyledComponentClass<React.ClassAttributes<any> & React.HTMLAttributes<any> & SectionProps, any, React.ClassAttributes<any> & React.HTMLAttributes<any> & SectionProps>;
export declare const SectionInner: StyledComponentClass<React.ClassAttributes<any> & React.HTMLAttributes<any> & SectionProps, any, React.ClassAttributes<any> & React.HTMLAttributes<any> & SectionProps>;
