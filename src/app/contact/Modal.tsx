import React from 'react';

import cx from 'classnames';
import styles from '.@/styles/ModalThanks.module.scss';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from '@nextui-org/react';
import { useRouter } from 'next/navigation';

interface Props {}

export default function ModalThanks({
  isOpen,
  onOpen,
  onOpenChange,
}: {
  isOpen: any;
  onOpen: any;
  onOpenChange: any;
}) {
  const router = useRouter();
  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                🎉🎉 감사합니다..! 🎉🎉
              </ModalHeader>
              <ModalBody>
                <p>찬조 신청이 전달되었습니다..!</p>
                <p>저희측에서 빠른 시일내에 연락드리겠습니다.</p>
                <p>감사합니다 🎉</p>
              </ModalBody>
              <ModalFooter>
                <Button
                  href="/photos"
                  color="danger"
                  variant="light"
                  onPress={() => {
                    onClose();
                    router.replace('/photos');
                  }}
                >
                  Close
                </Button>
                {/* <Button color="primary" onPress={onClose}>
                  Action
                </Button> */}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
