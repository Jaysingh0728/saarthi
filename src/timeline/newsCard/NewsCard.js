import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import axios from 'axios';

export default function NewsCard() {
  const [articles, setArticles] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines?country=in&apiKey=f07a8a714b424f96a9d42fe98a0fb6b1'
        );
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
    {articles.map((article, index) => (
      <Card sx={{ maxWidth: 345 }} key={index} className='card'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={article.urlToImage}
          alt={article.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {article.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {article.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <a href={article.url} target='to_blank' className='card-btn'>Show More...</a>
        </Button>
      </CardActions>
    </Card>
    ))}
    </>
  );
}