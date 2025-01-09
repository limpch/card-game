import { FC } from "react"
import { Container, Group, Image, Paper, Text } from "@mantine/core"
import logo from "@/assets/game-logo.png"
import { Link } from "react-router-dom"

interface HeaderProps {}

export const Header: FC<HeaderProps> = ({}) => {
	return (
		<Paper shadow="xs">
			<Container w="100%">
				<Group h={60} align="center" justify="space-between">
					<Group align="center">
						<Link to="/admin">
							<Group>
								{/* <Image src={logo} alt="logo" h={40} /> */}
								<Text fz={20} fw={700} c="black">
									Админ-панель
								</Text>
							</Group>
						</Link>
					</Group>
					<Group>
						<Link to="/admin">
							<Text>Главная</Text>
						</Link>
						<Link to="/admin/cards">
							<Text>Карты</Text>
						</Link>
					</Group>
				</Group>
			</Container>
		</Paper>
	)
}
