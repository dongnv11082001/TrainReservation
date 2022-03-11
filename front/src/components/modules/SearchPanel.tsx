import React, { useState } from "react";
import styled from "styled-components";
import moment from "moment";
import {
  AutoComplete,
  Input,
  DatePicker,
  Col,
  Row,
  Button,
  Typography,
  Switch,
  Divider,
} from "antd";
import { SwapRightOutlined } from "@ant-design/icons";

type SearchProps = {
  suggestions?: { value: string }[];
};

const { Group } = Input;
const { RangePicker } = DatePicker;
const { Title, Text } = Typography;

export const SearchPanel: React.FC<SearchProps> = ({ suggestions }) => {
  const [departure, setDeparture] = useState<string>();
  const [destination, setDestination] = useState<string>();
  const [isRoundTrip, setIsRoundTrip] = useState<boolean>(false);
  const dateFormat = "YYYY-MM-DD";

  return (
    <SearchBarContainer>
      <Title style={{ textAlign: "center" }} level={3}>
        Tim chuyen tau
      </Title>
      <Divider />
      <SpacingRow align="middle" justify="center" gutter={8}>
        <Col>
          <SwitchText>Mot chieu</SwitchText>
        </Col>
        <Col>
          <Switch
            onChange={() => setIsRoundTrip(!isRoundTrip)}
            defaultChecked={isRoundTrip}
          />
        </Col>
        <Col>
          <SwitchText>Khu hoi</SwitchText>
        </Col>
      </SpacingRow>
      <Group>
        <SpacingRow align="middle" justify="center" gutter={8}>
          <Col>
            <LocationInput
              value={departure}
              onChange={(value: any) => setDeparture(value)}
              options={suggestions}
              allowClear
              placeholder="Diem khoi hanh..."
            />
          </Col>
          <Col>
            <SwapRightOutlined />
          </Col>
          <Col>
            <LocationInput
              value={destination}
              onChange={(value: any) => setDestination(value)}
              options={suggestions}
              allowClear
              placeholder="Diem den..."
            />
          </Col>
        </SpacingRow>
        <SpacingRow align="middle" justify="center">
          <RangePicker
            defaultValue={[
              moment("2019-09-03", dateFormat),
              moment("2019-11-22", dateFormat),
            ]}
            disabled={[false, !isRoundTrip]}
          />
        </SpacingRow>
        <SpacingRow style={{ marginTop: 30 }} align="middle" justify="center">
          <Button type="primary">Tim chuyen bay</Button>
        </SpacingRow>
      </Group>
    </SearchBarContainer>
  );
};

const SearchBarContainer = styled.div`
  border-radius: 8px;
  padding: 20px;
  background: #fff;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;
const LocationInput = styled(AutoComplete)`
  min-width: 200px;
`;
const SwitchText = styled(Text)`
  font-size: 1rem;
  font-weight: 300;
`;
const SpacingRow = styled(Row)`
  margin-bottom: 14px;
`;
