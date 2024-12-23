import { Outlet, useLocation } from "react-router-dom"
import { useState } from "react"
import { StoragePageLayout } from "@/Layout/StoragePageLayout"

export const StoragePage = () => {
	const location = useLocation()
	const [cards, setCards] = useState(8)
	return (
		<StoragePageLayout>
			<Outlet />
		</StoragePageLayout>
	)
}
