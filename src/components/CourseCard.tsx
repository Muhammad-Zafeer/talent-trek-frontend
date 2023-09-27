import { Card, CardBody, Image ,Heading  } from "@chakra-ui/react";

// interface course {
//   id: number;
//   name: string;
// }
// const CourseCard = ({ course }) => {
//   return <Card>{course.id}</Card>;
// };

const CourseCard = () => {
  return (
    <Card maxW='sm'>
      <Image></Image>
      <CardBody>
        <Heading>
            CourseName 
        </Heading>
      </CardBody>
    </Card>
  );
};

export default CourseCard;
