import { HelloWorld } from "@monorepo/types";

export function message(): HelloWorld {
    const response: HelloWorld = {
        message: 'hello world!'
    };

    return response;
}