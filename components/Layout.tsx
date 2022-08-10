import {PropsWithChildren} from 'react';
import SideBar from './SideBar';

interface IProps extends PropsWithChildren {}

const Layout = (props: IProps) => {
    return <SideBar>{props.children}</SideBar>
}

export default Layout;
