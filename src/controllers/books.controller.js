// importation du module models
const db = require('../models');
// extraction du modèle book depuis l'objet
const book = db.Book;

// logique d'affichage de tout les livres
exports.listBooks = async (req, res) => {
    try {
        const books = await book.findAll();
        res.status(200).json({
            success: true,
            message: 'list des livres',
            data: books
        });
        
    } catch (error) {
        console.error('erreur lors de la récupération des livres en get', error);
        res.status(500).json({
            success: false,
            message: 'échec lors de la récupération des livres en get',
            error: error.message,
            data: null
        });
    }
    
};

// logique d'affichage d'un livre
exports.getBookById = async (req, res) => {
    const id = Number(req.params.id);

    const bookbyid = await book.findByPk(id);
    try {
        if (!bookbyid) {
            return res.status(404).json({
                success: false,
                message: "livre non trouvé",
                data: null
            });
            
        };
        return res.status(200).json({
            success:true,
            message: 'livre trouvé',
            data: bookbyid
        });
    } catch (error) {
        console.log('erreur lors de la récupération du livre en getById', error);
        res.status(500).json({
            success: false,
            message: 'échéc lors de la récupération du livre en getById',
            data: null
        });
        
        
    }
    
};

// ajout d'un livre
exports.createBook = async (req, res) => {
    const {title,autor,dispo} = req.body;
    
    try {
        const newBook = await book.create({title,autor,dispo});
        res.status(201).json({
            success: true,
            message: 'livre crée avec sccès',
            data: newBook
        });
    } catch (error) {
        console.log('erreur lors de la création du livre en post', error);
        res.status(500).json({
            success: false,
            message: 'échec lors de la création du livre en post',
            data: null
        });
        
        
    }
    
};

// modification d'un livre
exports.updateBook = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const {title,autor,dispo} = req.body;

        // recherche du livre par id
        const bookToUpdate = await book.findByPk(id);
        if (!bookToUpdate) {
            return res.status(404).json({
                success: false,
                message: 'livre non trouvé',
                data: null
            });
        }
        // modification du livre
        bookToUpdate.title = title;
        bookToUpdate.autor = autor;
        bookToUpdate.dispo = dispo;
        // sauvegarde dans la db
        await bookToUpdate.save();
        return res.status(200).json({
            success: true,
            message: 'livre modifié',
            data: bookToUpdate
        });

    } catch (error) {
        console.log('erreur dans la modification du livre en PUT', error);
        res.status(500).json({
            success: false,
            message: 'échec lors de la modification du livre en PUT',
            data: null
        });       
        
    }
    
}

// Supression d'un livre
exports.deleteBook = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const bookToDelete = await book.findByPk(id);
        if (!bookToDelete) {
            return res.status(404).json({
                success: false,
                message: 'erreur lors de la supression du livre',
                data: null
            });
        }
        // supression du livre
        await bookToDelete.destroy();
        return res.status(200).json({
            success: true,
            message: 'livre supprimé, ya pu!',
            data: bookToDelete
        });
    } catch (error) {
        console.log('erreur lors de la supression du livre', error);
        res.status(500).json({
            success: false,
            message: 'échec lors de la supression  du livre',
            data: null
        });
        
    }
    
};