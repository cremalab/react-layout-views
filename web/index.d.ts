/// <reference types="react" />
import React, { PureComponent } from 'react';
import { StyledComponentClass } from 'styled-components';
import { LayoutProps, SectionProps } from '../typings/web';
export declare class Layout extends PureComponent<LayoutProps> {
    static defaultProps: Partial<LayoutProps>;
    render(): JSX.Element;
}
export declare const Section: StyledComponentClass<React.ClassAttributes<any> & React.HTMLAttributes<any> & SectionProps, any, React.ClassAttributes<any> & React.HTMLAttributes<any> & SectionProps>;
