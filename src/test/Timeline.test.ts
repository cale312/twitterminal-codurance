import * as assert from "assert";
import * as moment from "moment";

import { Post } from "../app/Post";
import { Timeline } from "../app/Timeline";

describe("The Timeline Class", () => {

    it("should return posts in ascending order", () => {
        let posts = [
            new Post({
                text: "This is my second post!",
                author: "Sandro",
                createdAt: moment().subtract(9, "minutes")
            }),
            new Post({
                text: "This is my first post!",
                author: "Sandro",
                createdAt: moment().subtract(11, "minutes")
            })
        ];

        let timeline = new Timeline(posts);

        assert.deepEqual(timeline.posts, [
            "This is my second post! (9 minutes ago)",
            "This is my first post! (11 minutes ago)"
        ]);

        assert.deepEqual(timeline.display(), "Timeline has been logged to the console.");
    });

});