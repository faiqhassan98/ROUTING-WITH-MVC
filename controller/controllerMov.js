module.exports = {
    
    get : (req,res) => {
        res.send('get Movies');
    },
    
    post : (req,res) => {
        res.send('Post Movies');
    },

    put : (req,res) => {
        res.send('Put Movies');
    },

    del : (req,res) => {
        res.send('Delete Movies');
    }

}