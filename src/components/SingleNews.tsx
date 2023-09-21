import { Button, Card } from "react-bootstrap";
import { IResult } from "../interfaces/INews";

interface SingleNewsProps {
  news: IResult;
}

const SingleNews = (news: SingleNewsProps) => {
  return (
    <Card>
      <Card.Img variant="top" src={news.news.image_url} />
      <Card.Body>
        <Card.Title>{news.news.title}</Card.Title>
        <Card.Text>{news.news.summary}</Card.Text>
        <Button variant="primary">Leggi i dettagli</Button>
      </Card.Body>
    </Card>
  );
};

export default SingleNews;
