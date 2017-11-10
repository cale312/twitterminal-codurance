import * as assert from "assert";

import moment = require("moment");
import { User } from "../app/User";
import { Post } from "../app/Post";

describe("The Post Class", () => {

    it("should correctly return a Post's text, author and timestamp", () => {
        let post = new Post({
            text: "This is my first post!",
            author: new User("Sandro"),
            createdAt: moment("2012-12-12 09:12:26")
        });

        assert.equal(post.text, "This is my first post!");
        assert.equal(post.author.name, "Sandro");
        assert.equal(post.createdAt.format('YYYY-MM-DD HH:mm:ss'), "2012-12-12 09:12:26");
    })

});