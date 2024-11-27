
export interface Mensaje {
	asunto: string,
	mensaje: string,
	user_id: string,
}

export type DataServiceType = {
	enviarMensaje: (mensaje: Mensaje) => Promise<Mensaje>
}

class DataService {
	urlBase = 'http://dev.contanimacion.com/api_tablon/api/mensajes';

	async enviarMensaje(mensaje: Mensaje) {
		const url = this.urlBase + '/add';
		const response = await fetch(url, {
			method: 'POST',
			body: JSON.stringify(mensaje),
			headers: {"Content-type": "application/json"}
		});
		const data = await response.json();
		return data;
	}
}

const dataService = new DataService();
export default dataService;
