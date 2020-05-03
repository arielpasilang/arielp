import React, { useState, useEffect } from "react"
import styles from "./hobbies.module.css"
import Layout from "../components/layout"
import { motion } from "framer-motion"
import { shuffle } from "lodash"
import Pic1 from "../components/images/pic1"
import Pic2 from "../components/images/pic2"
import Pic3 from "../components/images/pic3"

const spring = {
	type: "spring",
	damping: 20,
	stiffness: 300
}

const initialColors = [1, 2, 3]

const Hobbies = () => {
	const [colors, setColors] = useState(initialColors)

	useEffect(() => {
		setTimeout(() => setColors(shuffle(colors)), 20000)
	}, [colors])

	return (
		<Layout>
			<div className={styles.about}>
				<h1>Hobbies</h1>
				<p>
					Well, aside from being a tech savvy guy, I spend most of my weekends
					hiking on the mountains and forest, go for a foggy road ride,
					travelling to a nearby beaches, go for a camp and do star gazing,
					phoneography, taking up survival courses to prepare for zombie
					apocalypse :)
				</p>
				<p>
					It is really good to disconnect once in a while from our
					responsibilities and to do's and just enjoy the nature and reconnects
					to our inner soul.
				</p>
				<br />
				<div>
					<h3>Galleries</h3>
					<ul>
						{colors.map(id => (
							<motion.li key={id} layoutTransition={spring}>
								{id === 1 ? (
									<div className={styles.pics}>
										<Pic1 />
									</div>
								) : id === 2 ? (
									<div className={styles.pics}>
										<Pic2 />
									</div>
								) : id === 3 ? (
									<div className={styles.pics}>
										<Pic3 />
									</div>
								) : null}
							</motion.li>
						))}
					</ul>
				</div>
			</div>
		</Layout>
	)
}

export default Hobbies
