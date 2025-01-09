import { FC } from "react"
import { Container, MantineProvider, createTheme } from "@mantine/core"
import classes from "./styles.module.scss"
import "@mantine/core/styles.css"
import { Outlet } from "react-router-dom"
import { Header } from "../Header"
import { useAuth } from "@/hooks/admin/useAuth"

interface AdminLayoutProps {}

const theme = createTheme({})

export const AdminLayout: FC<AdminLayoutProps> = () => {
	useAuth()

	return (
		<div className={classes.container}>
			<MantineProvider theme={theme}>
				<Header />
				<Container py={30}>
					<Outlet />
				</Container>
			</MantineProvider>
		</div>
	)
}
