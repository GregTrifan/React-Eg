import {Layout, Typography} from "antd";
import { Navbar } from "./components/navbar";
import { SchoolComponent } from "./components/schools";
import "./main.scss";
import React from "react";
const {Footer,Header, Content} = Layout;
const { Title } = Typography;
//gaseste o modalitate de a adauga sau scadea mai multi studenti.
//uita-te la modal in antd, foloseste si un input pt numere

function App() {
  return (
    <Layout className="layout">
        <Header>
      <Navbar />
        </Header>
        <Content className="site-layout-content">
        <Title style={{ textAlign: 'center'}}>Index Page</Title>
        <SchoolComponent/>
        </Content>
        <Footer style={{ textAlign: 'center', padding: '470px 0 0 0'}}>
                Copyright {new Date().getFullYear()}
        </Footer>
    </Layout>
  );
}

export default App;
