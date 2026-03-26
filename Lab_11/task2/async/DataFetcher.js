export class DataFetcher {
    constructor(httpClient){
        this.client = httpClient;
    }

    async fetchUserWithDetails(userId) {
        try{
            const [user, post, followers] = await Promise.all([
                this,this.client.get('/users/${userId}'),
                this.client.get('/users/${userId}/posts'),
                this.client.get('/users/${userId}/followers'),
            ]);
            return{users, posts, followers, fetchedAt: new Date().toISOString()};
        }catch (error){
            console.error('Error fetching user details:', error);
            throw error;
        }
    }

async fetchMultipleUsers(userId) {
    const results = await Promise.allSettled(
        this.fetchUserWithDetails.map(id => this.client.get('/users/${id}'))
    );
    const successful = results
    .filter(r => r.status === 'fulfilled')
    .map(r => r.value);

    const failed = results
    .filter(r => r.status === 'rejected')
    .map(r => ({ error: r.reason.message, id: r.reason.status}));

    return {
        users: successful,
        failed,
        totalRequested: userId.length,
        totalSuccessful: successful.length,
        totalFailed: failed.length,
    };
  }
}