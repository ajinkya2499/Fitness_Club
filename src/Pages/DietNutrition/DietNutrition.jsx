import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Card, CardContent, Typography, Button, Grid } from '@mui/material';
import  selectDiet  from './DietSlicee';

function DietNutrition() {
  const dispatch = useDispatch();
  const diets = useSelector((state) => state.diet.diets);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Available Diet Plans
      </Typography>
      <Grid container spacing={3}>
        {diets.map((diet) => (
          <Grid item xs={12} sm={6} md={6} key={diet.id}>
            <Card sx={{ boxShadow: 3, borderRadius: 3 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  {diet.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  {diet.description}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2 }}
                  onClick={() => dispatch(selectDiet(diet.id))}
                >
                  Select
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default DietNutrition;
