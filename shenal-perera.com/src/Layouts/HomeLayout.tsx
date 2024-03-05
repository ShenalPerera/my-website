import React, {ReactNode} from 'react';
import Header from "../Components/Header";
import {Row} from "antd";

const HomeLayout = ({children}:{children:ReactNode}) => {
    return (
        <>
            <Header/>
            <Row style={{margin:"5px 5%" ,backgroundColor:"lightgreen"}}>
                {children}
            </Row>
        </>


    );
};

export default HomeLayout;