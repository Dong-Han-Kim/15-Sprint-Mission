import { NavLink } from 'react-router-dom';
import style from './Nav.module.css';

const Nav = () => {
	function getButtonStyle({ isActive }) {
		return { backgroundColor: isActive ? '#3692FF' : '' };
	}

	return (
		<nav className={style.navBar}>
			<img src="/logo.png" alt="판다마켓 로고" className={style.logo} />
			<ul className={style.navItem}>
				<li>자유게시판</li>
				<li>
					<NavLink to="/items" style={getButtonStyle}>
						중고마켓
					</NavLink>
				</li>
			</ul>
			<div className={style.user}>
				<img src="./user.png" alt="유저 이미지" />
			</div>
		</nav>
	);
};

export default Nav;
