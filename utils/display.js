export class Display {
    constructor(username){
        this.username = username
    }

    displayUserData = (userdata) => {
        console.log(`Recent events for user: ${this.username}`);
        for (const event of userdata) {
            const eventType = event.type;
            const repoName = event.repo.name;
            const createdAt = new Date(event.created_at).toLocaleString();
            console.log(`Event: ${eventType}`); 
            console.log(`Repository: ${repoName}`);
            console.log(`Created at: ${createdAt}`);         
            console.log('-----------------------------------');
        }
    }
}