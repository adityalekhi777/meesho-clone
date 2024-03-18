import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Center,
} from "@chakra-ui/react";

import React from "react";
import {useNavigate} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {authActions} from '../redux/auth/authSlice'  
import { FaBars } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

export default function SideBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

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
            <Center m={10}>
              <CgProfile size={60} />
            </Center>
            {user && <h3>Hello, {user.email}</h3>}
            {user && (
              <Center m={5}>
              <Button
                variant="outline"
                mr={3}
                bg={"#D53F8C"}
                color={"white"}
                onClick={() => dispatch(authActions.logout())}
              >
                Logout
              </Button>
              </Center>
            )}
            {!user && 
            <Center>
              <Button
                variant="outline"
                mr={3}
                bg={"#D53F8C"}
                color={"white"}
                onClick={()=>navigate("login")}
              >
                Login
              </Button>
              <Button
                variant="outline"
                mr={3}
                bg={"#D53F8C"}
                color={"white"}
                onClick={()=>navigate("signup")}
              >
                Signup
              </Button>
            </Center>}
          </DrawerBody>

          <DrawerFooter>
            <Button
              variant="outline"
              mr={3}
              bg={"#D53F8C"}
              color={"white"}
              onClick={onClose}
            >
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
