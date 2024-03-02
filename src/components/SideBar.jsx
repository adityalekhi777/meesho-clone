import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  useDisclosure,
} from "@chakra-ui/react";

import React from "react";
import { FaBars } from "react-icons/fa";

export default function SideBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button ref={btnRef} colorScheme="pink" onClick={onOpen}>
      <FaBars />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Profile</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} bg={"#D53F8C"}  color={"white"} onClick={onClose}>
              close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}


// {!user && (
//   <li
//     onMouseOver={() => {
//       setShowProfile(true);
//       setHover(false);
//     }}>
//     Profile
//     {showProfile && (
//       <div
//         onMouseOut={() => setShowProfile(false)}
//         className={styles.profile}>
//         Hello User <span>To access your Meesho account</span>
//         <Link to='/signup'>
//           <button className={styles.profile_btn}>Sign Up</button>
//         </Link>
//       </div>
//     )}
//   </li>
// )}