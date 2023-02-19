import React from 'react';
import styled from 'styled-components';
import { SlClose } from 'react-icons/sl';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;

  color: ${(props) => props.theme.color.secondaryText};
`;

const Button = styled(SlClose)`
  font-size: 30px;
`;

const Text = styled.div`
  padding-top: 10px;
`;

function SettingCloseButton() {
  return (
    <Box>
      <Button />
      <Text>ESC</Text>
    </Box>
  );
}

export default React.memo(SettingCloseButton);
