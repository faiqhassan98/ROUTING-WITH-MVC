module.exports = {
    get : (req,res) => {
        res.send('get categories');
    },
    
    post : (req,res) => {
        res.send('Post categories');
    },

    put : (req,res) => {
        res.send('Put categories');
    },

    del : (req,res) => {
        res.send('Delete categories');
    }
}