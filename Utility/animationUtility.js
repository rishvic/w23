import { Grid } from "@mui/material"
import { motion } from "framer-motion"
import { COOKIE_NAME_PRERENDER_BYPASS } from "next/dist/server/api-utils"

export default function AnimationUtility({ word, initialXY, wordWise }) {
    console.log(word, initialXY)
    return (
        <Grid container spacing={wordWise && 4} style={{padding:"23px"}}>
            {
                word.map((character, index) => {
                    if (character !== ' ')
                        return (
                            <Grid item style={{}}>
                                <motion.div style={{
                                    display: "inline-block",
                                    // backgroundColor: index % 2 ? "blue" : "red" 
                                }}
                                    animate={{ x: 0, y: 0, opacity: 1, scale: 1.2 }}
                                    transition={{
                                        duration: 2,
                                    }}
                                    initial={{ x: initialXY[index % initialXY.length].x, y: initialXY[index % initialXY.length].y, scale: 0.6 }}

                                >{wordWise ? <>{character}&nbsp;</> : character}</motion.div></Grid>
                        )
                    else return <Grid item
                        style={{ display: "inline-block" }}
                    >&nbsp;</Grid>
                })
            }
        </Grid>
    )
}