import { useToast } from "@chakra-ui/react";

export const useSuccessToast = () => {
    const toast = useToast();
    return (message, reset) => {
        toast({
            title: message,
            status: "success",
            duration: 3000,
            isClosable: true,
        });
        reset();
    };
};

export const useWarningToast = () => {
    const toast = useToast();
    return (message) => {
        toast({
            title: message,
            status: "warning",
            duration: 3000,
            isClosable: true,
        });
    };
};

export const useErrorToast = () => {
    const toast = useToast();
    return (message) => {
        toast({
            title: message,
            status: "error",
            duration: 3000,
            isClosable: true,
        });
    };
};
