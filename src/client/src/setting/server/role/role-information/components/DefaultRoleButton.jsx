import React from 'react';
import { BsFillPeopleFill } from 'react-icons/bs';
import { BiChevronRight } from 'react-icons/bi';
import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import isRoleSettingModeState from '../../../../../recoil/setting/server/isRoleSettingModeState';
import selectedRoleState from '../../../../../recoil/setting/server/selectedRoleState';
import EVERYONE from '../../../../constant/EVERYONE';

const Container = styled.div`
  height: 40px;
  padding: 16px 24px 16px 16px;

  display: grid;
  align-items: center;
  grid-template-columns: 32px 3fr 1fr;

  background-color: ${(props) => props.theme.color.secondaryBg};
  border-radius: 3px;

  color: ${(props) => props.theme.color.secondaryText};

  cursor: pointer;

  &:hover {
    background-color: rgba(79, 84, 92, 0.4);
    color: ${(props) => props.theme.color.primaryText};
  }
`;

const PeopleIconHolder = styled.div`
  width: 32px;
  height: 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 20px;

  background-color: ${(props) => props.theme.color.primaryBg};
  border-radius: 10000px;
`;

const TextBox = styled.div`
  width: auto;
  margin-left: 16px;

  div {
    margin-bottom: 4px;
    font-size: 16px;
    font-weight: 700;
  }

  p {
    font-size: 12px;
  }
`;

const ChevronHolder = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  font-size: 24px;
`;

function DefaultRoleButton() {
  const setIsRoleSettingMode = useSetRecoilState(isRoleSettingModeState);
  const setSelectedRoleState = useSetRecoilState(selectedRoleState);

  return (
    <Container
      onClick={() => {
        setIsRoleSettingMode(true);
        setSelectedRoleState({ id: EVERYONE.ID, name: EVERYONE.NAME });
      }}
    >
      <PeopleIconHolder>
        <BsFillPeopleFill />
      </PeopleIconHolder>
      <TextBox>
        <div>기본 권한</div>
        <p>@everyone · 모든 서버 멤버에 적용</p>
      </TextBox>
      <ChevronHolder>
        <BiChevronRight />
      </ChevronHolder>
    </Container>
  );
}

export default React.memo(DefaultRoleButton);
