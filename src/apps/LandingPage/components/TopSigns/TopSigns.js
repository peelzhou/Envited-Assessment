import styled from "styled-components";
import { MdSignalCellularAlt } from "react-icons/md";
import { BsWifi2, BsBatteryFull } from "react-icons/bs";

const Header = styled.div`
  height: 5vh;
  width: 311px;
  margin: 10px 0 30px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const HeaderElements = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 2px;
`;

const RightElements = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const TopSigns = () => {
  return (
    <Header>
      <HeaderElements>9:41</HeaderElements>
      <RightElements>
        <HeaderElements>
          <MdSignalCellularAlt />
        </HeaderElements>
        <HeaderElements>
          <BsWifi2 />
        </HeaderElements>
        <HeaderElements>
          <BsBatteryFull />
        </HeaderElements>
      </RightElements>
    </Header>
  );
};

export default TopSigns;
