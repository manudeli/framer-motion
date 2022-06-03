import { Dispatch, SetStateAction } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const backdrop: Variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modalContainer: Variants = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "20vh",
    opacity: 1,
    transition: { delay: 0.5 },
  },
};

interface Props {
  isModal: boolean;
  setIsModal: Dispatch<SetStateAction<boolean>>;
}

const Modal = ({ isModal, setIsModal }: Props) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {isModal && (
        <Backdrop
          onClick={() => setIsModal(false)}
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <ModalContainer
            variants={modalContainer}
            initial="hidden"
            animate="visible"
          >
            <ModalParagraph>Want to make another pizza?</ModalParagraph>
            <Link to="/">
              <ModalButton>Start Again</ModalButton>
            </Link>
          </ModalContainer>
        </Backdrop>
      )}
    </AnimatePresence>
  );
};

export default Modal;

const ModalContainer = styled(motion.div)`
  max-width: 400px;
  margin: 0 auto;
  left: 16px;
  right: 16px;
  position: absolute;
  padding: 40px 20px;
  background: white;
  border-radius: 12px;
  text-align: center;
`;

const ModalButton = styled(motion.button)`
  color: #444;
  border-color: #444;
  font-weight: bold;
  margin-top: 20px;
`;

const ModalParagraph = styled(motion.p)`
  color: #444;
  font-weight: bold;
`;

const Backdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;
