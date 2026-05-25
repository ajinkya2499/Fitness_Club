import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from '@mui/material';

import { useNavigate } from 'react-router-dom';

export default function ProductCard({
  id,
  name,
  description,
  image,
}) {

  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 300, margin: 2 }}>

      <CardMedia
        sx={{ height: 200 }}
        image={image}
        title={name}
      />

      <CardContent>

        <Typography gutterBottom variant="h5">
          {name}
        </Typography>

        <Typography variant="body2">
          {description}
        </Typography>

      </CardContent>

      <Button
        onClick={() => navigate(`/products/${id}`)}
      >
        View Details
      </Button>

    </Card>
  );
}