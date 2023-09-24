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
			<div className={styles.Header}>
			<h1>CENTRAL HIGH SCHOOL</h1>
			<h3>PRINCE J. HILL c/o 2026</h3>
			</div>
			<div>
			<img className={styles.Photo} src="https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/382455179_6857406104320670_8875021857050077734_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=49d041&_nc_ohc=GYpUXjnWKJkAX8StIiC&_nc_ht=scontent-atl3-1.xx&oh=00_AfBtKu7E5mXt5wJ91tysjRnWg2Hf6tuPhvz8Z4f9o53Irw&oe=6515817F" width="250" height="450"></img>
			</div>
		</section>
	);
}

