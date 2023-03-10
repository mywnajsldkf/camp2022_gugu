import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';

import SearchBar from '../../../../common/components/SearchBar';
import Label from '../../../common/components/Label';
import AddRoleRow from './AddRoleRow';
import AddMemberRow from '../../../common/components/AddMemberRow';
import roleListState from '../../../../recoil/setting/common/roleListState';

const AddModalHeader = styled.div`
  margin-top: 16px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 24px;
    font-weight: 600;
    color: ${(props) => props.theme.color.primaryText};
  }
  .channel-name {
    font-size: 16px;
    color: ${(props) => props.theme.color.secondaryText};
  }
`;

const AddModalContent = styled.div`
  .search-box {
    padding: 0 16px 12px;

    .description {
      font-size: 12px;
      color: ${(props) => props.theme.color.secondaryText};
    }
  }
`;

const RoleMemberList = styled.div`
  height: 244px;
  padding: 0 12px;
  overflow-y: scroll;
`;

const AddModalFooter = styled.div`
  height: 32px;
  padding: 16px;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  background-color: ${(props) => props.theme.color.secondaryBg};
  border-radius: 0 0 5px 5px;

  .cancel-button,
  .add-button {
    width: 28px;
    height: 100%;
    padding: 2px 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    cursor: pointer;
  }

  .cancel-button {
    :hover {
      text-decoration: underline;
    }
  }

  .add-button {
    margin-left: 8px;
    background-color: ${(props) => props.theme.color.blue};
    border-radius: 3px;
    transition: background-color 0.2s ease-in-out;

    :hover {
      background-color: ${(props) => props.theme.color.darkBlue};
    }
  }
`;

function AddModal({ setIsAddModalOpen }) {
  const [memberList, setMemberList] = useState([]);
  const roleList = useRecoilValue(roleListState);

  const memberInfoArray = [
    {
      src: null,
      name: '?????????',
      id: '@?????????#1111',
      roleArray: [{ name: '?????????', color: 'orange' }],
    },
    {
      src: null,
      name: '?????????',
      id: '@?????????#1112',
      roleArray: [{ name: '???????????????', color: 'green' }],
    },
    {
      src: null,
      name: '?????????',
      id: '@?????????#1113',
      roleArray: [{ name: '?????????', color: 'orange' }],
    },
    {
      src: null,
      name: '?????????',
      id: '@?????????#1114',
      roleArray: null,
    },
  ];

  useEffect(() => {
    setMemberList([...memberInfoArray]);
  }, []);
  return (
    <>
      <AddModalHeader>
        <h1>?????? ?????? ?????? ??????</h1>
        <div className="channel-name">#??????</div>
      </AddModalHeader>

      <AddModalContent>
        <div className="search-box">
          <SearchBar
            placeholder="???. ?????????, @wumpus"
            containerStyle={{
              height: '34px',
              marginBottom: '8px',
              padding: '1px',
            }}
            inputStyle={{
              margin: '1px',
              padding: ' 0 8px',
            }}
            fontSize="16px"
          />
          <div className="description">
            ?????? ????????? @ ?????? ??????????????? ?????? ????????? ???????????????.
          </div>
        </div>

        <RoleMemberList>
          {roleList.length !== 0 && (
            <div className="role-list">
              <Label>??????</Label>
              {roleList.map((role) => (
                <AddRoleRow
                  key={role.name}
                  color={role.color}
                  name={role.name}
                />
              ))}
            </div>
          )}
          {memberList.length !== 0 && (
            <div className="member-list">
              <Label>??????</Label>
              {memberList.map((member) => (
                <AddMemberRow
                  key={member.name}
                  profile={member.src}
                  name={member.name}
                  code={member.id}
                />
              ))}
            </div>
          )}
        </RoleMemberList>
      </AddModalContent>

      <AddModalFooter>
        <div
          role="presentation"
          className="cancel-button"
          onClick={() => {
            setIsAddModalOpen(false);
          }}
        >
          ??????
        </div>
        <div role="presentation" className="add-button">
          ??????
        </div>
      </AddModalFooter>
    </>
  );
}

AddModal.propTypes = {
  setIsAddModalOpen: PropTypes.func,
};

AddModal.defaultProps = {
  setIsAddModalOpen: () => {},
};

export default React.memo(AddModal);
