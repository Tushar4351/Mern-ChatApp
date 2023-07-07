import React, { useEffect } from "react";
import { Container, Box, Tabs, TabList, Tab, TabPanels, TabPanel,Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";


const Homepage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) {
      navigate("/chats");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);

  return (
    <Container maxW="xl" centerContent>
     
      <Box 
       w="100%"
        p={4}
        borderRadius="3xl"
        color="black"
        >
         <Text fontSize='4xl' color='white'>Welcome Back !!!</Text>
      <Tabs isFitted variant="soft-rounded" >
        <TabList mt="2em">
          <Tab style={{color:"black"}} _selected={{ color: 'black', bg: 'white' }} >Login</Tab>
          <Tab style={{color:"black"}} _selected={{ color: 'black', bg: 'white' }} >Sign Up</Tab>
        </TabList>
        <TabPanels>
          <TabPanel mt="2em">
            <Login />
          </TabPanel>
          <TabPanel>
            <Signup />
          </TabPanel>
        </TabPanels>
        </Tabs>
          </Box>
  </Container>
  );
};

export default Homepage;
