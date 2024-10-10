// const { useToast } = require("@inertiajs/react");
import { useToast } from '@chakra-ui/react'



export const handleSuccess = (message, reset) => {
    const toast = useToast();
    toast({
        title: message,
        status: "success",
        duration: 3000,
        isClosable: true,
    });
    reset();
};

export const handleWarning = (message) => {
    const toast = useToast();
    toast({
        title: message,
        status: "warning",
        duration: 3000,
        isClosable: true,
    });
};

export const handleError = (message) => {
    const toast = useToast();
    toast({
        title: message,
        status: "error",
        duration: 3000,
        isClosable: true,
    });
};
