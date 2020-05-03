import * as React from "react"
import { motion } from "framer-motion"
import { Link } from "gatsby"

const variants = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 }
		}
	},
	closed: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 }
		}
	}
}

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"]

export const MenuItem = ({ i, item }) => {
	const style = { color: `${colors[i]}` }
	return (
		<motion.li
			variants={variants}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.95 }}
		>
			<Link to={item.url}>
				<div className="text-placeholder" style={style}>
					{item.title}
				</div>
			</Link>
		</motion.li>
	)
}
