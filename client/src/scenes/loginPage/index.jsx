import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
    const theme = useTheme();
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    return (
    <Box>
        <Box 
        backgroundColor={theme.palette.background.alt}
        width={"100%"} 
        p="1rem 6%"
        textAlign="center"
        >
        <Typography
            fontWeight="bold"
            fontSize="32px" // min value prefered and max value
            color="primary"
            >
                JadonJS
            </Typography>
        </Box>

        <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p={"2rem"}
        m={"2rem auto"}
        borderRadius={"1.5rem"}
        backgroundColor={theme.palette.background.alt}
        >
        <Typography fontWeight={"500"} variant="h5" sx={{mb: "1.5rem"}}>
            Welcome to JadonJS, the Social Media for Sociopaths!
        </Typography>
        <Form />
        </Box>
    </Box>
    );
};

export default LoginPage;