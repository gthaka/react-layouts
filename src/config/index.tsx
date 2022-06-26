import { HomeOutlined, ThreeDRotation, FoodBankRounded, Battery0BarTwoTone, Battery1BarTwoTone, Battery20TwoTone, Battery50TwoTone, Battery80TwoTone, BatteryFullTwoTone, } from '@mui/icons-material';

interface INav {
    [key:string]:{id?:string, name: string, link: string, icon:any;}[]
}

export const NAVI:INav = {
    main: [
        { id: 'home', name: "Home", link: "/", icon: (props?: any) => (<HomeOutlined {...props} />), },
        { id: 'i1', name: "Item 1", link: "/item1", icon: (props?: any) => (<ThreeDRotation {...props} />), },
        { id: 'i2', name: "Item 2", link: "/item2", icon: (props?: any) => (<Battery0BarTwoTone {...props} />), },
        { id: 'i3', name: "Item 3", link: "/item3", icon: (props?: any) => (<Battery1BarTwoTone {...props} />), },
        { id: 'i4', name: "Item 4", link: "/item4", icon: (props?: any) => (<Battery20TwoTone {...props} />), },
        { id: 'i5', name: "Item 5", link: "/item5", icon: (props?: any) => (<Battery50TwoTone {...props} />), },
        { id: 'i6', name: "Item 6", link: "/item6", icon: (props?: any) => (<Battery80TwoTone {...props} />), },
        { id: 'i7', name: "Item 7", link: "/item6", icon: (props?: any) => (<BatteryFullTwoTone {...props} />), },
    ],
    footer: [
        { name: "FT Item", link: "/ft", icon: (props: any) => (<FoodBankRounded {...props} />), },
    ],
}

interface ISubNav {
    [key:string]:{name: string, link: string;}[]
}

export const SUB_NAVI:ISubNav = {
    "i1": [
        { name: "Item 1", link: "/item1", },
        { name: "Item 1", link: "/item1", },
        { name: "Item 1", link: "/item1", },
    ],
    "i2": [
        { name: "Item 1", link: "/item1", },
        { name: "Item 1", link: "/item1", },
        { name: "Item 1", link: "/item1", },
    ],
    "i3": [
        { name: "Item 1", link: "/item1", },
        { name: "Item 1", link: "/item1", },
        { name: "Item 1", link: "/item1", },
    ],
}