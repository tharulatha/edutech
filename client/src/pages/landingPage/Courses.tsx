import { Grid } from "@mui/material";
import { H1, P } from "../../components/Typography";
import { COURSELOGO2,COURSELOGO3, COURSELOGO4, COURSELOGO5 } from "../../utils/constants";
function Courses() {
  return (
    <section id="course" className="sec">
      <H1 sx={{ textAlign: "center", m: 5 }}>Courses</H1>
      <Grid container xs={12} gap={1}>
        <Grid
          item
          md={2.9}
          p={3}
          className="courses-container"
          sx={{
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={COURSELOGO4} className="couses-logo html" />
          <P
            sx={{
              textAlign: "justify",
              lineHeight: "1.2rem",
            }}
          >
            Learn the building blocks of web development. Our HTML courses will
            teach you how to structure your web pages with semantic markup and
            best practices.
          </P>
        </Grid>
        <Grid
          item
          md={2.9}
          p={3}
          className="courses-container"
          sx={{
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={COURSELOGO2} className="couses-logo css" />
          <P
            sx={{
              textAlign: "justify",
              lineHeight: "1.2rem",
            }}
          >
            Style your web pages like a pro. Dive into our CSS courses to
            understand layout techniques, responsive design, and advanced
            styling options that bring your websites to life.
          </P>
        </Grid>
        <Grid
          item
          md={2.9}
          p={3}
          className="courses-container"
          sx={{
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={COURSELOGO3} className="couses-logo js" />
          <P
            sx={{
              textAlign: "justify",
              lineHeight: "1.2rem",
            }}
          >
            Unlock the power of dynamic web content. Our JavaScript tutorials
            cover everything from basic syntax to advanced programming concepts,
            enabling you to create interactive and engaging user experiences.
          </P>
        </Grid>
        <Grid
          item
          md={2.9}
          p={3}
          className="courses-container"
          sx={{
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={COURSELOGO5} className="couses-logo react" />
          <P
            sx={{
              textAlign: "justify",
              lineHeight: "1.2rem",
            }}
          >
            Take your web development skills to the next level with React. Learn
            how to build powerful, scalable web applications using this popular
            JavaScript framework.
          </P>
        </Grid>
      </Grid>
    </section>
  );
}

export default Courses;
