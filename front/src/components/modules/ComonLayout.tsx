import React, { ReactElement, useState } from "react";
import { Layout } from "antd";
import styled from "styled-components";
import { AdminSiderMenu } from "../elements/AdminSiderMenu";
import { GuestSiderMenu } from "../elements/GuestSiderMenu";
import { Header } from "./Header";

const { Sider, Footer } = Layout;

interface LayoutProps {
  isAdmin?: boolean;
}

export const CommonLayout: React.FC<LayoutProps> = ({
  children,
  isAdmin,
}): ReactElement => {
  const [isCollapse, setIsCollapse] = useState<boolean>(false);

  return (
    <>
      <ParentLayout>
        <Sider
          collapsible
          collapsed={isCollapse}
          onCollapse={() => setIsCollapse(!isCollapse)}
          theme="light"
          style={{
            overflow: "auto",
            position: "fixed",
            left: 0,
            top: 61,
            bottom: 0,
            zIndex: 100,
          }}
        >
          {isAdmin ? <AdminSiderMenu /> : <GuestSiderMenu />}
        </Sider>
        <MainLayout>
          <Header />
          <Body isDominated={!isCollapse}>{children}</Body>
          <Footer
            style={{
              textAlign: "center",
              background: "#000e1b",
              color: "#a1a8b4",
            }}
          >
            Train Reservation ©2022 Created by Tung-DNT
          </Footer>
        </MainLayout>
      </ParentLayout>
    </>
  );
};

const ParentLayout = styled(Layout)`
  min-height: 100vh;
`;
const MainLayout = styled(Layout)`
  margin-top: 61px;
`;
const Body = styled.div<{ isDominated: boolean }>`
  min-height: calc(100vh - 61px - 70px);
  padding-left: ${({ isDominated }) => (isDominated ? "200px" : "80px")};
  transition: padding 0.2s ease;
`;
