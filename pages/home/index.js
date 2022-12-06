import { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { NoSsr, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import AnimationUtility from '../../Utility/animationUtility'
import { Example } from '../../Utility/SideBar/Example'
import HorizontalScroll from '../../Utility/horizontalScroll/HorizontalScroll'
import Loader from '../../Utility/Loader'
import BackgrounVideoPlayer from '../../Utility/backgroundVideo/BackgroundVideo'
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
}))
const initialXY = [
  { x: 120, y: 0 },
  { x: 0, y: 120 },
  { x: 0, y: -120 },
  { x: -120, y: 0 },
] //, { x: -120, y: -120 }, { x: 120, y: -120 }]
let wiss = "WISSENAIRE'23"
let string = 'AETERNUM REIS'
let belowString =
  'REDFINING AUTOMOBILE AND TRANSPORTATION TECHNOLOGY IN THE LIGHT OF ACCRESCENT EXIGENCIES'
let usingSpread = string.split('')
let newSpread = belowString.split(/\s+/)
let ogSpread = wiss.split('')
export default function Home() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 6000)
  }, []);
  return (
    false ? (
      <Loader />
    ) : (<div>
      <NoSsr>
        <div>
          <Example />
          {/* <Grid container spacing={13} style={{ color: "white", fontWeight: "900", mixBlendMode: "difference", position: "absolute", top: "30px" }}>
            <Grid item xs={12} md={7} style={{ textAlign: "center" }}>
              <Stack>
                <Typography style={{ fontSize: '10.2vmin' }}>
                  <p style={{ fontSize: '3vh', marginBottom: "-60px", }}>
                    <AnimationUtility word={ogSpread} initialXY={initialXY} />
                  </p>
                  <AnimationUtility word={usingSpread} initialXY={initialXY} />
                </Typography>
                <Typography
                  style={{ fontSize: '25px', fontWeight: "900" }}
                  spacing={0}
                >
                  <AnimationUtility word={newSpread} initialXY={initialXY} wordWise={true} />
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={5} style={{}}>
              {/* <Item>xs=4</Item> */}

          {/* <HorizontalScroll /> */}
          {/* </Grid> */}
          {/* </Grid> */}
          {/* <BackgrounVideoPlayer /> */}
        </div>
      </NoSsr>
    </div>)
  )
}
