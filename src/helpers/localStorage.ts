export function setStorageElement<T>(key: string, data: T) {
	localStorage.setItem(key, JSON.stringify(data));
}
