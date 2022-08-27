import {
  Container,
  HStack,
  Image,
  Stack,
  Button,
  Divider,
  Center,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Login from "./Login";

const NavbarTop = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <>
      <Container maxW={"container.xl"}>
        <HStack justify={"space-between"}>
          <Image
            src={"https://www.kindmeal.my/images/logo-kindmeal.png"}
            alt={"Logo"}
          />
          <HStack>
            <Image
              src={"https://www.kindmeal.my/images/follow_blog_grey.png"}
              alt={"Logo"}
              width={10}
            />
            <Image
              src={"https://www.kindmeal.my/images/follow_facebook_grey.png"}
              alt={"Logo"}
              width={10}
            />
            <Image
              src={"https://www.kindmeal.my/images/follow_twitter_grey.png"}
              alt={"Logo"}
              width={10}
            />
          </HStack>
          <HStack>
            <Button size={"sm"}>Login</Button>
            <Button colorScheme="facebook" size={"sm"}>
              Facebook
            </Button>
            <Button
              size={"sm"}
              bg={"#666666"}
              color={"white"}
              _hover={{ background: "#66666" }}
              onClick={() => setIsModalVisible(true)}
            >
              Email
            </Button>
            <Center height="50px">
              <Divider orientation="vertical" />
            </Center>
            <Button size={"sm"}>Sign Up</Button>
          </HStack>
        </HStack>
      </Container>
      <Login
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </>
  );
};

export default NavbarTop;
