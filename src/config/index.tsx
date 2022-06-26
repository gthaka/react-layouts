import { HomeOutlined, ThreeDRotation, Battery1Bar, Battery0Bar, Battery20, Battery50, Battery80, BatteryFull, FoodBankRounded, } from '@mui/icons-material';

export const NAVI = {
    main: [
        { id: 'home', name: "Home", link: "/", icon: (props?: any) => (<HomeOutlined {...props} />), },
        { id: 'i1', name: "Item 1", link: "/item1", icon: (props?: any) => (<ThreeDRotation {...props} />), },
        { id: 'i2', name: "Item 2", link: "/item2", icon: (props?: any) => (<Battery0Bar {...props} />), },
        { id: 'i3', name: "Item 3", link: "/item3", icon: (props?: any) => (<Battery1Bar {...props} />), },
        { id: 'i4', name: "Item 4", link: "/item4", icon: (props?: any) => (<Battery20 {...props} />), },
        { id: 'i5', name: "Item 5", link: "/item5", icon: (props?: any) => (<Battery50 {...props} />), },
        { id: 'i6', name: "Item 6", link: "/item6", icon: (props?: any) => (<Battery80 {...props} />), },
        { id: 'i7', name: "Item 7", link: "/item6", icon: (props?: any) => (<BatteryFull {...props} />), },
    ],
    footer: [
        { name: "FT Item", link: "/ft", icon: (props: any) => (<FoodBankRounded {...props} />), },
    ],
}

export const SUB_NAVI = {
    i1: [
        { name: "Item 1", link: "/item1", },
        { name: "Item 1", link: "/item1", },
        { name: "Item 1", link: "/item1", },
    ],
    i2: [
        { name: "Item 1", link: "/item1", },
        { name: "Item 1", link: "/item1", },
        { name: "Item 1", link: "/item1", },
    ],
    i3: [
        { name: "Item 1", link: "/item1", },
        { name: "Item 1", link: "/item1", },
        { name: "Item 1", link: "/item1", },
    ],
}