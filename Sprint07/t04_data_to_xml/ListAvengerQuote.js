const fs = require('fs');
const avengerQuote = require("./AvengerQuote");

class ListAvengerQuote {
    arr = new Array();
    addAvengerQuote(avqoute) {
        arr.push(avqoute);
    }
    toXML(fileName) {
        const xmlStr = '<document/>';
        const parser = new DOMParser();
        const doc = parser.parseFromString(xmlStr, "application/xml");

        for(let quote of arr) {
            const doc = parser.parseFromString(xmlStr, "application/xml");
            let xml_quote = xmlStr.appendChild("quote");
            xml_quote.appendChild("id", avengerQuote.id);
            xml_quote.appendChild("author", avengerQuote.author);
            xml_quote.appendChild("quote", avengerQuote.quote);
            let xml_photos = xml_quote.appendChild("photos");
            for(let photo of avengerQuote.photo) {
                xml_photos.appendChild("photo", photo);
            }
            xml_quote.appendChild("publishDate", avengerQuote.publishDate);
            let xml_comments = xml_quote.appendChild("comments");
            for(let comment of avengerQuote.comments) {
                xml_comments = xml_comments.appendChild("comment");
                for(let date of comment.publishDate) {
                    xml_comments.appendChild("date", date);
                }
                for(let text of comment.text) {
                    xml_comments.appendChild("text", text);
                }
            }
        }

        fs.writeFile(fileName, xmlStr, { flag: 'w+' }, err => {});
    }
    fromXML(fileName) {
        xml_obj = fs.readFile(fileName, (err, data) => { });
        let list = new ListAvengerQuote();
        
        for(let quotes of xml_obj.children() ) {
            let id = avengerQuote.id.toString();
            let author = avengerQuote.author.toString();
            let quote = avengerQuote.quote.toString();
            let photos = new Array();
            for(let photo of avengerQuote.photos) photos = photo;
            let avnquote = new avengerQuote(id, author, quote, photos);
            let comments = new Array();
            for(let comment of avengerQuote.comments) comments = comment;
            avnquote.setComment(comments);
            list.addAvengerQuote(avnquote);
        }
        return list;
    }
}

