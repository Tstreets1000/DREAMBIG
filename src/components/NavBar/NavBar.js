import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss';
import Logo from '../Logo/Logo';

export default function NavBar({ Home, Profile, Sports, Grades, Colleges, Extras, Recommendations }) {
	return (
		<main>
			<section className={styles.Links}>
				<div className={styles.logo}>
					<Logo />
				</div>
				<ul>
					<li>
						<a href="/dreamBig">Home</a>
					</li>
					<li>
						<a href="/profile">Profile</a>
					</li>
					<li>
						<a href="/sports">Sports</a>
					</li>
					<li>
						<a href="/grades">Grades</a>
					</li>
					<li>
						<a href="/colleges">Colleges</a>
					</li>
					<li>
						<a href="/extras">Extras</a>
					</li>
					<li>
						<a href="/recommendations">Recommendations</a>
					</li>
				</ul>
			</section>
		</main>
	);
}

