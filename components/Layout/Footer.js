export default function Footer() {
	return (
		<footer>
			<p>
				Designed and code with{' '}
				<span role="img" alt="heart emoji">
					💖
				</span>{' '}
				and{' '}
				<span role="img" alt="coffee emoji">
					{' '}
					☕
				</span>{' '}
			</p>
			<p>
				copyright &copy; {new Date().getFullYear()}{' '}
				<a href="https://github.com/muchirijane" target="_blank" rel="noopener noreferrer">
					Jane Muchiri
				</a>
			</p>
		</footer>
	);
}
