export interface IInternalLink {
    id: string;
    label: string;
    icon?: React.ReactNode;
}

export interface IExternalLink {
    href: string;
    label: string;
    icon?: React.ReactNode;
}

export type INavbarLink = IInternalLink | IExternalLink;
