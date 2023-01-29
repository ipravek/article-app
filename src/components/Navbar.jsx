import { Box, Link, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          height: 60,
          alignItems: "center",
          boxShadow: 1,
        }}
      >
        <Link
          sx={{
            p: 2,
            cursor: "pointer",
            outline: "none",
            textDecoration: "none",
            color: "primary.main",
            fontWeight: 900,
            "&:hover": {
              color: "secondary.main",
            },
          }}
        >
          <Typography sx={{ fontSize: 18 }}>Articles</Typography>
        </Link>
      </Box>
    </>
  );
};

export default Navbar;
