export class Display {
    constructor(username){
        this.username = username
    }

    displayUserData = (userdata) => {
        console.log(`Recent events for user: ${this.username}`);
        for (const event of userdata) {
            const eventType = event.type;
            const repoName = event.repo.name;
            
            console.log(`Event: ${eventType}, Repository: ${repoName}`);
            
        }
    }
}