class Comment {
    constructor(comment) {
        this.comment = comment;
    }
    get getComment(){
        return this.comment;
    }
    set setComment(comment) {
        this.comment = comment;
    }
}

module.exports.Comment = Comment;
