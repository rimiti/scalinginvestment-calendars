import {PropsWithChildren} from 'react';
import SideBar from './SideBar';
import Head from "next/head";

interface IProps extends PropsWithChildren {}

const Layout = (props: IProps) => <>
    <Head>
        <link rel="icon" href="/images/favicon.png" />
    </Head>
    <SideBar>{props.children}</SideBar>
</>

export default Layout;
