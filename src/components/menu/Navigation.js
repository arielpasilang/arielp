import * as React from "react"
import { motion } from "framer-motion"
import { MenuItem } from "./MenuItem"

const variants = {
	open: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 }
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 }
	}
}

export const Navigation = () => (
	<motion.ul variants={variants}>
		{menuItemIds.map(item => (
			<MenuItem i={item.id} key={item.id} item={item} />
		))}
	</motion.ul>
)

const menuItemIds = [
	{
		id: 0,
		title: "Home",
		url: ""
	},
	{
		id: 1,
		title: "Hobbies",
		url: "hobbies"
	},
	{
		id: 2,
		title: "Portfolio",
		url: "portfolio"
	},
	{
		id: 3,
		title: "Blog",
		url: "blog"
	},
	{
		id: 4,
		title: "Contact",
		url: "contact"
	}
]
