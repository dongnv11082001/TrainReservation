import React from "react";
import styled from "styled-components";
import { Typography, Divider } from "antd";
import { SwapRightOutlined } from "@ant-design/icons";
import { FlexBox } from "../../../components/modules/ComonLayout";
import { TicketProps } from "../../../types/ticket";

const { Text, Title } = Typography;

export const ResultTicket: React.FC<TicketProps> = ({
  id,
  destination,
  departure,
  departureTime,
  arrivalTime,
  airline,
  price,
  ticketClass,
}) => {
  const calculateTravelTime = () => {
    return 0;
  };

  const renderTicketHeading = () => (
    <TicketHeading>
      <FlexBox>
        <Title>{airline && airline}</Title>
        <Text>{id}</Text>
      </FlexBox>
      <FlexBox>
        <FlexBox>
          <Title>{departureTime}</Title>
          <Text>{departure}</Text>
        </FlexBox>
        <SwapRightOutlined />
        <FlexBox>
          <Title>{arrivalTime}</Title>
          <Text>{destination}</Text>
        </FlexBox>
      </FlexBox>
    </TicketHeading>
  );

  const renderTicketBody = () => (
    <TicketBody>
      <Text>{ticketClass}</Text>
      <FlexBox>
        <Title>{calculateTravelTime()}</Title>
        <Text>Bay thẳng</Text>
      </FlexBox>
    </TicketBody>
  );

  const renderTicketFooter = () => (
    <TicketFooter>
      <Title>{price}</Title>
      <Button>Chọn</Button>
    </TicketFooter>
  );

  return (
    <TicketContainer>
      {renderTicketHeading()}
      <Divider />
      {renderTicketBody()}
      <Divider />
      {renderTicketFooter()}
    </TicketContainer>
  );
};

const TicketContainer = styled.div``;
const TicketHeading = styled.div``;
const TicketBody = styled.div``;
const TicketFooter = styled.div``;
const Button = styled.div``;
