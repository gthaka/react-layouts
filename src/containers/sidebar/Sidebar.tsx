// import { CodeOffTwoTone } from '@mui/icons-material'
import { FC, useContext } from 'react'
import { useLocation } from 'react-router-dom';
import { MenuContext } from '../../components/context/MenuContextProvider';
import { SUB_NAVI } from '../../config';
import Menu from './menu/Menu';
import Submenu from './submenu/Submenu';
// import { NAVI } from '../../config'

interface ISidebarProps {
    className: string;
    children?: React.ReactNode;
    type: string;
}
type menuStates = { menu:string; setMenu:Function; subMenu:string; setSubMenu:Function; };

const Sidebar: FC<ISidebarProps> = (props) => {
    const { className } = props;
    const location = useLocation();
    const { menu, setMenu, 
        // subMenu, setSubMenu 
    } = useContext(MenuContext) as menuStates;
    // console.log(`===<><><><>${menu}`);
    setMenu(menuName(location.pathname));
    // console.log(`===>${menu}`);
    const subbed = (menu in SUB_NAVI);
    switch (props.type) {
        case 'main':
            return (
                <Menu className={className} hasSub={subbed} />
            );
        case 'sub':
            return (
                <Submenu className={className} hasSub={subbed} />
            );
        default:
            return (<div>No Menu Found</div>);

    }

    // return (
    //     // <aside className={props.className}>
    //         <menu {...props} />
    //     // </aside>
    // )
}

const menuName = (pathname: string) => {
    return (pathname.length > 1) ? pathname.slice(1) : pathname;
}

export default Sidebar