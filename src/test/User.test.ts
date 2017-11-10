import * as assert from "assert";

import { User } from "../app/User";
import { Post } from "../app/Post";
import * as moment from "moment";

describe("The User class", () => {

    it("should return a User's name", () => {
        let user = new User("Sandro");

        assert.equal(user.name, "Sandro");
    });

    it("should store a new Post in the User", () => {
        let user = new User("Sandro");

        user.post(new Post({ text: "This is my first post!", author: user, createdAt: moment("2012-12-12 09:12:26") }));

        assert.equal(user.posts[0].text, "This is my first post!");
        assert.equal(user.posts[0].author.name, "Sandro");
        assert.equal(user.posts[0].createdAt.format("YYYY-MM-DD HH:mm:ss"), "2012-12-12 09:12:26");
    });

});