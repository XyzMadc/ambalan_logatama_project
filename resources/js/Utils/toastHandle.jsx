const { usePage } = require("@inertiajs/react");

const toast = usePage();

export const handleSuccess = (message, reset) => {
    toast({
        title: message,
        status: "success",
        duration: 3000,
        isClosable: true,
    });
    reset();
};

export const handleWarning = (message) => {
    toast({
        title: message,
        status: "warning",
        duration: 3000,
        isClosable: true,
    });
};

export const handleError = (message) => {
    toast({
        title: message,
        status: "error",
        duration: 3000,
        isClosable: true,
    });
};
