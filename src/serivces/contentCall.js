import axios from "axios";

export async function getPosts(){
	try {
		const res = await axios.get(
			`https://cdn.contentful.com/spaces/bicmbwrww2bh/entries?access_token=tNiGC3b1I64hpUi6pqo6CLuLcn-kJGF_l2RFE3NYDqk`
		);
		if (res.status === 200) {
            const posts = await res.data.items
            return posts
		} else {
			console.log("Request was not successful.");
		}
	} catch (err) {
		console.log("Error fetching data:", err);
	}
}


