import React, {useState} from 'react'
import 'gestalt/dist/gestalt.css'
import { Box, Button, Checkbox, CompositeZIndex, FixedZIndex, Flex, Text, Layer, Modal } from "gestalt";
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
function RulesModal(props) {
    const [agree, setAgree] = useState(false);
    const isLogged = useSelector(state => state.authReducer.authData);
    const onClickAgree = () => {
        setAgree(!agree);
        console.log(isLogged);
    }
    const ModalWithHeading = ({
      onDismiss,
    }) => {
  
      return (
        <Modal
          accessibilityModalLabel="MUSE 이용약관"
          heading="MUSE 이용약관"
          onDismiss={onDismiss}
          footer={
            <Flex alignItems="center" justifyContent="end">
                { agree == true ?
                    <Link to = "/auth">
                        <Button color="blue" text="다음으로 넘어가기"/>
                    </Link>
                :
                    <></>
                }
            </Flex>
          }
          size="sm"
        >
          <Box paddingX={8}>
            <Box marginBottom={8}>
                <Text>약관에 존나게 동의하십니까?</Text>
            </Box>
            <Checkbox
              checked={agree}
              id="secret"
              label="동의합니다."
              subtext="위 약관을 모두 확인하였으며 동의합니다."
              name="languages"
              onClick = {onClickAgree}
            />
          </Box>
        </Modal>
      );
    };
  
    const [shouldShow, setShouldShow] = React.useState(false);
    const HEADER_ZINDEX = new FixedZIndex(10);
    const modalZIndex = new CompositeZIndex([HEADER_ZINDEX]);
  
    return (
      <React.Fragment>
        <Button size= "lg"
          text="회원가입"
          onClick={() => setShouldShow(true)}
        />
        {shouldShow && (
          <Layer zIndex={modalZIndex}>
            <ModalWithHeading onDismiss={() => setShouldShow(false)} />
          </Layer>
        )}
      </React.Fragment>
    );
  }

export default RulesModal