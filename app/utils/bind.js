function bind(that, handles) {
	handles.forEach((handle) => handle.bind(that));
}

export default bind;