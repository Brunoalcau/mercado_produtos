const ITEMS_ENDPOINT = 'http://www.localhost:8000';

class ItemsService {
    async getItems(q) {
        let url = `${ITEMS_ENDPOINT}/items`;
        if(q && !q.id){
            url = `${url}?q=${q}`
        }
        if(q.id){
            url = `${url}/${q.id}`
        }
        const response = await fetch(url,{
			method: 'GET',
			headers: {
				Accept: 'application/json'
			}
		});
        if(!response.ok){
			throw new Error(`Items getItems failed, HTTP statu ${response.status}`);
		}
        const data = await response.json();
        if(!data){
			throw new Error(`ItemService getItems failed, children not returned`);
		}
        return data;
    }

}

export default new ItemsService();