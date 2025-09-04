import supabase from "@/lib/db";
import type { IMenu } from "@/types/menu";
import { useEffect, useState } from "react";

const Home = () => {
	const [menus, setMenus] = useState<IMenu[]>([]);

	useEffect(() => {
		const fetchMenus = async () => {
			const { data, error } = await supabase.from("menus").select("*"); // ambil data dari table menus

			if (error) {
				console.log("error", error);
			} else {
				setMenus(data);
			}
		};

		fetchMenus();
	}, [supabase]);

	console.log("menus", menus);

	return <div>Home Page</div>;
};

export default Home;
