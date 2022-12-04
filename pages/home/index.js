import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { NoSsr, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { motion } from 'framer-motion'
import AnimationUtility from '../../Utility/animationUtility';
import { Example } from "../../Utility/SideBar/Example"
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
}));
const initialXY = [{ x: 120, y: 0 }, { x: 0, y: 120 }, { x: 0, y: -120 }, { x: -120, y: 0 }]//, { x: -120, y: -120 }, { x: 120, y: -120 }]
let wiss = "WISSENAIRE'23 Presents"
let string = "AETERNUM REIS";
let belowString = "REDFINING AUTOMOBILE AND TRANSPORTATION TECHNOLOGY IN THE LIGHT OF ACCRESCENT EXIGENCIES"
let usingSpread = string.split('');
let newSpread = belowString.split('');
let ogSpread = wiss.split('');
export default function Home() {
    return (
        <NoSsr>
            <Example />
            <Box>
                <Grid container
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item xs={12} md={7} style={{marginTop:"-100px"}}>
                        <Stack spacing={4}>
                            <p style={{ fontSize: "5vh" }}>
                                <AnimationUtility word={ogSpread} initialXY={initialXY} />
                            </p>
                            <Typography style={{ fontSize: "10.2vmin" }}>
                                <AnimationUtility word={usingSpread} initialXY={initialXY} />
                            </Typography>
                            <Typography style={{ fontSize: "4.9vmin", wordWrap: "break-word" }}>
                                <AnimationUtility word={newSpread} initialXY={initialXY} />
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Item>xs=4</Item>
                    </Grid>
                </Grid>
            </Box>
        </NoSsr>
    )
}