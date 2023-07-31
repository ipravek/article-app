import { useState, useEffect } from "react";
import axios from "axios";
import uuid from "react-uuid";

import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import Spinner from "./Spinner";
import { Box } from "@mui/system";

const renderHtml = ({ children }) => {
  return <div dangerouslySetInnerHTML={{ __html: children }} />;
};

const Article = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        let res = await axios.get(process.env.REACT_APP_API_URL);
        if (res.status === 200) {
          setData(res.data);
          setLoading(false);
        } else {
          alert("error occured, try again");
          console.log("err on request data, try again");
        }
      } catch (err) {
        alert("error occured, try again");
        console.log("err", err);
      }
    })();
  }, []);

  return (
    <>
      {loading ? (
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Spinner />
        </Box>
      ) : (
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {data &&
            data.map((e) => (
              <Grid container item xs={12} sm={6} md={4} key={uuid()}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image={e.jetpack_featured_media_url}
                    title="image"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      <div
                        dangerouslySetInnerHTML={{ __html: e.title.rendered }}
                      ></div>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <div
                        dangerouslySetInnerHTML={{ __html: e.excerpt.rendered }}
                      ></div>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      variant="outlined"
                      href={e.canonical_url}
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
        </Grid>
      )}
    </>
  );
};

export default Article;
