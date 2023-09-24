import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss';
import Logo from '../Logo/Logo';

export default function NavBar({ Home, Profile, Sports, Grades, Colleges, Extras, Recommendations }) {
	return (
		<section>
			<aside className={styles.NavBar}>
				<img src="https://www.gpb.org/sites/default/files/styles/helmet_large/public/2021-11/ccright.png?itok=Relb1ajG"></img>
				<ul className={styles.Links}>
					<li>
						<a href="/dreamBig">Home</a>
					</li>
					<li>
						<a href="/profile">Student Profile</a>
					</li>
					<li>
						<a href="/sports">Sports, Hobbies & Clubs</a>
					</li>
					<li>
						<a href="/grades">Grades & SAT / ACT Scores</a>
					</li>
					<li>
						<a href="/colleges">College Wish List</a>
					</li>
					<li>
						<a href="/extras">Extracurricular Activities</a>
					</li>
					<li>
						<a href="/recommendations">Recommendations</a>
					</li>
				</ul>
			</aside>
		</section>
	);
}

