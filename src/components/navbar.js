import { Menu } from 'antd';
const React= require('react');



export const Navbar = () => {

    return (

        <Menu mode="horizontal" theme="dark">
            <Menu.Item style={{ fontSize: 23}} className="cursive-text">
                Example App
            </Menu.Item>
        </Menu>
    );
}