import React, { useRef, useState } from 'react';
import { AiOutlineMore } from 'react-icons/ai';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import useOutsideClick from '../../../../hooks/useOutsideClick';
import BackdropModal from '../../../../common/components/BackdropModal';
import {
  DarkModalButton,
  DarkModalContainer,
} from '../../../../layout/DarkModal';

const Container = styled.div`
  margin-top: 5px;
  padding: 0 10px 0 0;
  visibility: ${(props) => (props.isInfoHover ? 'visible' : 'hidden')};
  position: relative;
`;

const Icon = styled(AiOutlineMore)`
  font-size: 28px;
  color: ${(props) => props.theme.color.secondaryText};

  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.color.primaryText};
  }
`;

const DarkModal = styled(DarkModalContainer)`
  position: absolute;
  z-index: 1;
  top: calc(100% + 8px);
  right: 0;
`;

const ModalLayout = styled.div`
  width: 100%;

  .title {
    padding: 16px;
    font-size: 20px;
    font-weight: 600;
  }

  .description {
    padding: 0 16px 16px 16px;
  }

  .nav-bar {
    padding: 16px;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    background-color: ${(props) => props.theme.color.secondaryBg};
    border-radius: 0 0 5px 5px;
  }

  button {
    width: 96px;
    height: 38px;
    padding: 2px 16px;
    font-size: 14px;
    color: ${(props) => props.theme.color.primaryText};
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }

  .cancel {
    background-color: ${(props) => props.theme.color.secondaryBg};

    &:hover {
      text-decoration: underline;
      color: ${(props) => props.theme.color.primaryText};
    }
  }

  .submit {
    background-color: ${(props) => props.theme.color.red};

    &:hover {
      background-color: ${(props) => props.theme.color.darkRed};
    }
  }
`;

function MemberMoreBtn({ isInfoHover, name }) {
  const manageModalRef = useRef();
  const [isManageModalOpen, setIsManageModalOpen] = useState(false);
  const [isThrowModalOpen, setIsThrowModalOpen] = useState(false);
  const [isBlockModalOpen, setIsBlockModalOpen] = useState(false);

  useOutsideClick(manageModalRef, () => {
    setIsManageModalOpen(false);
  });

  return (
    <Container
      isInfoHover={isInfoHover}
      onClick={() => {
        setIsManageModalOpen(true);
      }}
    >
      <Icon />
      {isManageModalOpen && (
        <DarkModal ref={manageModalRef}>
          <DarkModalButton strict>
            <p
              role="presentation"
              onClick={() => {
                setIsThrowModalOpen(true);
                setIsManageModalOpen(false);
              }}
            >
              ????????????
            </p>
            <BackdropModal
              open={isThrowModalOpen}
              setOpen={setIsThrowModalOpen}
            >
              <ModalLayout>
                <div className="title">{name} ?????? ???????????? ????????????</div>
                <div className="description">
                  ????????? @{name} ?????? ???????????? ?????????????????????? ??? ????????? ?????????
                  ?????? ????????? ??? ?????????.
                </div>
                <div className="nav-bar">
                  <button
                    type="button"
                    className="cancel"
                    onClick={() => {
                      setIsThrowModalOpen(false);
                    }}
                  >
                    ??????
                  </button>
                  <button type="button" className="submit">
                    ????????????
                  </button>
                </div>
              </ModalLayout>
            </BackdropModal>
          </DarkModalButton>
          <DarkModalButton strict>
            <p
              role="presentation"
              onClick={() => {
                setIsBlockModalOpen(true);
              }}
            >
              ????????????
            </p>
            <BackdropModal
              open={isBlockModalOpen}
              setOpen={setIsBlockModalOpen}
            >
              <ModalLayout>
                <div className="title">{name} ?????? ???????????? ????????????</div>
                <div className="description">
                  ????????? @{name} ?????? ???????????? ?????????????????????? ??? ????????? ?????????
                  ?????? ????????? ??? ?????????.
                </div>
                <div className="nav-bar">
                  <button
                    type="button"
                    className="cancel"
                    onClick={() => {
                      setIsBlockModalOpen(false);
                    }}
                  >
                    ??????
                  </button>
                  <button type="button" className="submit">
                    ????????????
                  </button>
                </div>
              </ModalLayout>
            </BackdropModal>
          </DarkModalButton>
        </DarkModal>
      )}
    </Container>
  );
}

MemberMoreBtn.propTypes = {
  isInfoHover: PropTypes.bool,
  name: PropTypes.string,
};

MemberMoreBtn.defaultProps = {
  isInfoHover: false,
  name: '',
};

export default MemberMoreBtn;
