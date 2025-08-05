// src/components/ProductCard.jsx
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ProductCard({ name, description, image }) {
  return (
    <Card sx={{ maxWidth: 350, margin: 2 }}>
      <CardMedia sx={{ height: 100 }} image={image} title={name} />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <Button >Products</Button>
      <Button size="small">Learn More</Button>
    </Card>
  );
}
