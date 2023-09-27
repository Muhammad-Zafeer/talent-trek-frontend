import { GridItem, Show, Stack } from "@chakra-ui/react";
import { Grid } from "@chakra-ui/react";
import NavBar from "./components/Navbar";
import CourseCard from "./components/CourseCard";
import Sidebar from "./components/SideBar";

function App() {
  return (
    <Grid
      templateAreas={{ base: '"nav" "main"', lg: '"nav nav" "aside main"' }}
      gridTemplateColumns={"270px 1fr"}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <Sidebar />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Stack spacing={4} direction="row" wrap="wrap" >
          Main
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </Stack>
      </GridItem>
    </Grid>
  );
}

export default App;
