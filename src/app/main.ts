import { Twitterminal } from "./Twitterminal";
import config from "../twitterminal.config";

let twitterminal = new Twitterminal(
    config.commands,
    config.repository.forUsers,
    config.repository.forPosts
);

Promise.all(twitterminal.start());