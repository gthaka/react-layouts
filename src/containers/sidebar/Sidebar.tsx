// import { CodeOffTwoTone } from '@mui/icons-material'
import { FC } from 'react'
import Menu from './menu/Menu';
import Submenu from './submenu/Submenu';
// import { NAVI } from '../../config'

interface ISidebarProps {
    className: string;
    children?: React.ReactNode;
    type: string;
}

const Sidebar: FC<ISidebarProps> = (props) => {
    const {className} = props;
    const subbed = false;
    switch(props.type){
        case 'main':
            return (
                <Menu className={className} hasSub={subbed} />
            );
        case 'sub':
            return (
                <Submenu className={className} menu={{id:'i1',name:'Menu 1'}} />
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

export default Sidebar