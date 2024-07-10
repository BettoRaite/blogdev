"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./nav-links.module.css";
import { v4 as uuidv4 } from "uuid";

interface Link {
	name: string;
	href: string;
}

interface NavLinksProps {
	layout: "column" | "row";
	links: Link[];
}

function NavLinks({ layout, links }: NavLinksProps) {
	const pathname = usePathname();

	return (
		<ul
			className={styles.navLinks}
			style={{
				flexFlow: layout,
			}}
		>
			{links.map((link) => {
				return (
					<li
						key={uuidv4()}
						className={`nav__list-item--default ${pathname === link.href && "nav__list-item--active"}`}
					>
						<Link className="nav__link--default" href={link.href}>
							{link.name}
						</Link>
					</li>
				);
			})}
		</ul>
	);
}

export default NavLinks;
