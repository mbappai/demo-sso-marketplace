import { Box,Button, Flex } from "@chakra-ui/react";

export default function Login(){
    function navigateToAuthSite(){
        location.href = 'http://www.localhost'
    }

    return(
        <Flex width={'100%'} height={'100vh'} justifyContent={'center'} alignItems={'center'}>
            <Button onClick={navigateToAuthSite} variant={'solid'}>
                Login to marketplace
            </Button>
        </Flex>
    )
}