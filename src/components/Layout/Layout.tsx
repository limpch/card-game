import { FC } from "react"
import classes from "./styles.module.scss"
import { Outlet } from "react-router-dom"
import { motion } from "motion/react"
import { useAuth } from "@/hooks/useAuth"

interface LayoutProps {}

export const Layout: FC<LayoutProps> = ({}) => {
	const { isLoading } = useAuth()

	if (isLoading) return <div>Loading...</div>

	return (
		<div className={classes.game}>
			<motion.div
				initial={{ translateX: "100%", opacity: 0 }}
				animate={{ translateX: 0, opacity: 1 }}
				exit={{ translateX: "-100%", opacity: 0 }}
			>
				<Outlet />
			</motion.div>
		</div>
	)
}
