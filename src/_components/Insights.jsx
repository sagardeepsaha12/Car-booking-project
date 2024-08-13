"use client"
import React from 'react'
import {motion} from "framer-motion"
import { staggerContainer } from '@/contants/motion'
import styles from '@/contants/styles'
import TitleText from './TitleText'
import { insights } from '@/contants/appdata'
export const Insights = ({isForm}) => {
  return (
    <motion.div 
    variants={staggerContainer} initial="hidden"
    whileInView="show"
    viewport={{once:false,amount:0.25}}
    className={`${styles.innerWidth} mx-auto flex flex-col`}>
        {!isForm && <TitleText title={<>Our Fleet</>}/>}
        <div className='mt-12 flex flex-col gap-9'>
            {insights?.map((insights,index)=>(
                
                ))}
        </div>
    </motion.div>
  )
}
