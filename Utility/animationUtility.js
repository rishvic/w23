import { Grid } from "@mui/material"
import { motion } from "framer-motion"

export default function AnimationUtility({ word, initialXY, wordWise }) {
    console.log(word, initialXY)
    return (
        <Grid spacing={4}>
            {
                word.map((character, index) => {
                    if (character !== ' ')
                        return (
                            <motion.div style={{ display: "inline-block", backgroundColor: index % 2 ? "blue" : "red" }}
                                animate={{ x: 0, y: 0, opacity: 1, scale: 1.2 }}
                                transition={{
                                    duration: 2,
                                }}
                                initial={{ x: initialXY[index % initialXY.length].x, y: initialXY[index % initialXY.length].y, scale: 0.6 }}

                            >{wordWise ? character : character}</motion.div>
                        )
                    else return <div
                        style={{ display: "inline-block" }}
                    >&nbsp;</div>
                })
            }
        </Grid>
    )
}