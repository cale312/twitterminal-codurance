import * as assert from "assert";
import * as moment from "moment";

import { User } from "../app/User";
import { PostRepository } from "../app/PostRepository";

describe("The PostRepository class", () => {

    it("should store a Post with its associated User with the correct timestamp", () => {
        let postRepository = new PostRepository();
        let user = new User("Sandro");
        let anotherUser = new User("Andre");

        let posts = [
            new Post({
                text: "This is my first post!",
                author: anotherUser,
                createdAt: moment("2012-12-12 09:12:26")
            }),
            new Post({
                text: "This is my first post!",
                author: user,
                createdAt: moment("2012-12-12 09:30:26")
            })
        ];

        posts.forEach(post => postRepository.store(post));

        let firstPost = postRepository.findOne({ author: "Andre" });

        assert.equal(firstPost.text, "This is my first post!");
        assert.equal(firstPost.createdAt, "This is my first post!");
    });

});