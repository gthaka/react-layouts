import { HomeOutlined, SettingsTwoTone, AccountBoxTwoTone, } from '@mui/icons-material';

interface INav {
    [key:string]:{id?:string, name: string, link: string, icon:any;}[]
}

export const NAVI:INav = {
    main: [
        { id: 'home', name: "Home", link: "/", icon: (props?: any) => (<HomeOutlined {...props} />), },
        { id: 'profile', name: "Profile", link: "/profile", icon: (props?: any) => (<AccountBoxTwoTone {...props} />), },
    ],
    footer: [
        { name: "settings", link: "/settings", icon: (props: any) => (<SettingsTwoTone {...props} />), },
    ],
}

interface ISubNav {
    [key:string]:{name: string, link: string;}[]
}

export const SUB_NAVI:ISubNav = {
    // "settings": [
    //     { name: "Setting", link: "/item1", },
    //     { name: "Item 1", link: "/item1", },
    //     { name: "Item 1", link: "/item1", },
    // ],
    "profile": [
        { name: "Info", link: "/info", },
        { name: "Account", link: "/account", },
        { name: "Security", link: "/security", },
    ],
}