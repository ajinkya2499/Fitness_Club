import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {selectWorkout} from './WorkoutTrainerSlice'
import { Box, Button, Card, CardContent, Grid, Typography } from '@mui/material';

function WorkoutTrainer() {

  const dispatch = useDispatch();
  const workout = useSelector((state) => state.workout.workout)
  return (
    <div>
       <Box sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Available muscles workout
      </Typography>
      <Grid container spacing={3}>
        {workout.map((workout) => (
          <Grid item xs={12} sm={8} md={4} key={workout.id}>
            <Card sx={{ boxShadow: 3, borderRadius: 3 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  {workout.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  {workout.description}
                </Typography>

                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2 }}
                  onClick={() => dispatch(selectWorkout(workout.id))}
                >
                  Select
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    </div>
  )
}

export default WorkoutTrainer
