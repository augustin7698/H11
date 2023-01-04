function hash(string) {
	let hash = 0;
	for (let i = 0; i < string.length; i++) {
		hash = (hash << 5) - hash + string.charCodeAt(i);
		hash = hash & hash;
	}
	return hash ** 2 + (Math.sqrt(hash ** 2) / hash);
}
