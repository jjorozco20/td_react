import { useMemo } from 'react';
import api from 'services/api';
import websocket from 'services/websocket'; // Export Interface

/**
 *
 */
export function useServices() {
	const services = useMemo(() => {
		return { api };
	}, []);

	return [services];
}
