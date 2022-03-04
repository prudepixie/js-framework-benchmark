import React from 'react';
import { customElement } from "@microsoft/fast-element";
import { Link } from "./link";
import { linkTemplate as template } from "./link.template";
import { linkStyles as styles } from "./link.styles";

@customElement({
    name: 'fluent-link',
    template: template({} as any, {}),
    styles: styles({}, {}),
    shadowOptions: {
        delegatesFocus: true,
    },
})


export class FluentLink extends Link {}

export interface FluentLink extends React.Component<{
    href: string;
} & React.HTMLAttributes<FluentLink>> {}