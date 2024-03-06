import React, {useState} from 'react';
import {Button, Col, Drawer, Menu, MenuProps, Row} from 'antd';
import {HomeOutlined, MenuOutlined, MenuUnfoldOutlined} from "@ant-design/icons";
import './Header.css';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[], type?: 'group',): MenuItem {
    return {
        key, icon, children, label, type,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Option 1', '1'),
    getItem('Option 2', '2'),
    getItem('Option 3', '3'),
    getItem('Navigation One', 'sub1',
        null, [getItem('Option 5', '5'), getItem('Option 6', '6'), getItem('Option 7', '7'), getItem('Option 8', '8'),]),
    getItem('Navigation Two', 'sub2', null, [getItem('Option 9', '9'), getItem('Option 10', '10'),
        getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),]),];


const Header = () => {
    const [openDrawer, setOpenDrawer] = useState(false);

    const handleCollapsedClick = () => {
        setOpenDrawer(prevState => !prevState);
    }

    return (<>
            <Row style={{backgroundColor: "lightcyan", margin: "0 5%"}} justify="space-between" align="middle">
                <Col xs={{span: 12, order: 2}} sm={{span: 12, order: 1}} >
                    <HomeOutlined className="spinning-logo" size={100}/>
                </Col>

                <Col xs={{span: 0}} sm={{span: 12, order: 2}}>
                    <Menu mode="horizontal" items={items} overflowedIndicator={<MenuOutlined/>}/>
                </Col>
                <Col xs={{span: 12, order: 1}} sm={{span: 0}}>
                    <Button type="primary" size="small" onClick={handleCollapsedClick}>
                        {openDrawer ? <MenuUnfoldOutlined/> : <MenuUnfoldOutlined/>}
                    </Button>
                </Col>
            </Row>
            <Drawer
                title="Menu"
                placement="top"
                height="top 25"
                closable={true}
                onClose={() => setOpenDrawer(false)}
                open={openDrawer}
                styles={{mask: {backdropFilter: 'blur(10px)'}}}
                autoFocus={true}
                width={"25px"}
            >
                <Menu mode="inline" items={items}/>
            </Drawer>
        </>

    );
};

export default Header;