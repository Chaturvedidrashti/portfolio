import { RiReactjsLine } from "react-icons/ri";

import { motion} from "framer-motion";
import { SiAmazon, SiCloud66, SiMysql, SiSpringboot } from "react-icons/si";
import { DiJava } from "react-icons/di";

const iconVariants =(duration)=>({
    intial:{y:-10},
    animate:{
        y:[10,-10],transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse",
        },
    },
});
const Technologies = () => {

return (

<div className="border-b border-neutral-800 pb-24">

<h1 className="my-20 text-center text-4xl">Technologies</h1>

<div className="flex flex-wrap items-center justify-center gap-4">

<motion.div
variants={iconVariants(2.5)}
intial="intial"
animate="animate"
 className="rounded-2xl border-4 border-neutral-800 p-4">

<SiAmazon className="text-7xl text-cyan-400" />

</motion.div>

<motion.div
variants={iconVariants(3)}
intial="intial"
animate="animate"
 className="rounded-2xl border-4 ☐ border-neutral-800 p-4">

<RiReactjsLine className="text-7xl text-cyan-400" />

</motion.div>

<motion.div
variants={iconVariants(3.5)}
intial="intial"
animate="animate"
 className="rounded-2xl border-4 border-neutral-800 p-4">

<DiJava className="text-7xl text-cyan-400" />

</motion.div>

<motion.div
variants={iconVariants(4)}
intial="intial"
animate="animate"
 className="rounded-2xl border-4 border-neutral-800 p-4">

<SiSpringboot className="text-7xl text-cyan-400" />

</motion.div>

<motion.div
variants={iconVariants(4.5)}
intial="intial"
animate="animate"
className="rounded-2xl border-4 border-neutral-800 p-4">

<SiMysql className="text-7xl text-cyan-400" />

</motion.div>
</div>

</div>
);
};
export default Technologies;