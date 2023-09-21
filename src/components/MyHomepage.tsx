import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import { INews } from "../interfaces/INews";
import SingleNews from "./SingleNews";

const MyHomepage = () => {
  const [news, setNews] = useState<INews>();

  const fetchNews = async () => {
    try {
      const resp = await fetch("https://api.spaceflightnewsapi.net/v4/articles");
      if (resp.ok) {
        const newsFromAPI = await resp.json();
        console.log(newsFromAPI);
        setNews(newsFromAPI);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12}>
          <h1 className="text-center mx-3">NEWS: Ultime notizie di oggi </h1>
        </Col>
      </Row>
      <Row>
        {news &&
          news.results.map((result) => (
            <Col xs={12} md={4} lg={3} key={result.id}>
              <SingleNews news={result} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};
export default MyHomepage;
